// 编程范式: 命令式编程/声明式编程
// 编程范式: 面向对象式编程(第一公民: 对象)/函数式编程(第一公民: 函数)
const nums = [10, 20, 111, 222, 444, 40, 50];
// 1. 需求一: 取出所有小于100的数字
// 方法一: for循环
// let newNums = [];
// for(let n of nums) {
//     if(n <= 100) {
//         newNums.push(n)
//     }
// };
// console.log(newNums);
// 方法二: filter函数
// filter回调函数中有一个要求: 必须返回一个boolean值
// true: 当返回的值为true时，filter会自动将这次的参数n放入一个新数组
// false: 当返回的值为false时，filter会过滤掉这次的n
// let newNums = nums.filter(function(n) {
//     return n <= 100
// })

// 2. 需求二: 将所有小于100的数字进行转化: 全部*2
// 方法一: for循环
// let new2Nums = [];
// for(let n of newNums) {
//     new2Nums.push(n*2)
// }
// 方法二: map函数
// let new2Nums = newNums.map(function(n) {
//     return n*2
// })

// 3. 需求三: 将所有new2Nums的数字相加，得到最终的结果
// 方法一: for循环
// let total = 0;
// for(let n of new2Nums) {
//     total += n
// }
// 方法二: reduce函数
// let total = new2Nums.reudece(function(preValue, n) {
//     return preValue + n
// }, 0)

// let total = nums.filter(function(n) {
//     return n <= 100
// }).map(function(n) {
//     return n * 2
// }).reduce(function(preValue, n) {
//     return preValue + n
// }, 0)

let total = nums.filter(n => n <= 100).map(n => n * 2).reduce((preValue, n) => preValue + n)
