# 网络通信
## TCP和UDP
![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220318142803.png)

- TCP(Transmission Control Protocol 传输控制协议)是一种面向连接(连接导向)的、可靠的、 基于IP的传输层协议。
- UDP是User Datagram Protocol的简称，中文名是用户数据报协议，是OSI参考模型中的传输层协议，它是一种无连接的传输层协议，提供面向事务的简单不可靠信息传送服务。 
- TCP和UDP都是来自于传输层的协议。传输层位于应用层和网络层之间，负责位于不同主机中进程之间的通信。

### 区别

![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220318143123.png)

1. TCP基于连接UDP无连接
2. TCP要求系统资源较多，UDP较少 
3. TCP保证数据正确性，UDP可能丢包 
4. TCP保证数据顺序，UDP不保证 


## HTTP协议
- 客户端和服务器端之间数据传输的格式规范，格式简称为“超文本传输协议”。 
- 是一个基于请求与响应模式的、无状态的、应用层的协议，基于 TCP 的连接方式

## HTTP1.0 & 1.1 & 2.0
[HTTP1.0 & 1.1 & 2.0区别](../../blog/HTTP1.0%20VS%20HTTP1.1%20VS%20HTTP2.0.md)

## 从输入URL地址到看到页面，中间都经历了啥
[从输入URL地址到看到页面，中间都经历了啥](../../blog/performance_optimization.md#从输入url地址到看到页面中间都经历了啥)

## TCP的三次握手
为了准确无误地把数据送达目标处，TCP协议采用了三次握手策略。 
- 第一次握手：客户端给服务器发送一个SYN。客户端发送网络包，服务端收到了。服务器得出结论：客户端的发送能力，服务端的接收能力正常。
- 第二次握手：服务端收到SYN报文之后，会应答一个SYN+ACK报文。服务端发包，客户端收到了。客户端得出结论：服务端的接收和发送能力，客户端的接收和发送能力正常。但是此时服务端不能确认客户端的接收能力是否正常。
- 第三次握手;客户端收到SYN+ACK报文之后，回应一个ACK报文。客户端发包，服务端收到了。服务器得出结论：客户端的接收和发送能力，自己的接收发送能力都正常。
通过三次握手，双方都确认对方的接收以及发送能力正常。


- seq序号，用来标识从TCP源端向目的端发送的字节流，发起方发送数据时对此进行标记

- ack确认序号，只有ACK标志位为1时，确认序号字段才有效，ack=seq+1

- 标志位
  -  ACK：确认序号有效
  - RST：重置连接
  -  SYN：发起一个新连接
      - 同步序列编号（Synchronize Sequence Numbers）。是TCP/IP建立连接时使用的握手信号。
  - FIN：释放一个连接3
  - ……

### ⭐三次握手为什么不用两次，或者四次?
TCP作为一种可靠传输控制协议，其核心思想：既要保证数据可靠传输，又要提高传输的效率！
![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220318143827.png)

### ⭐为什么连接的时候是三次握手，关闭的时候却是四次握手？

服务器端收到客户端的SYN连接请求报文后，可以直接发送SYN+ACK报文

但关闭连接时，当服务器端收到FIN报文时，很可能并不会立即关闭链接，所以只能先回复一个ACK报文，告诉客户端：”你发的FIN报文我收到了”，只有等到服务器端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送，故需要四步握手。


## HTTP中重定向和请求转发的区别
实现： 
- 转发：用request的getRequestDispatcher()方法得到ReuqestDispatcher对象，调用forward（）方法
request.getRequestDispatcher("other.jsp").forward(request, response);
- 重定向：调用response的sendRedirect(）方法
response.sendRedirect("other.jsp");
1. 重定向2次请求，请求转发1次请求
2. 重定向地址栏会变，请求转发地址栏不变
3. 重定向是浏览器跳转，请求转发是服务器跳转
4. 重定向可以跳转到任意网址，请求转发只能跳转当前项目

##  Get和Post的区别
1. Get是不安全的，因为在传输过程，数据被放在请求的URL中；Post的所有操作对用户来说都是不可见的。       
2. Get传送的数据量较小，一般传输数据大小不超过2k-4k（根据浏览器不同，限制不一样，但相差不大这主要是因为受URL长度限制；Post传送的数据量较大，一般被默认为不受限制。       
3. Get限制Form表单的数据集的值必须为ASCII字符；而Post支持整个ISO10646字符集。                     
4. Get执行效率却比Post方法好。Get是form提交的默认方法。 

## cookie和session的区别
1. 存储位置不同

    cookie的数据信息存放在客户端浏览器上。 

    session的数据信息存放在服务器上。 
     
2. 存储容量不同

    单个cookie保存的数据<=4KB，一个站点最多保存20个Cookie。 

    对于session来说并没有上限，但出于对服务器端的性能考虑，session内不要存放过多的东西，并且设置session删除机制。 
3. 存储方式不同

    cookie中只能保管ASCII字符串，并需要通过编码方式存储为Unicode字符或者二进制数据。 
    
    session中能够存储任何类型的数据，包括且不限于string，integer，list，map等。 
4. 隐私策略不同

    cookie对客户端是可见的，别有用心的人可以分析存放在本地的cookie并进行cookie欺骗，所以它是不安全的。 

    session存储在服务器上，不存在敏感信息泄漏的风险。 
5. 有效期上不同

    开发可以通过设置cookie的属性，达到使cookie长期有效的效果。 

    session依赖于名为JSESSIONID的cookie，而cookie JSESSIONID的过期时间默认为-1，只需关闭窗口该session就会失效，因而session不能达到长期有效的效果。 
6. 服务器压力不同
    cookie保管在客户端，不占用服务器资源。对于并发用户十分多的网站，cookie是很好的选择。 

    session是保管在服务器端的，每个用户都会产生一个session。假如并发访问的用户十分多，会产生十分多的session，耗费大量的内存。



## Jsp和Servlet
1. 区别
- 相同点：
jsp经编译后就变成了servlet，jsp本质就是servlet，jvm只能识别java的类，不能识别jsp代码，web容器将jsp的代码编译成jvm能够识别的java类。其实就是当你通过 http 请求一个 JSP 页面是，首先 Tomcat 会调用 service（）方法将JSP编译成为 Servlet，然后执行 Servlet。

- 不同点：
JSP侧重视图，Sevlet主要用于控制逻辑。
Servlet中没有内置对象 。
JSP中的内置对象都是必须通过HttpServletRequest对象，HttpServletResponse对象以及HttpServlet对象得到。

2. Servlet的生命周期
```java
// 1. servlet对象创建时，调用此方法
public void init(ServletConfig servletConfig);

// 2. 用户访问servlet时，调用此方法
public void service(ServletRequest servletRequest, ServletResponse servletResponse);

// 3. servlet对象销毁时，调用此方法
public void destroy();
```


3. JSP九大内置对象
- out对象：用于向客户端、浏览器输出数据。
- request对象：封装了来自客户端、浏览器的各种信息。
- response对象：封装了服务器的响应信息。
- exception对象：封装了jsp程序执行过程中发生的异常和错误信息。
- config对象：封装了应用程序的配置信息。
- page对象：指向了当前jsp程序本身。
- session对象：用来保存会话信息。也就是说，可以实现在同一用户的不同请求之间共享数
- application对象：代表了当前应用程序的上下文。可以在不同的用户之间共享信息。
- pageContext对象：提供了对jsp页面所有对象以及命名空间的访问。


## Ajax
Ajax 即"Asynchronous JavaScript And XML"（异步 JavaScript 和 XML），是指一种创建交互式、快速动态网页应用的网页开发技术，无需重新加载整个网页的情况下，能够更新部分网页的技术。
```js
     $.ajax({
        选项
    })
    常见的选项有:
    type: 请求方式, 常见的值有"get", "post"等, 默认值: get
    url: 请求的路径, "/ajax/hello"
    data: 请求的参数, 参数的常见写法有 键值对或者json
    方式1: name = tom & pwd=123
    方式2: { "name": "tom", "pwd": "123" }
    success:请求成功后的回调函数 function(返回值的参数名) { }
    contentType: 用来设置请求参数的mime类型, 默认值:表单的enctype默认值 name = tom & pwd=123
    error:ajax请求时内部发生错误时执行的回调函数 function() { }
    dataType:指定返回值的类型 常见值:text json
    async:是否异步 默认值true
```

优势：
1. 通过异步模式，提升了用户体验 
2. 优化了浏览器和服务器之间的传输，减少不必要的数据往返，减少了带宽占用 
3. Ajax引擎在客户端运行，承担了一部分本来由服务器承担的工作，从而减少了大用户量下的服务器负载。 