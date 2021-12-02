## 客户端基于JS完成时间格式字符串的数据解析
```
需求：真实项目中，我们从服务器获取到了时间字符串，但是格式并不是我们需要的，我们需要呈现在页面中的是

=> “yyyy年mm月dd日 hh时mm分ss秒”

此时就需要客户端基于JS完成时间格式字符串的数据解析
```

### 思路1:根据字符串截取的办法，获取到字符串中“年月日”等数据信息
```
   substr(n,m)  从索引n开始截取m个
   substring(n,m) 从索引n开始截取到索引m处，不包含m
   slice(n,m) 和substring类似，可以支持负数作为索引的
   indexOf/lastIndexOf([char]) 获取字符在字符串中第一次或者最后一次出现位置的索引,如果没有这个字符,返回索引-1
```

```js
// bar表示“ - ”
//colon表示“ ：”

// supplyZero:传递一个值给我，我们较验其是否符合两位，如果不符合，我们在前面补充零
function supplyZero(value) {
 // 不论什么值加字符串都会变为字符串拼接:把value转换为字符串  String(value)/value.toString()
 value += '';
 return value.length < 2 ? `0${value}` : value;
}

 var indexBar1 = time.indexOf('-'),
 indexBar2 = time.lastIndexOf('-'),
 indexSpace = time.indexOf(' '),
 indexColon1 = time.indexOf(':'),
 indexColon2 = time.lastIndexOf(':');
 
var year = time.substring(0, indexBar1),
 month = time.substring(indexBar1 + 1, indexBar2),
 day = time.substring(indexBar2 + 1, indexSpace),
 hours = time.substring(indexSpace + 1, indexColon1),
 minutes = time.substring(indexColon1 + 1, indexColon2),
 seconds = time.substring(indexColon2 + 1);
 // 模板字符串 拼接字符串
	time = `${year}年${supplyZero(month)}月${supplyZero(day)}日 ${supplyZero(hours)}时${supplyZero(minutes)}分${supplyZero(seconds)}秒`;

console.log(time);
```


### 思路2:按照指定的分割符号和规律各种拆，最后获取到“年月日”等信息
 split([char]):按照指定的分割符号，把字符串中拆出来的每一项存放到数组中
 ```js
 var arr = time.split(' '), //["2020-9-18", "9:55:12"]
 arrLeft = arr[0].split('-'), //["2020", "9", "18"]
 arrRight = arr[1].split(':'); //["9", "55", "12"]
 
 优化:加入正则的辅助 \s一个空白字符 |或者  ?:只匹配不捕获
	var arr = time.split(/(?:\s|-|:)/); //["2020", "9", "18", "9", "55", "12"] 
	var year = arr[0],
		month = arr[1],
		day = arr[2],
		hours = arr[3],
		minutes = arr[4],
		seconds = arr[5]; 
 优化:基于ES6的解构赋值快速获取每一项的信息
 var [year, month, day, hours, minutes, seconds] = arr;
	time = `${year}年${supplyZero(month)}月${supplyZero(day)}日 ${supplyZero(hours)}时${supplyZero(minutes)}分${supplyZero(seconds)}秒`;
  console.log(time); 

 ```
 
 ### 思路3:利用标准日期对象中提供的方法,获取“年月日”等信息
 ```
 
 ```