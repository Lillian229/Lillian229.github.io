# 4.组件通信

## 一、组件通信_basic

### 特点
- 组件是独立且封闭的单元，默认情况下，只能使用组件自己的数据
- 在组件化过程中，通常会将一个完整的功能拆分成多个组件，以更好的完成整个应用的功能
### 理解
- 而在这个过程中，多个组件之间不可避免的要**共享**某些数据
- 为了实现这些功能，就需要打破组件的独立封闭性，让其与外界沟通
这个过程就是组件通讯

### 总结
组件状态是独立的，组件化之后涉及状态同步，需要进行组件通讯

## 二、props的基本使用
- 传递数据和接收数据的过程
- 函数组件使用 props
- 类组件使用 props

具体内容：

### 1.传递/接收数据的过程
使用组件的时候通过属性绑定数据，在组件内部通过 props 获取即可。

### 2.函数组件使用props

```jsx
// 使用组件
<Hello name="jack" age="20" />
```

```jsx
// 定义组件 props包含{name:'jack',age:'20'}
function Hello(props) {
  return <div>接收到数据:{props.name}</div>;
}
```

### 3.类组件使用 props
```jsx
// 使用组件
<Hello name="jack" age="20" />
```

```jsx
// 定义组件 props包含{name:'jack',age:'20'}
class Hello extends Component {
  render() {
    return <div>接收到的数据:{this.props.age}</div>;
  }
}
```

总结：props 是实现组件通讯的关键，它通过使用组件绑定属性，组件内部使用 props 来传值。

### props_单向数据流
- 单向数据流，是从上到下的，自顶而下的，数据流。
- 好比：河流，瀑布，只能从上往下流动，上游污染下游受影响，但是下游不能影响上游。
- 父组件传递数据给子组件，父组件更新数据子组件自动接收更新后数据，当是子组件是不能修改数据的。


### props可以传递任意数据
- 字符串
- 数字
- 布尔
- 数组
- 对象
- 函数
- JSX （插槽）

## 三、组件间通信方式
### 1.父传子
大致步骤：

- 父组件提供要传递的 state 数据
- 给子组件标签添加属性，值为 state 中的数据
- 子组件中通过 props 接收父组件中传递的数据

具体代码：

1. 父组件提供要传递的 state 数据
```jsx
class Parent extends React.Component {
  state = {
    money: 10000,
  };
  render() {
    return (
      <div>
        <h1>父组件：{this.state.money}</h1>
      </div>
    );
  }
}
```
2. 给子组件标签添加属性，值为 state 中的数据
```jsx
class Parent extends React.Component {
  state = {
    money: 10000
  }
  render() {
    return (
      <div>
        <h1>父组件：{this.state.money}</h1>
+        <Child money={this.state.money} />
      </div>
    )
  }
}
```

3. 子组件中通过 props 接收父组件中传递的数据
```jsx
function Child(props) {
  return (
    <div>
      <h3>子组件：{props.money}</h3>
    </div>
  );
}
```

总结：父组件声明state,在子组件标签通过属性绑定，在子组件中通过props使用。


### 2.子传父
- 子组件如何传递数据给父组件？

    父组件提供回调函数，通过 props 传递给子组件

    触发父组件传递的回调函数传入数据

---
- 父组件如何接收子组件的数据？
    
    (父组件)回调函数的参数是子组件传递的数据

    子组件调用 props 中的回调函数，函数可传参

---
- 父组件数据更新后，传递给子组件的数据是否更新？
    自动更新


具体代码：
1. 父组件
```jsx
class Parent extends React.Component {
  state = {
    money: 10000,
  };
  // 回调函数
  buyPhone = (price) => {
    this.setState({
      money: this.state.money - price,
    });
  };
  render() {
    const { money } = this.state;
    return (
      <div>
        <h1>父组件：{money}</h1>
        <Child money={money} buyPhone={this.buyPhone} />
      </div>
    );
  }
}   
```

2. 子组件
```jsx
const Child = (props) => {
  const handleClick = () => {
    // 子组件调用父组件传递过来的回调函数
    props.buyPhone(5000);
  };
  return (
    <div>
      <h3>子组件：{props.money}</h3>
      <button onClick={handleClick}>买手机</button>
    </div>
  );
};
```