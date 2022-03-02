// 1. 使用commonjs的模块化
const { add, mul } = require('./js/mathUtils');

console.log(add(20, 30));
console.log(mul(20, 30));

// 2. 使用ES6的模块化
import { name, age, height } from './js/info';

console.log(name);
console.log(age);
console.log(height);

// 3. 依赖css文件
require('./css/normal.css')

// 4. 依赖less文件
require('./css/special.less')

document.writeln('<button>按钮</button>')

// 5.使用vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  template: `<App/>`,
  // template: `
  // <div>
  //   <h2>{{message}}</h2>
  //   <button @click="btnClick">按钮</button>
  //   <h2>{{name}}</h2>
  // </div>
  // `, // template与el的区别: template会替换el, 这样index.html就不会被手动频繁地修改
  components: {
    App
  }
})