/**
 * 给定一个整数 n ，返回 n! 结果中尾随零的数量。
 * 提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
 * 
 * 输入：n = 3
 * 输出：0
 * 解释：3! = 6 ，不含尾随 0
 * 
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  // 题解1:找出因子为5的个数 因为出现0的尾数相当于乘10  阶乘的情况下2因子出现的次数远远比5多 因此找到5因子的个数即可
  // let count = 0
  // for (let i = 1; i <= n; i++) {
  //   let n = i
  //   while (n > 0) {
  //     if (n % 5 === 0) {
  //       count++
  //       n /= 5
  //     } else {
  //       break
  //     }
  //   }
  // }
  // return count

  // 题解2
  let count = 0
  while (n > 0) {
    count += Math.floor(n / 5)
    n = Math.floor(n / 5)
  }
  return count
}
console.log(trailingZeroes(30))
// let str = '5040'
// str = str.slice(0, str.length - 1)
// // str = str.replace('0', '')
// console.log(str)