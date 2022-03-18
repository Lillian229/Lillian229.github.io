# Vue
## Vue的最大的优势是什么？
Vue 作为一款轻量级框架、简单易学、数据绑定、组件化、数据和结构的分离、虚拟 DOM、运行速度快，并且作者是中国人尤雨溪，对应的 API 文档对国内开发者优化，作为前端开发人员的首选入门框架，Vue 有很多优势：
- 可以进行组件化开发，使代码编写量减少，读者更加易于理解。 
- 对数据进行双向绑定。
- 传统的页面通过超链接实现页面的切换和跳转，Vu使用路由不会刷新页面。 
- Vue 是单页面应用，使页面局部刷新，不用每次跳转页面都要请求所有数据和 dom， 加快访问速度和提升用户体验。
- 第三方 UI 组件库使用起来节省很多开发时间，从而提升开发效率。


## Vue 和 jQuery 两者之间的区别是什么？

<!-- 1、jQuery 介绍：曾经也是现在依然最流行的 web 前端 js 库，可是现在无论是国内还是国外他的使用率正在渐渐被其他的 js 库所代替，随着浏览器厂商对HTML5 规范统一遵循以及 ECMA6 在浏览器端的实现，jQuery 的使用率将会越来越低 -->e 

## mvvm 和 mvc 区别是什么？哪些场景适合？   
[mvvm 和 mvc 区别](../../frame/vue/#mvc-和-mvvm)

## Vue 数据双向绑定的原理是什么?
[Vue 数据双向绑定的原理](../../frame/vue/#双向数据绑定的原理)


## Object.defineProperty 和 Proxy 的区别
1）	Proxy 的优势如下:
Proxy 可以直接监听对象而非属性；
Proxy 可以直接监听数组的变化；
Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty  不具备的；
Proxy 返回的是一个新对象, 我们可以只操作新的对象达到目的, 而Object.defineProperty 只能遍历对象属性直接修改；
Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
2）	Object.defineProperty 的优势如下:
兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill磨平


## Vue 生命周期总共分为几个阶段？
Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载 Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。
1）beforeCreate
在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

2）created
在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)， 属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

3）beforeMount
在挂载开始之前被调用：相关的 render 函数首次被调用。
4）mounted
el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root
实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

5）beforeUpdate
数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问
现有的 DOM，比如手动移除已添加的事件监听器。该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。

6）updated
由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

7）activated
keep-alive 组件激活时调用。该钩子在服务器端渲染期间不被调用。

8）deactivated
keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用。

9）beforeDestroy
实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染期间不被调用。

10）destroyed
Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。

11）errorCaptured（2.5.0+ 新增）
当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回false 以阻止该错误继续向上传播。


## 第一次加载页面会触发哪几个钩子函数？

当页面第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted这几个钩子函数


## 封装 Vue 组件的过程？
首先，组件可以提升整个项目的开发效率。能够把页面抽象成多个相对独立的模块，解决了我们传统项目开发：效率低、难维护、复用性等问题。
1）	分析需求：确定业务需求，把页面中可以服用的结构，样式以及功能，单独抽离成一个文件，实现复用
2）	具体步骤：
    1.	使用 Vue.component 方法注册组件，子组件需要数据，可以在 props 中接
    受定义，而子组件修改好数据后，想把数据传递给父组件。可以采用$emit 方法向外抛数据
    2.	如果需要给组件传入模板，则定义为插槽 slot
    3.	如果需要 父组件主动调用子组件的方法 可以在 methods 选项中开放方法


## Vue 组件如何进行传值的? 
1. 父组件向子组件传递数据
父组件内设置要传的数据，在父组件中引用的子组件上绑定一个自定义属
性并把数据绑定在自定义属性上，在子组件添加参数 props 接收即可

2. 子组件向父组件传递数据
子组件通过 Vue 实例方法$emit 进行触发并且可以携带参数，父组件监听使
用@（v-on）进行监听，然后进行方法处理

3. 非父子组件之间传递数据
1、引入第三方 new Vue 定义为 eventBus
2、在组件中 created 中订阅方法 eventBus.$on("自定义事件名",methods 中的方法名)
3、在另一个兄弟组件中的 methods 中写函数，在函数中发布 eventBus 订阅的方法 eventBus.$emit("自定义事件名”)
4、在组件的 template 中绑定事件(比如 click)

## 组件中写 name 选项有什么作用？
1. 项目使用 keep-alive 时，可搭配组件 name 进行缓存过滤
2. DOM 做递归组件时需要调用自身 name
3.  Vue-devtools 调试工具里显示的组见名称是由 Vue 中组件 name 决定的


## Vue 组件 data 为什么必须是函数

1. 每个组件都是 Vue 的实例。
2. 组件共享 data 属性，当 data 的值是同一个引用类型的值时，改变其中一个会影响其他
3. 组件中的 data 写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的 data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。而单纯的写成对象形式， 就使得所有组件实例共用了一份 data，就会造成一个变了全都会变的结果。

## 组件的命名规范
给组件命名有两种方式，一种是使用链式命名 my-component，一种是使用大
驼峰命名 MyComponent,
在字符串模板中\<my-component>\</my-component>和\<MyComponent>\</MyComponent>都可以使用，
在非字符串模板中最好使用\<MyComponent>\</MyComponent>，因为要遵循 W3C规范中的自定义组件名 (字母全小写且必须包含一个连字符)，避免和当前以及未
来的 HTML 元素相冲突


## 怎么在组件中监听路由参数的变化？
有两种方法可以监听路由参数的变化，但是只能用在包含\<router-view />的组件内。
```js
// 第一种
watch: {
    '$route'(to, from) {
    // 在此处监听
},
},
// 第二种
    beforeRouteUpdate (to, from, next) {
    //这里监听
},
```

## 怎么捕获 Vue 组件的错误信息？
errorCaptured 是组件内部钩子，当捕获一个来自子孙组件的错误时被调用，接收 error、vm、info 三个参数，return false 后可以阻止错误继续向上抛出。

errorHandler 为全局钩子，使用Vue.config.errorHandler 配置，接收参数与 errorCaptured 一致，2.6 后可捕捉 v-on 与 promise 链的错误，可用于统一错误处理与错误兜底。


## Vue 组件里的定时器要怎么销毁？
如果页面上有很多定时器，可以在 data 选项中创建一个对象timer，给每个定时器取个名字一一映射在对象 timer 中， 在 beforeDestroy 构造函数中
for(let k in this.timer){clearInterval(k)}；
如果页面只有单个定时器，可以这么做。
```js
const timer = setInterval(() =>{}, 500);
this.$once('hook:beforeDestroy', () => {
clearInterval(timer);
})
```


## Vue.cli 中怎样使用自定义的组件？有遇到过哪些问题吗？
第一步：在 components 目录新建你的组件文件（indexPage.Vue），script 一定要 export default {}
第 二 步 ： 在需要用的页面（ 组 件 ）中导入 ： import indexPage from'@/components/indexPage.Vue' 
第三步：注入到 Vue 的子组件的 components 属性上面,components:{indexPage}
第四步：在 template 视图 view 中使用
例如有 indexPage 命名，使用的时候则 index-page


## Vue 中 solt 的使用方式，以及 solt 作用域插槽的用法
使用方式：当组件当做标签进行使用的时候，用 slot 可以用来接受组件标签包裹的内容，当给 solt 标签添加 name 属性的 时候，可以调换响应的位置

插槽作用域：作用域插槽其实就是带数据的插槽，父组件接收来自子组件的slot 标签上通过 v-bind 绑定进而传递过来的数 据，父组件通过 scope 来进行接受子组件传递过来的数据


## Vue 该如何实现组件缓存?
在面向组件化开发中，我们会把整个项目拆分为很多业务组件，然后按照合理的方式组织起来，那么自然会存在组件之前切换的问题，Vue 中有个动态组件的概念，它能够帮助开发者更好的实现组件之间的切换，但是在面对需求频繁的变化，去要切换组件时，动态组件在切换的过程中，组件的实例都是重新创建的，而我们需要保留组件的状态，为了解决这个问题，需要使用到 Vue 中内置组件\<keep-alive>
\<keep-alive>\</keep-alive> 包裹动态组件时，会缓存不活动的组件实例,主要用于保留组件状态或避免重新渲染，
简单的说: 比如有一个列表和一个详情，那么用户就会经常执行打开详情=>返回列表=>打开详情…这样的话列表和详情都是一个频率很高的页面，那么就可以对列表组件使用<keep-alive></keep-alive>进行缓存，这样用户每次返回列表的时候，都能从缓存中快速渲染，而不是重新渲染


## 跟 keep-alive 有关的生命周期是哪些？
1）前言：在开发 Vue 项目的时候，大部分组件是没必要多次渲染的，所以Vue 提供了一个内置组件 keep-alive 来缓存组件内部状态，避免重新渲染，在开发 Vue 项目的时候，大部分组件是没必要多次渲染的，所以 Vue 提供了一个内置组件 keep-alive 来缓存组件内部状态，避免重新渲染

2）生命周期函数：在被 keep-alive 包含的组件/路由中，会多出两个生命周期的钩子:activated 与 deactivated。
1、activated 钩子：在在组件第一次渲染时会被调用，之后在每次缓存组件被激活时调用。
2、Activated 钩子调用时机： 第一次进入缓存路由/组件，在 mounted 后面，beforeRouteEnter 守卫传给 next 的回调函数之前调用，并且给因为组件被缓存了，再次进入缓存路由、组件时，不会触发这些钩子函数，beforeCreate created ，beforeMount mounted 都不会触发
1、deactivated 钩子：组件被停用（离开路由）时调用。
2、deactivated 钩子调用时机：使用 keep-alive 就不会调用 beforeDestroy(组件销毁前钩子)和 destroyed(组件销毁)，因为组件没被销毁，被缓存起来了，这个钩子可以看作 beforeDestroy 的替代，如果你缓存了组件，要在组件销毁的的时候做一些事情，可以放在这个钩子里，组件内的离开当前路由钩子 beforeRouteLeave => 路由前置守卫 beforeEach =>全局后置钩子 afterEach => deactivated 离开缓存组件 => activated 进入缓存组件(如果你进入的也是缓存路由)