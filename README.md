# Promise-Api
Promise基础使用
fs文件，数据库操作
Promise支持链式调用，解决回调地狱
Promise实例化需要接收一个函数，函数必须有两个形参resolve解决,reject拒绝,Promise包裹一个异步函数
两个形参都是函数类型的数据，成功调用resolve，失败调用reject,返回一个promise对象
该对象可以调用两个回调函数，第一个是成功的回调，第二个则是失败的
Promise可以获取成功和失败的结果值，该值可以作为参数传到resolve和reject函数中

##Promise的状态，Promise实例对象中的一个属性
[PromiseState]
    1.pending 未决定的
    2.resolved / fullfilled成功
    3.rejected 失败
一个pending只能改变一次

##Promise对象的值
实例对象中的另一个属性[PromiseResult]
保存着异步任务成功或者失败的结果，只有reject和resolve可以修改
Promise函数的参数为执行期函数，是同步执行的
异步操作在执行器中执行

resolve的作用就是接收一个参数，快速返回一个Promise对象，它不属于实例对象，属于Promise函数
如果传入的参数为非Promise对象，返回一个成功的Promise对象
如果传入Promise对象，则返回的对象取决于这个Promise对象的成功或失败

reject快速返回一个失败的Promise对象
reject返回结果永远是失败的Promise对象

all方法接收一个Promise数组，只有所有的都是成功的才会返回成功
如果有一个是失败的Promise对象，那么返回就是失败的Promise对象，而且返回的对象就是这个失败的Promise对象

race方法，它返回的是第一个成功改变状态的Promise对象的结果
使用throw也可以更改pending状态

Promise对象状态只能修改一次,在resolve 和reject加上一个判断即可



