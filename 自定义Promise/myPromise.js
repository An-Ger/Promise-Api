function myPromise(executor) {
  this.PromiseState = "pending";
  this.PromiseResult = null;
  resolve = (data) => {
    if (this.PromiseState !== "pending") return;
    console.log(this);
    //1.修改对象状态 promiseState
    this.PromiseState = "fulfilled";
    //2.设置对象结果值 promiseResult
    this.PromiseResult = data;
  };
  reject = (data) => {
    if (this.PromiseState !== "pending") return;
    //1.修改对象状态 promiseState
    this.PromiseState = "rejected";
    //2.设置对象结果值 promiseResult
    this.PromiseResult = data;
  };
  try {
    //执行器函数是同步调用的
    executor(resolve, reject);
  } catch (e) {
    //修改Promise对象状态为失败
    reject(e);
  }
}

//添加then方法
myPromise.prototype.then = function (onResolved, onRejected) {};
