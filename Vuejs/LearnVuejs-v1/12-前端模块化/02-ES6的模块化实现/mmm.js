// 1. 导入{}中定义的变量
import { flag, sum } from "./aaa.js";

if(flag) {
  console.log('显示why');
  console.log(sum(20, 30));
};

// 2. 直接导入export定义的变量
import {name, age, height} from "./aaa.js";

console.log(name);
console.log(age);
console.log(height);

// 3. 导入函数/类
import { mul, Person} from "./aaa.js";

// 导出函数
console.log(mul(30,50));

// 导出类
const p = new Person();
p.run();

// 4. 导入default
import arg from "./aaa.js";

arg('你好啊');

// 统一全部导入
import * as aaa from "./aaa.js";

console.log(aaa.flag);
console.log(aaa.height);  



