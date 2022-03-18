# 2.2.2字符串常用方法

所有用 单引号、双引号、反引号 包起来的都是字符串

```js
let str = 'yayasogreat';
// 每一个字符串都是由零到多个字符组成的
str.length //=>字符串长度

str[0] //=>获取索引为零（第一个）字符

str[str.length-1] //=>获取最后一个字符

str.length-1 //最后一项索引

str[10000] //=>undefined 不存在这个索引
//循环输出字符串中的每一个字符

for (let i = 0; i < str.length; i++) {
let char = str[i];
console.log(char);
}
```

## 索引获取字符charAt/charCodeAt
* charAt：根据索引获取指定位置的字符
* charCodeAt：获取指定字符的ASCII码值（Unicode编码值）
```js
/*
* charAt：根据索引获取指定位置的字符
* charCodeAt：获取指定字符的ASCII码值
（Unicode编码值）
* @params
* n [number] 获取字符指定的索引
* @return
* 返回查找到的字符
* 找不到返回的是空字符串不是undefined，
或者对应的编码值
*/
let str = 'lillianfightingeveryday';
console.log(str.charAt(0)); //=>'l'
console.log(str[0]); //=>'l'
console.log(str.charAt(10000)); //=>''
console.log(str[10000]); //=>undefined
console.log(str.charCodeAt(0)); //=>108
console.log(String.fromCharCode(108)); //=> l

```

##  字符串截取substr/substring/slice
- substr(n,m)：从索引n截m个，不写m截到末尾
- substring(n,m)：从索引n截到m
- sclice(n,m):和索引一致，但可使用负数

```js
/* 都是为了实现字符串的截取（在原来字符串中查找
到自己想要的）
* substr(n,m)：从索引n开始截取m个字符，m
不写截取到末尾（后面方法也是）
* substring(n,m)：从索引n开始找到索引为m
处(不含m)
* slice(n,m)：和substring一样，都是找到
索引为m处，但是slice可以支持负数作为索引，其余
两个方法是不可以的
*/
let str = 'lillianfightingeveryday';
console.log(str.substr(3, 7)); //=>从索引3截7个，'lianfig'
console.log(str.substring(3, 7));//=> 从索引3截到索引7（不含7），'lian'
console.log(str.substring(3, 10000)); //=>'lianfightingeveryday' 截取到末尾（超过索引的也只截取到末尾）
console.log(str.slice(3, 7)); //=>'lian'
console.log(str.substring(-7, -3)); //=>'' substring不支持负数索引
console.log(str.slice(-7, -3)); //=>'very' slice支持负数索引 =>快捷查、找：负数索引，可以按照 STR.LENGTH+负索引 的方式找 =>slice(23-7,23-3) =>slice(16,20)
```


##  验证字符存在indexOf/lastIndexof/includes
* 验证字符是否存在
* indexOf(x,y)：获取x第一次出现位置的索
引，y是控制查找的起始位置索引
* lastIndexOf(x)：最后一次出现位置的索引，如果没有这个字符，返回的结果是-1
```js
/*
* 验证字符是否存在
* indexOf(x,y)：获取x第一次出现位置的索
引，y是控制查找的起始位置索引
* lastIndexOf(x)：最后一次出现位置的索引，如果没有这个字符，返回的结果是-1
*/

    let str = 'lillianfightingeveryday';
    console.log(str.indexOf('n')); //=>6
    console.log(str.lastIndexOf('n')); //=>13
    console.log(str.indexOf('@')); //=>-1 不存在返回-1
    if (str.indexOf('@') === -1) {
        // 字符串中不包含@这个字符
    }
    console.log(str.indexOf('fighting')); //=>7验证整体第一次出现的位置，返回的索引是第一个字符所在位置的索引值
    console.log(str.indexOf('ing')); //=>12
    console.log(str.indexOf('n', 7)); //=>13 查找字符串索引7及之后的字符串中，n第一次出现的位置索引
    if (!str.includes('@')) {
        console.log('当前字符串不包含@'); //=>当前字符串不包含@
    }
```
### ⭐使用lodash

##  大小写转换toUpperCase/toLowerCase
**字符串中字母的大小写转换**
* toUpperCase()：转大写
* toLowerCase()：转小写
```js
let str = 'YaYaSoGreat';
// 转大写
str = str.toUpperCase();
console.log(str);
//=>'YAYASOGREAT'

// 转小写
str = str.toLowerCase();
console.log(str);
//=>'yayasogreat'

// 实现首字母大写
str = str.substr(0, 1).toUpperCase() +str.substr(1);
console.log(str);
//=>'Yayasogreat'

```


## 字符串拆分成数组split
* split([分隔符]):把字符串按照指定的分隔符拆分成数组（和数组中join对应）
* split支持传递正则表达式
```js
/*
* split([分隔符]):把字符串按照指定的分隔符拆分成数组（和数组中join对应）
* split支持传递正则表达式
*/
// 需求：把|分隔符变为,分隔符
let str = 'music|movie|eat|sport';
let ary = str.split('|'); //=>["music","movie", "eat", "sport"]
str = ary.join(',');
console.log(str); //=>"music,movie,eat,sport"

```

## 字符串替换replace
* replace(老字符,新字符)：实现字符串的替换（经常伴随着正则而用，不使用正则只替换一次
```js
/*
* replace(老字符,新字符)：实现字符串的替换（经常伴随着正则而用）
*/
let str = 'happy@every@day';
// 在不使用正则表达式的情况下，执行一次REPLACE只能替换一次字符
str = str.replace('@','-');
console.log(str); //=>"happy-every@day" 

// 使用正则
str = str.replace(/@/g,'-');
console.log(str); //=>happy-every-day
```

## match
## localCompare
## trim / trimLeft / trimRight
## ...

## 控制台String.prototype查看所有字符串方法
控制台输出 String.prototype 查看所有字符串中提供的方法

## 时间字符串处理

```js
let time = '2020-5-21 21:41:3';
//=> 变为自己需要呈现的格式，例如：
// "2020年05月21日 21时41分03秒"
// "2020年05月21日"
// "05/21 21:41"
// ...
//不足十位补零的方法
let addZero = val => val.length < 2 ? '0' + val : val;
//处理方式
let ary = time.split(/(?: |-|:)/g);
console.log(ary); //-> ['2020', '5', '21', '21', '41', '3']
time = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日';
console.log(time); //->2020年05月21日

time = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日' + ' ' + addZero(ary[3]) + '时' + addZero(ary[4]) + '分'
console.log(time); //->2020年05月21日 21时41分
```
## 获取url问号后的参数
实现一个方法 queryURLParameter 获取一个URL地址问号后面传递的参数信息
```js
    /*
    * queryURLParams：获取URL地址中问号传参的信息和哈希值
    * @params
    * url [string] 要解析的URL字符串
    * @return
    * [object] 包含参数和哈希值信息的对象
    */


    function queryURLParams(url) {
        //1.获取?和#后面的信息
        let askIn = url.indexOf('?'),
            wellIn = url.indexOf('#'),
            askText = '',
            wellText = '';
        // #不存在
        wellIn === -1 ? wellIn = url.length : null;
        // ?存在
        askIn >= 0 ? askText = url.substring(askIn + 1, wellIn) : null;
        wellText = url.substring(wellIn + 1);
        //2.获取每一部分信息
        let result = {};
        wellText !== '' ? result['HASH'] = wellText : null;
        if (askText !== '') {
            let ary = askText.split('&');
            ary.forEach(item => {
                let itemAry = item.split('=');
                result[itemAry[0]] = itemAry[1];
            });
        }
        return result;
    }

    //基于正则封装的才是最完美的
    function queryURLParams(url) {
        let result = {},
            reg1 = /([^?=&#]+)=([^?=&#]+)/g,
            reg2 = /#([^?=&#]+)/g;
        url.replace(reg1, (n, x, y) =>
            result[x] = y);
        url.replace(reg2, (n, x) =>
            result['HASH'] = x);
        return result;
    }

    let aa =
        'http://www.lilliangithub.cn/index.html?lx=1&name=lillian&try=aaa#box';
    let paramsObj = queryURLParams(aa);
    console.log(paramsObj);//->{lx: '1', name: 'lillian', try: 'aaa', HASH: 'box'}
```

##  实现一个最LOW的验证码：数字+字母共四位
验证码目的：防止外挂程序恶意批量注入的
```html
<body>
    <input type="text" id="codeInp">
    <br>
    <span id="codeBox">AAAA</span>
    <button id="changeCode">看不清换一张</button>
    <script>
        let codeInp = document.getElementById('codeInp'),
            codeBox = document.getElementById('codeBox'),
            changeCode = document.getElementById('changeCode');
        /*
        * queryCode：获取到四位随机验证码，
        然后放到指定的盒子中
        * @params
        * @return
        */
        function queryCode() {
            // 准备获取范围的字符串 0~61
            let area =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";
            for (let i = 0; i < 4; i++) {
                // 每一次循环都获取一个随机的数字索引
                let ran = Math.round(Math.random() * 61);
    
                // 再根据获取的索引从范围字符串中找到对应的字符，把找到的字符拼接到最后的结果中
                result += area.charAt(ran);
            }
            // 放到盒子里面
            codeBox.innerHTML = result;
        }
        // 第一次加载页面需要执行方法，让其显示在页面中
        queryCode();
        // 点击看不清按钮，需要重新执行方法生成新的验证码
        changeCode.onclick = queryCode;
        // 文本框失去焦点的时候：验证用户输入的内容和验证码是否相同，给予相关的提示，如果不一样需要重新生成验证码
        // onblur：文本框失去焦点事件
        codeInp.onblur = function () {
            // 获取用户和验证码内容（表单元素.value / 非标单元素.innerHTML 获取内容）
            let val = codeInp.value,
                code = codeBox.innerHTML;
            // 不区分大小写的验证（都转成小写）
    
            if (val.toLowerCase() === code.toLowerCase()) {
                alert('温馨提示：验证码输入成功！');
            } else {
                alert('温馨提示：验证码输入有误，请重试！');
                codeInp.value = '';
                // 重新生成验证码
                queryCode();
            }
        }
    </script>
</body>

```
![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220310153929.png)

![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220310153859.png)


##  JS常用的数学运算
* 数学运算：+ - * / 加减乘除
* %（模）取余数
* 除了加法以外，其余的情况都是数学运算（如果遇到非数字类型，需要基于Number把其强制转换为数字类型，然后在进行运算的）；
* 加号在JS中既有数学运算，也有字符串拼接的意思（只要加号两边的任意一边出现字符串，则变为字符串拼接）；
```js
console.log(1 + true); //=>2 
console.log(4 / 2); //=>除 2
console.log(7 / 3); //=>除 2.3333333333333335
console.log(7 % 3); //=>取余 1
console.log(10 - null); //=>10
console.log(3 * undefined); //=>NaN
console.log(true - "12"); //=>1-12 =>-11
```
	

##  i++和++i的区别(数学运算)
- i++和++i的区别(数学运算)：在自身的基础上累加1
- i++ 先拿原始i的值进行运算，运算结束后，i再累加1
- ++i 先让自身累加1，累加后拿最新的结果进行运算处理
```js
let i = 1;
console.log(5 + (i++)); //6  5+i -> i++
i = 1;
console.log(5 + (++i)); //7  ++i -> 5+i
```

##  加号和反引号字符拼接
### 1.“+”加号的字符串拼接
- 加号的“左右两边”，有一边出现字符串，结果就是字符串拼接
- 加号的“左右两边”，有一边出现对象（目的是把对象转换为数字，进行数学运算）
   - 首先会获取对象的[Symbol.toPrimitive]或者valueOf
   - 如果上述都没有获取原始值，则基于toString把对象转换为字符串
- 加号只出现一边，这样这一边即使是字符串/对象，也是数学运算
- 如果是一个“{}”加内容，“{}”不参与运算，只是相当于一个代码块

一些实例：
```js
console.log(3 - "3px"); //=>NaN
console.log(3 + "3px"); //=>"33px" 字符串拼接
console.log(1 + "1"); //=>"11" 字符串拼接
console.log(1 + {}); //=>"1[object Object]" 在把{}转换为数字过程中，先把他转换为字符串"[object Object]"，此时右侧出现了字符串，则不再是数学运算，而是字符串拼接了
console.log(1 + []); //=>'1'
console.log([10] + true); //=>"10true" 在转换[10]到数字的过程中，先把其转换为字符串"10"，此时操作变为字符串拼接(和数学运算没关系了)
console.log(true + [10]); //=>"true10"
console.log(1 + true); //=>2 
console.log(100 + true + 21.2 + null + undefined + "Tencent" + [] + null + 9 + false);// ->NaNTencentnull9false
100 + true => 101
101 + 21.2 => 122.2
122.2 + null => 122.2
122.2 + undefined => NaN
NaN + "Tencent" => "NaNTencent" //->字符串拼接（以后都是字符串拼接）
"NaNTencent" + [] => "NaNTencent"
"NaNTencent" + null => "NaNTencentnull"
"NaNTencentnull" + 9 => "NaNTencentnull9"
"NaNTencentnull9" + false => "NaNTencentnull9false"


 
var s = "10";
console.log(+s); //10
console.log(+[10]); //10
console.log(10 + "10"); //"1010" 字符串拼接 
console.log(10 - "10"); //0 数学运算
console.log(10 + [10, 20]); //-> "1010,20" 
// [10, 20][Symbol.toPrimitive]  undefined
// [10, 20].valueOf()  [10,20]不是原始值
// [10,20].toString()  "10,20"
// --- 此时 10 + "10,20"  这是字符串拼接了 => "1010,20" 

console.log(10 + {}); //"10[object Object]"

console.log(10 + new Number(10));
// new Number(10)也是一个对象
//   new Number(10)[Symbol.toPrimitive]  undefined
//   new Number(10).valueOf()  10
//   10+10  => 20 
	
```

###  2.``反引号字符串拼接
``反引号  ES6新增的“模版字符串”,有助于字符串的拼接
- ${} 存放的是JS表达式
- “JS表达式”:执行代码可以有返回结果的，例如变量/三元运算符...
- ES6中的模板字符串就是为了解决传统字符串拼接中的问题（反引号 TAB上面的撇）：${}中存放变量或者其它的JS表达式即可，很简单的完成字符串拼接


完成字符串拼接处理：
```js
// 2020年03月03日 12:00:00
let year = '2020';
let month = '03';
let day = '03';
let hours = '12';
let minutes = '00';
let seconds = '00';
```

```js
let result = `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
console.log(result); //->2020年03月03日 12:00:00
```
// 传统的拼接方式，我们需要在字符串中基于 "++" 或者 '++' 的方式把变量拼接到字符串中（这种方式一不留神就容易拼错）
```js
let result = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes + ":" + seconds;
let result = "" + year + "年" + month + "月日 ::";
console.log(result);
```

eg.
```js
var x = 10;
var y = 20;
// var str = "x+y=x+y"; //这样写的话，所有东西都是字符串中的一个字符 -> log结果：x+y=x+y
// str = x + "+" + y + "=" + (x + y);
// str = "" + x + "+" + y + "=" + (x + y) + "";
var str = `${x}+${y}=${x+y}`; 
console.log(str); //->10+20=30

var x = 2020;
var str = "莉安" + x;
console.log(str); //->莉安2020

str = "莉安" + x + "";
console.log(str); //->莉安2020

str = '莉安' + x + '';
console.log(str); //->莉安2020

str = `莉安${x}`; 
console.log(str); //->莉安2020
```

