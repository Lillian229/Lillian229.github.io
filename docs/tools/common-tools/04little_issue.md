# 4.一些小问题
## URL特殊字符转义编码
<div class="table-box">
    <table border="1" cellpadding="1" cellspacing="1" style="width:500px;">
        <tbody>
            <tr>
                <td>字符</td>
                <td>含义</td>
                <td>URL编码</td>
            </tr>
            <tr>
                <td><strong>（空格）</strong></td>
                <td>URL中的空格可以用+号或者编码</td>
                <td>%20</td>
            </tr>
            <tr>
                <td><strong>#</strong></td>
                <td>表示书签或者锚点</td>
                <td>%23</td>
            </tr>
            <tr>
                <td><strong>%</strong></td>
                <td>指定特殊字符 </td>
                <td>%25</td>
            </tr>
            <tr>
                <td><strong>&amp;</strong></td>
                <td>URL 中指定的参数间的分隔符</td>
                <td>%26</td>
            </tr>
            <tr>
                <td><strong>(</strong></td>
                <td></td>
                <td>%28</td>
            </tr>
            <tr>
                <td><strong>)</strong></td>
                <td></td>
                <td>%29</td>
            </tr>
            <tr>
                <td><strong>+</strong></td>
                <td>+号表示空格</td>
                <td>%2B</td>
            </tr>
            <tr>
                <td><strong>=</strong></td>
                <td>URL 中指定参数的值</td>
                <td>%3D</td>
            </tr>
            <tr>
                <td><strong>,</strong></td>
                <td></td>
                <td>%2C</td>
            </tr>
            <tr>
                <td><strong>/</strong></td>
                <td>分隔目录和子目录 </td>
                <td>%2F</td>
            </tr>
            <tr>
                <td><strong>:</strong></td>
                <td></td>
                <td>%3A</td>
            </tr>
            <tr>
                <td><strong>;</strong></td>
                <td></td>
                <td>%3B</td>
            </tr>
            <tr>
                <td ><strong>&lt;</strong></td>
                <td rowspan = "3">在普通文本中起到分隔URL的作用</td>
                <td>%3C</td>
            </tr>
            <tr>
                <td><strong>&gt;</strong></td>
                <!-- <td></td> -->
                <td>%3E</td>
            </tr>
            <tr>
                <td><strong>"</strong></td>
                <!-- <td></td> -->
                <td>%22</td>
            </tr>
            <tr>
                <td><strong>?</strong></td>
                <td>分隔实际的URL和参数</td>
                <td>%3F</td>
            </tr>
            <tr>
                <td><strong>@</strong></td>
                <td></td>
                <td>%40</td>
            </tr>
            <tr>
                <td><strong>\</strong></td>
                <td></td>
                <td>%5C</td>
            </tr>
            <tr>
                <td><strong>|</strong></td>
                <td></td>
                <td>%7C</td>
            </tr>
        </tbody>
    </table>
</div>

### 转义字符的原因

如果你的表单使用get方法提交，并且提交的参数中有“&”等特殊符的话，如果不做处理，在service端就会将&后面的作为另外一个参数来看待。例如 
表单的action为list.jsf?act=go&state=5 
则提交时通过request.getParameter可以分别取得act和state的值。 
如果你的本意是act='go&state=5'这个字符串，那么为了在服务端拿到act的准确值，你必须对&进行转义 

### url转义字符原理
**Url编码的原则就是使用安全的字符（没有特殊用途或者特殊意义的可打印字符）去表示那些不安全的字符。**

将这些特殊的字符转换成ASCII码，格式为：%加字符的ASCII码，即一个百分号%，后面跟对应字符的ASCII（16进制）码值。

解决方法如下(以+号为例)：

方法一、修改客户端，将客户端带“+”的参数中的“+”全部替换为‍“2B%”，这样参数传到服务器端时就能得到“+”了。

方法二、修改服务器端，将空格替换为“+”，这种方式只适用于参数中有‍“+”没有空格的情况。

例子：
```
String a = reuqest.‍getParameter("clientStr")‍.replace(' ','+');
```
如果客户端为clientStr=test+OK，那么a的值为test+OK;


方法三、修改服务器端，将获取参数的方法由‍reuqest.‍getParameter改为‍request.getQueryString().substring(0)，然后对得到的字符串进行解析。
例子：
```js 
‍‍String a =request.getQueryString().substring(0); 
```
‍如果客户端为clientStr=test+OK，那么a的值为‍clientStr=test+OK，需要再解析一下，
a=a.‍substring(10);得到a的值为‍test+OK。


附：一个JS，用来转义URL中特殊字符的。
```js
‍function URLencode(sStr)   
{  
    return escape(sStr).replace(/\+/g, '%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F');  
} 
```