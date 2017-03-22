require("./css/demo-webpack.css")//载入css文件
document.write('It works.');
document.write(require('./js/module.js'));//添加模块
require('./js/add1.js');
document.write("Welcome add1.js!");
console.log('load add1.js')
