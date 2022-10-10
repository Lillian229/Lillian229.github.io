# Ajax_basic

## Ajax
Ajax 是“Asynchronous JavaScript and XML”的缩写。他是指一种创建交互式网页应用的网页开发技术。沟通客户端与服务器，可以在不必刷新整个浏览器的情况下，与服务器进行异步通讯的技术

## Ajax的原理
通过 XMLHTTPRequest 对象来向服务器发异步请求，从服务器获得数据，然后用 javascript来操作 DOM 而更新页面。这其中最关键的一步就是从服务器获得请求数据。

XMLHTTPRequest 是 Ajax 的核心机制，它是在 IE5 中首先引入的，是一种支持异步请求的技术。 简单的说，也就是 javascript 可以及时向服务器提出请求和处理响应，而不阻塞用户。达到无刷新的效果。


## Ajax的优点
1. 最大的一点是页面无刷新，用户的体验非常好。
2. 使用异步方式与服务器通信，具有更加迅速的响应能力。
3. 可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，  减轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，Ajax 的原则是“按需取数据”，可以最大程度的减少冗余请求，和响应对服务器造成的负担。
4. 基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。 

## Ajax 的缺点
1. Ajax 不支持浏览器 back 按钮。
2. 安全问题 Ajax 暴露了与服务器交互的细节。
3. 对搜索引擎的支持比较弱。
4. 破坏了程序的异常机制。



## Ajax的实现流程

1. 创建XMLHTTPRequest 对象,也就是创建一个异步调用对象.
2. 创建一个新的 HTTP 请求,并指定该 HTTP 请求的方法、URL及验证信息.
3. 设置响应 HTTP 请求状态变化的函数.
4. 发送HTTP 请求.
5. 获取异步调用返回的数据.
6. 使用JavaScript 和 DOM 实现局部刷新.
```js
<script type="text/javascript"> var HTTPRequest;
    function checkUsername() {
        //创建 XMLHTTPRequest 对象 
        if (window.XMLHTTPRequest) {
            //在 IE6 以上的版本以及其他内核的浏览器(Mozilla)等 
            HTTPRequest = new XMLHTTPRequest();
        }
        else if (window.ActiveXObject) {
            //在 IE6 以下的版本 
            HTTPRequest = new ActiveXObject();
        }
        //创建 HTTP 请求 
        HTTPRequest.open("POST", "Servlet1", true);
        //因为我使用的是 post 方式，所以需要设置消息头 
        HTTPRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //指定回调函数 
        HTTPRequest.onreadystatechange = response22;
        //得到文本框的数据 
        var name = document.getElementById("username").value;
        //发送 HTTP 请求，把要检测的用户名传递进去 
        HTTPRequest.send("username=" + name);
    } //接收服务器响应数据
    function response22() { //判断请求状态码是否是 4【数据接收完成】 
        if (HTTPRequest.readyState == 4) {
            //再判断状态码是否为 200【200 是成功的】 
            if (HTTPRequest.status == 200) {
                //得到服务端返回的文本数据 
                var text = HTTPRequest.responseText;
                //把服务端返回的数据写在 div 上
                var div = document.getElementById("result");
                div.innerText = text;
            }
        }
    } 
</script>

```

## Ajax接收到的数据类型有哪些，数据如何处理
接收到的数据类型 String / JSON 字符串 / 二进制数据流 
- JSON 字符串反序列化后，转成引用类型使用 
- String 直接使用 
- 前端用 Blob 转换 

### 如何处理数据 

1. 字符串转对象 

第一种方式：eval（）； 
```js
var data='{"student"：[{"name":"张三","age":"11"}，{"name":"李四","age":"11"},{"name":"王 五 ","age":"11"}]}'； 

eval（’（“+data+”）’）; 

```
第二种方式：JSON.parse（）； 
```js
var data='{"student"：[{"name":"张三","age":"11"}，{"name":"李四","age":"11"},{"name":"王 五 ","age":"11"}]}’； 

JSON.parse（data）； 
```


## Ajax和Axios的区别
- 看代码区别不大
- Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
- Ajax是与服务器交换数据并更新部分网页的，在不重新加载整个页面的情况下。

> 其实jQuery 将请求技术进行了封装变成了-> ajax<br>
而通过promise又把ajax进行封装就成了-> axios。

> 在现在的前端 mvvm 模式下 axios 更适合于数据请求。

- 代码
```js
// ajax:
$.ajax({
    url: '接口地址',
    type: 'get', //或者post　　 请求类型
    dataType: 'json',
    data: { // 要发送的请求参数
        'username' : 'yaya',
        'password' : '123456'
　  },
    success : function (response) {
        console.log(response); // 请求返回的数据
    }
})


// axios:
axios({
    url:'接口地址',
    method: 'get', //或者 post    请求类型
    responseType: 'json', //默认格式，如果就是 json 格式可以不写
    data: {
        'username' : 'yaya',
        'password' : '123456'
　　　　}
}).then( function(response){ // 请求正确返回的数据
    console.log(response);
    console.log(response.data);
}).catch( function(error) { // 请求错误返回的数据
    console.log(error);
})
```