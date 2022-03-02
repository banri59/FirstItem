let name = 'why';
let flag = true;
function sum(num1, mun2) {
  return num1 + num2;
};
if(flag) {
  console.log(sum(10, 20));
}

// 1. 导出{}中的变量
export {
  name, flag, sum
}

// 2. 直接导出export定义的变量
export let age = 22;
export let height = 1.88;

// 3. 导出函数/类

// 导出函数
export function mul(num1, num2) {
  return num1 * num2
}

// 导出类
export class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log(this.name + '在奔跑');
  }
}

// 导出export default中的内容
// 注意: 同一个模块里面只能有一个default
// const address = '北京市';

// export default address;

export default function(argument) {
  console.log(argument);
}