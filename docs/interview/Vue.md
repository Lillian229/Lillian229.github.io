# Vue
## Vue的最大的优势是什么？
Vue 作为一款轻量级框架、简单易学、数据绑定、组件化、数据和结构的分离、虚拟 DOM、运行速度快，并且作者是中国人尤雨溪，对应的 API 文档对国内开发者优化，作为前端开发人员的首选入门框架，Vue 有很多优势：
- 可以进行组件化开发，使代码编写量减少，读者更加易于理解。 
- 对数据进行双向绑定。
- 传统的页面通过超链接实现页面的切换和跳转，Vu使用路由不会刷新页面。 
- Vue 是单页面应用，使页面局部刷新，不用每次跳转页面都要请求所有数据和 dom， 加快访问速度和提升用户体验。
- 第三方 UI 组件库使用起来节省很多开发时间，从而提升开发效率。


## Vue 和 jQuery 两者之间的区别是什么？

<!-- 1、jQuery 介绍：曾经也是现在依然最流行的 web 前端 js 库，可是现在无论是国内还是国外他的使用率正在渐渐被其他的 js 库所代替，随着浏览器厂商对HTML5 规范统一遵循以及 ECMA6 在浏览器端的实现，jQuery 的使用率将会越来越低 -->

- jQuery——插件/库——封装了各种易用的方法——用更少的代码来操作dom标签

- Vue——框架, 有自己的规则和体系与语法, 特别是设计思想MVVM, 让数据和视频关联绑定, 省略了很多DOM操作. 然后指令还给标签注入了更多的功能

## mvvm 和 mvc 区别是什么？哪些场景适合？   
MVC 和 MVVM 都是设计模式，是框架的开发理念；

- M model 数据层 V view 视图层  C controller 控制器层

- M model 数据层 V view 视图层 VM view-model 视图模型层

-  MVC: model数据模型, view视图, Controller控制器, 在控制器这层里编写js代码，controller控制 model 和 view 关联；单向数据流，通过 Controller 把 model 绑定到 view 中

- MVVM: 即Model-View-ViewModel的简写。即模型-视图-视图模型, VM是这个设计模式的核心, 连接v和m的桥梁, 内部会监听DOM事件, 监听数据对象变化来影响对方。可以双向数据绑定，可以单向数据绑定


此外，Vue 是响应式的框架；此响应式不是 css 的响应式，而是通过修改数据，视图自动发生变化。当视图发生变化时，数据也会随着改变；这就是双向数据绑定；



## Vue 数据双向绑定的原理是什么?
双向数据绑定：通过 Vue 模板语法，把 Vue 中 data 里面的数据绑定到页面中；如果我们修改这个数据，页面中绑定这个数据的地方的值都会跟着自动更新；

原理：Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter,这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化

第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
1. 在自身实例化时往属性订阅器(dep)里面添加自己 
2. 自身必须有一个 update()方法
3. 待属性变动 dep.notice()通知时，能调用自身的 update()方法，并触发 Compile中绑定的回调，则功成身退。

第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher
三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模
板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。


defineProperty 是一个函数，用来定义对象属性的特性；是 Object 的静态方法

vue 使用的是发布订阅模式，vue 会收集页面中所有绑定数据的元素，这些相当于订阅了 data 里面的数据变更的事件，当数据发生变更时，会触发 set 方法，在 set 方法中会把所有的使用这个属性的元素的值更新成最新的值（发布事件）；

v-model 的原理也是利用了 DOM 事件，当表单元素的值发生变化时，设置对象的属性，然后设置对象的属性的时候，会触发 set 方法，在 set 方法中，会去修改所有依赖这些值的地方

## 深入响应式原理——如何追踪变化

- 当你把一个普通的 JavaScript 对象传给 Vue 实例的 data 选项，Vue 将遍历此对象所有的属性，并使用 Object.defineProperty 把这些属性全部转 getter/setter。
- Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是为什么 Vue 不支持 IE8 以及更低版本浏览器的原因。
- 这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 追踪依赖，在属性被访问和修改时通知变化。这里需要注意的问题是浏览器控制台在打印数据对象时 getter/setter 的格式化并不同，所以你可能需要安装 vue-devtools 来获取更加友好的检查接口。
- 每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。
- 观察者订阅了可观察对象，当可观察对象发布事件，则就直接调度观察者的行为，所以这里观察者和可观察对象其实就产生了一个依赖的关系。

## 对 Virtual DOM算法的理解

包括几个步骤：

- 1、用 JavaScript 对象结构表示 DOM 树的结构，然后用这个树构建一个真正的 DOM 树，插到文档当中；
- 2、当状态变更的时候，重新构造一棵新的对象树，然后用新的树和旧的树进行比较，记录两棵树差异；
- 3、把 2 所记录的差异应用到步骤 1 所构建的真正的 DOM 树上，视图就更新了。

Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。可以类比 CPU 和硬盘，既然硬盘这么慢，我们就在它们之间加个缓存：既然 DOM 这么慢，我们就在它们 JS 和 DOM 之间加个缓存。CPU（JS）只操作内存（Virtual DOM），最后的时候再把变更写入硬盘（DOM）。

## 比较两棵虚拟 DOM 树的差异

比较两棵 DOM 树的差异是 Virtual DOM 算法最核心的部分，这也是所谓的 Virtual DOM 的 diff 算法。
两个树的完全的 diff 算法是一个时间复杂度为 O(n^3) 的问题。但是在前端当中，你很少会跨越层级地移动 DOM 元素。

所以 Virtual DOM 只会对同一个层级的元素进行对比：

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/domtreediff.png)

上面的 div 只会和同一层级的 div 对比，第二层级的只会跟第二层级对比。这样算法复杂度就可以达到 O(n)。

深度优先遍历，记录差异

在实际的代码中，会对新旧两棵树进行一个深度优先的遍历，这样每个节点都会有一个唯一的标记：

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/domtreediff2.png)

在深度优先遍历的时候，每遍历到一个节点就把该节点和新的的树进行对比。如果有差异的话就记录到一个对象里面。

Virtual DOM 算法主要是实现上面步骤的三个函数：element，diff，patch。然后就可以实际的进行使用：

```javascript
// 1. 构建虚拟 DOM
var tree = el('div', {'id': 'container'}, [
    el('h1', {style: 'color: blue'}, ['simple virtal dom']),
    el('p', ['Hello, virtual-dom']),
    el('ul', [el('li')])
])
// 2. 通过虚拟 DOM 构建真正的 DOM
var root = tree.render()
document.body.appendChild(root)
// 3. 生成新的虚拟 DOM
var newTree = el('div', {'id': 'container'}, [
    el('h1', {style: 'color: red'}, ['simple virtal dom']),
    el('p', ['Hello, virtual-dom']),
    el('ul', [el('li'), el('li')])
])
// 4. 比较两棵虚拟 DOM 树的不同
var patches = diff(tree, newTree)
// 5. 在真正的 DOM 元素上应用变更
patch(root, patches)
```

当然这是非常粗糙的实践，实际中还需要处理事件监听等；生成虚拟 DOM 的时候也可以加入 JSX 语法。这些事情都做了的话，就可以构造一个简单的 ReactJS 了。


- [深度剖析：如何实现一个 Virtual DOM 算法](https://segmentfault.com/a/1190000004029168)
- [virtual-dom(Vue实现)简析](https://segmentfault.com/a/1190000010090659)

## Object.defineProperty 和 Proxy 的区别
1.	Proxy 的优势如下:

- Proxy 可以直接监听对象而非属性；
- Proxy 可以直接监听数组的变化；
- Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty  不具备的；
- Proxy 返回的是一个新对象, 我们可以只操作新的对象达到目的, 而Object.defineProperty 只能遍历对象属性直接修改；
- Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；


2. Object.defineProperty 的优势如下:

兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill磨平

## key的作用
在v-for的情况下加key，理想的key应该是唯一id

1. 对于vue来说是一个身份ID
2. 防止元素复用
3. 提升diff算法

## index作为key的危害
用index作为key，索引永远是从0到length，假如删除了某一项，删除的那一项还它的下一项key会重合，会造成元素复用和一些bug，




## Vue生命周期&总共分为几个阶段
Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载 Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

> 生命周期钩子=生命周期函数=生命周期事件
### 一、创建期间
1. beforeCreate
实例刚在内存中被创建出来，此时还没有初始化好data和methods属性。

    在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

2. created
实例已经在内存中创建好了，此时data和methods已经创建好了，此时还没有开始编译模板。

    在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)， 属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

3. beforeMount
此时已经完成了模板的编译，但是还没有挂载到页面上

    在挂载开始之前被调用：相关的 render 函数首次被调用。

4. mounted
el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root
实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

### 二、运行期间

5. beforeUpdate
状态更新之前执行此函数，此时data中的状态值是最新的，但是界面上显示的数据还是旧的，因为此时还没有开始重新渲染DOM节点

6. updated
    实例更新完毕之后调用此函数，此时data中的状态值和界面上显示的数据，都已经完成了更新，界面已经被重新渲染好了

    由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

7. activated
keep-alive 组件激活时调用。该钩子在服务器端渲染期间不被调用。

8. deactivated
keep-alive 组件停用时调用。该钩子在服务器端渲染期间不被调用。

### 三、销毁期间
9. beforeDestroy
实例销毁之前调用。在这一步，实例仍然完全可用。该钩子在服务器端渲染期间不被调用。

10. destroyed
Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。

11. errorCaptured（2.5.0+ 新增）
当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回false 以阻止该错误继续向上传播。

## Vue生命周期渲染过程
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/vueprocess.png)

各个阶段-数字-解释：
1. var vm = new Vue({}) 表示开始创建一个Vue的实例对象

2. 刚初始化一个空的Vue实例对象，此时，在这个对象上，只有一些默认的生命周期函数和默认的事件，其他的都未创建

3. beforeCreate生命周期函数执行时，data和methods中的数据和方法都还没有初始化

4. 初始化data和methods

5. 在created中，data和methods都已经初始化好了，如果要操作data中的数据或是调用methods中的方法，最早只能在created中操作

6. 这个绿框中内容表示Vue开始编辑模板，把Vue代码中的那些指令进行执行，最终，在内存中生成一个编译好的最终的模板字符串对象，然后把这个字符串对象，渲染为内存中的DOM，此时，只是在内存中渲染好了模板，并没有把模板挂载到真正的页面中去

7. beforeMount函数执行时，模板已经在内存中编译好了，但尚未挂载到页面中去，此时，页面还是旧的

8. 将内存中编译好的模板，真实的替换到浏览器的页面中区

9. mounted是在页面加载完成后执行的函数，如果要通过某些插件操作页面上的DOM节点，最早是在mounted中进行

10. 只要执行完了mounted，就表示整个Vue实例对象已经初始化完毕了，此时组件已经脱离创建阶段，进入运行阶段。

11. 蓝框中是组件的运行阶段，运行阶段的生命周期函数只有两个：beforeUpdate和updated，这两个事件会根据data数据的改变，有选择的触发0次到多次

12. 当执行beforeUpdate时，页面中显示的数据还是旧的，此时data中的数据是最新的，页面尚未和最新数据同步

13. 这一步，先根据data中最新的数据，在内存中，重新渲染出一份最新的内存DOM树，当内存DOM树被更新之后，会把最新的的内存DOM树，重新渲染到真实的页面当中，这时，就完成数据从data（Model层）->view（视图层）的更新

14. updated执行时，页面和data数据已经保持同步，都是最新的

15. 当执行beforeDestroy钩子函数时，Vue实例就已经从运行阶段进入销毁阶段，此时，组建中所有data、methods、以及过滤器，指令等，都处于可用状态，此时还未真正执行销毁过程

16. 当执行destroyed函数时，组件已经被完全销毁，此时组建中所有data、methods、以及过滤器，指令等，都已经不可用了



## 第一次加载页面会触发哪几个钩子函数？

当页面第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted这几个钩子函数


## 封装 Vue 组件的过程？
首先，组件可以提升整个项目的开发效率。能够把页面抽象成多个相对独立的模块，解决了我们传统项目开发：效率低、难维护、复用性等问题。

1）	分析需求：确定业务需求，把页面中可以服用的结构，样式以及功能，单独抽离成一个文件，实现复用

2）具体步骤：
1.	使用 Vue.component 方法注册组件，子组件需要数据，可以在 props 中接受定义，而子组件修改好数据后，想把数据传递给父组件。可以采用$emit 方法向外抛数据
2. 如果需要给组件传入模板，则定义为插槽 slot
3. 如果需要 父组件主动调用子组件的方法 可以在 methods 选项中开放方法


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
在字符串模板中`<my-component></my-component>`和`<MyComponent></MyComponent>`都可以使用，
在非字符串模板中最好使用`<MyComponent></MyComponent>`，因为要遵循 W3C规范中的自定义组件名 (字母全小写且必须包含一个连字符)，避免和当前以及未
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




## 如何理解 Vue 是异步执行 DOM 更新的 ？

- Vue 是异步执行 DOM 更新。
- 只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。
- 如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要。
- 然后，在下一个的事件循环 `tick` 中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部尝试对异步队列使用原生的 Promise.then 和 MessageChannel，如果执行环境不支持，会采用 setTimeout(fn, 0) 代替。

例如，当你设置 vm.someData = 'new value' ，该组件不会立即重新渲染。

- 当刷新队列时，组件会在事件循环队列清空时的下一个 `tick` 更新。
- 多数情况我们不需要关心这个过程，但是如果你想在 DOM 状态更新后做点什么，这就可能会有些棘手。
- 虽然 Vue.js 通常鼓励开发人员沿着 “数据驱动” 的方式思考，避免直接接触 DOM，但是有时我们确实要这么做。为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调函数在 DOM 更新完成后就会调用。

## 什么情况下应该使用Vuex

- 虽然 Vuex 可以帮助我们管理共享状态，但也附带了更多的概念和框架。这需要对短期和长期效益进行权衡。
- 如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此，如果您的应用够简单，您最好不要使用 Vuex。一个简单的 [global event bus](https://cn.vuejs.org/v2/guide/components.html#%E7%9B%91%E5%90%AC%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BA%8B%E4%BB%B6) 就足够您所需了。
- 但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。