// 1. 使用commonjs的模块化
function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

module.export = {
  add,
  mul
}

// 2. 使用ES6的模块化
export const name = 'why';
export const age = 18;
export const height = 1.89;