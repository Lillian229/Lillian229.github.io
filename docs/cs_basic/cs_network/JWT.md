# JWT

JSON Web token简称JWT， 是用于对应用程序上的用户进行身份验证的标记。也就是说, 使用 JWTS 的应用程序不再需要保存有关其用户的 cookie 或其他session数据。此特性便于可伸缩性, 同时保证应用程序的安全。

在身份验证过程中, 当用户使用其凭据成功登录时, 将返回 JSON Web token, 并且必须在本地保存 (通常在本地存储中)。

每当用户要访问受保护的路由或资源 (端点) 时, 用户代理(user agent)必须连同请求一起发送 JWT, 通常在授权标头中使用Bearer schema。后端服务器接收到带有 JWT 的请求时, 首先要做的是验证token。

## JWT组成
一个JWT实际上就是一个字符串，它由三部分组成，头部、载荷与签名。
### 头部（Header）
头部用于描述关于该JWT的最基本的信息，例如其类型以及签名所用的算法等。这也可以被表示成一个JSON对象。

`{"typ":"JWT","alg":"HS256"}`

在头部指明了签名算法是HS256算法。 进行BASE64编码（http://base64.xpcha.com/），编码后的字符串如下：eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9

### 载荷（playload）
载荷就是存放有效信息的地方。这个名字像是特指飞机上承载的货品，这些有效信息包含三个部分：
1. 标准中注册的声明（建议但不强制使用）
- iss: jwt签发者
- sub: jwt所面向的用户
- aud: 接收jwt的一方
- exp: jwt的过期时间，这个过期时间必须要大于签发时间
- nbf: 定义在什么时间之前，该jwt都是不可用的.
- iat: jwt的签发时间
- jti: jwt的唯一身份标识，主要用来作为一次性token

2. 公共的声明
公共的声明可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密。

3. 私有的声明
私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为base64是对称解密的，意味着该部分信息可以归类为明文信息。

这个指的就是自定义的claim。比如前面那个结构举例中的admin和name都属于自定的claim。这些claim跟JWT标准规定的claim区别在于：JWT规定的claim，	JWT的接收方在拿到JWT之后，都知道怎么对这些标准的claim进行验证(还不知道是否能够验证)；而private claims不会验证，除非明确告诉接收方要对这些claim进行验证以及规则才行。定义一个payload：

``` 
{"sub":"1234567890","name":"John Doe","admin":true}
```
    
然后将其进行base64加密，得到Jwt的第二部分。

```
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRta	W4iOnRydWV9
```

### 签证（signature）
jwt的第三部分是一个签证信息，这个签证信息由三部分组成：
- header (base64后的)
- payload (base64后的)
- secret

这个部分需要base64加密后的header和base64加密后的payload使用.连接组成的字符串，然后通过header中声明的加密方式进行加盐secret组合加密，然后就构成了jwt的第三部分。

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```
### 注意
secret是保存在服务器端的，jwt的签发生成也是在服务器端的，secret就是用来进行jwt的签发和jwt的验证，所以，它就是你服务端的私钥，在任何场景都不应该流露出去。一旦客户端得知这个secret, 那就意味着客户端是可以自我签发jwt了。

## 使用场景
1. 一次性验证
比如用户注册后需要发一封邮件让其激活账户，通常邮件中需要有一个链接，这个链接需要具备以下的特性：能够标识用户，该链接具有时效性（通常只允许几小时之内激活），不能被篡改以激活其它可能的账户……这种场景就和 jwt 的特性非常贴近，jwt 的 payload中固定的参数：iss 签发者和 exp 过期时间正是为其做准备的。
2. restful api 的无状态认证
使用 jwt 来做 restful api 的身份认证也是值得推崇的一种使用方案。客户端和服务端共享 secret；过期时间由服务端校验，客户端定时刷新；签名信息不可被修改......spring security oauth jwt 提供了一套完整的 jwt 认证体系，以笔者的经验来看：使用 oauth2 或 jwt 来做 restful api 的认证都没有大问题，oauth2 功能更多，支持的场景更丰富，后者实现简单。
3. 使用 jwt 做单点登录+会话管理(不推荐)


## JWT token 泄露了怎么办
使用 https 加密你的应用，返回 jwt 给客户端时设置 httpOnly=true 并且使用 cookie 而不是 LocalStorage 存储 jwt，这样可以防止 XSS 攻击和 CSRF攻击。

## Secret如何设计
jwt 唯一存储在服务端的只有一个 secret，个人认为这个 secret 应该设计成和用户相关的属性，而不是一个所有用户公用的统一值。这样可以有效的避免一些注销和修改密码时遇到的窘境。

## 注销和修改密码
传统的 session+cookie 方案用户点击注销，服务端清空 session 即可，因为状态保存在服务端。但 jwt 的方案就比较难办了，因为 jwt 是无状态的，服务端通过计算来校验有效性。没有存储起来，所以即使客户端删除了 jwt，但是该 jwt 还是在有效期内，只不过处于一个游离状态。分析下痛点：注销变得复杂的原因在于 jwt 的无状态。提供几个方案，视具体的业务来决定能不能接受：

仅仅清空客户端的 cookie，这样用户访问时就不会携带 jwt，服务端就认为用户需要重新登录。这是一个典型的假注销，对于用户表现出退出的行为，实际上这个时候携带对应的 jwt 依旧可以访问系统。

清空或修改服务端的用户对应的 secret，这样在用户注销后，jwt 本身不变，但是由于 secret 不存在或改变，则无法完成校验。这也是为什么将 secret 设计成和用户相关的原因。

借助第三方存储自己管理 jwt 的状态，可以以 jwt 为 key，实现去 Redis 一类的缓存中间件中去校验存在性。方案设计并不难，但是引入 Redis 之后，就把无状态的 jwt 硬生生变成了有状态了，违背了 jwt 的初衷。实际上这个方案和 session 都差不多了。

修改密码则略微有些不同，假设号被到了，修改密码（是用户密码，不是 jwt 的 secret）之后，盗号者在原 jwt 有效期之内依旧可以继续访问系统，所以仅仅清空 cookie 自然是不够的，这时，需要强制性的修改 secret。

## 如何解决续签问题
传统的 cookie 续签方案一般都是框架自带的，session 有效期 30 分钟，30 分钟内如果有访问，session 有效期被刷新至 30 分钟。而 jwt 本身的 payload 之中也有一个 exp 过期时间参数，来代表一个 jwt 的时效性，而 jwt 想延期这个 exp 就有点身不由己了，因为 payload 是参与签名的，一旦过期时间被修改，整个 jwt 串就变了，jwt 的特性天然不支持续签。
### 解决方案
### 1.每次请求刷新 jwt。
jwt 修改 payload 中的 exp 后整个 jwt 串就会发生改变，那就让它变好了，每次请求都返回一个新的 jwt 给客户端。只是这种方案太暴力了，会带来的性能问题。
### 2.只要快要过期的时候刷新 jwt
此方案是基于上个方案的改造版，只在前一个jwt的最后几分钟返回给客户端一个新的 jwt。这样做，触发刷新 jwt 基本就要看运气了，如果用户恰巧在最后几分钟访问了服务器，触发了刷新，万事大吉。如果用户连续操作了 27 分钟，只有最后的 3 分钟没有操作，导致未刷新 jwt，无疑会令用户抓狂。
### 3.完善 refreshToken
借鉴 oauth2 的设计，返回给客户端一个 refreshToken，允许客户端主动刷新 jwt。一般而言，jwt 的过期时间可以设置为数小时，而 refreshToken 的过期时间设置为数天。
### 4.使用 Redis 记录独立的过期时间
在 Redis 中单独为每个 jwt 设置了过期时间，每次访问时刷新 jwt 的过期时间，若 jwt 不存在与 Redis 中则认为过期。
### 5.如何防止令牌被盗用？
令牌：
```
eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJObzAwMDEiLCJpYXQiOjE1NjkxNTg4MDgsInN1YiI6IuS4u-mimCIsImlzcyI6Ind3dy5pdGhlaW1hLmNvbSIsImV4cCI6MTU2OTE1ODgyMywiYWRkcmVzcyI6IuS4reWbvSIsIm1vbmV5IjoxMDAsImFnZSI6MjV9.lkaOahBKcQ-c8sBPp1Op-siL2k6RiwcEiR17JsZDw98
```

如果令牌被盗，只要该令牌不过期，任何服务都可以使用该令牌，有可能引起不安全操作。我们可以在每次生成令牌的时候，将用户的客户端信息获取，同时获取用户的IP信息，然后将IP和客户端信息以MD5的方式进行加密，放到令牌中作为载荷的一部分，用户每次访问微服务的时候，要先经过微服务网关，此时我们也获取用户客户端信息，同时获取用户的IP，然后将IP和客户端信息拼接到一起再进行MD5加密，如果MD5值和载荷不一致，说明用户的IP发生了变化或者终端发生了变化，有被盗的嫌疑，此时不让访问即可。这种解决方案比较有效。
当然，还有一些别的方法也能减少令牌被盗用的概率，例如设置令牌超时时间不要太长。