# compose
将多个值变为一个值

reduce封装一个方法compose组合多个函数

```js
    function sum(a,b) {
        return a+b;
    }
    function toUpper(str) {
        return str.toUpperCase();

    }
    function add(str) {
        return "!!"+str+"!!";
    }
    //原始使用
    console.log(add(toUpper(sum('yaya','fighting'))));//!!YAYAFIGHTING!!




    // 使用了compose+reduceRight
    function compose(...fns){
        return function(...args){
            // 把最后一个函数sum拿到
            let lastFn =fns.pop();
            //只有sum需要传参
            return fns.reduceRight((a,b)=>{
                return b(a)
            },lastFn(...args))
        }
    }

    console.log(compose(add,toUpper,sum)('yaya','fighting'));//!!YAYAFIGHTING!!



    // 简易写法
        let compose = (...fns) => (...args) => {
        let lastFn =fns.pop();
        return fns.reduceRight((a,b)=>b(a),lastFn(...args))
    }

    console.log(compose(add,toUpper,sum)('yaya','fighting')); //!!YAYAFIGHTING!!


    //简易+使用reduce
    function compose(...fns) { 
        return fns.reduce((a,b)=> {
            return (...args) => {
                return a(b(...args))
            }
        })
        }
      
    console.log(compose(add,toUpper,sum)('yaya','fighting')); //!!YAYAFIGHTING!!
```