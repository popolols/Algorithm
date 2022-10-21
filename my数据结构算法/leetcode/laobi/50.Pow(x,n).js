/**
 * 示例1:
 * 输入：x = 2.00000, n = 10
 * 输出：1024.00000
 *示例2: 
 * 输入：x = 2.00000, n = -2
 * 输出：0.25000
 * 解释：2-2 = 1/22 = 1/4 = 0.25
 * 
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  /**
   *  let num=1
  for(let i=0;i<Math.abs(n);i++){
      num*=x
      // console.log(num)
  }
  n<0?num=1/num:num
  return num.toFixed(5)
   * 
   * 
   */

  let num=n<0?1/quickMul(x,-n):quickMul(x,n)

  return num.toFixed(5)

  function quickMul(x,num){
    if(num===0) return 1
    let y=quickMul(x,Math.floor(num/2))

    return num%2===0?y*y:y*y*x
  }
 
};



console.log(myPow(2.00000,10))
console.log(myPow(2.10000,3))


