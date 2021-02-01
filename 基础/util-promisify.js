const util = require('util')
const fs = require('fs')
//返回一个新的函数，结果就是Promise对象
let myReadFile = util.promisify(fs.readFile )
myReadFile('./resource/1.txt').then(value => console.log(value.toString()))