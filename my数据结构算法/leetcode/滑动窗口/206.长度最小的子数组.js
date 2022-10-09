/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * 
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // const set=new Set()
  let i = 0,
    j = 0
  let sum = 0
  let ans = Number.MAX_VALUE
  // while (i < nums.length) {
  //   sum += nums[i]
  //   // console.log(sum)
  //   while (sum >= target) {
  //     ans = Math.min(ans, i - j + 1)
  //     sum -= nums[j]
  //     j++
  //   }
  //   i++
  // }
  for (i; i < nums.length; i++) {
    sum += nums[i]
    while (sum >= target) {
      ans = Math.min(ans, i - j + 1)
      sum -= nums[j]
      j++
    }

  }
  return ans === Number.MAX_VALUE ? 0 : ans
};
// test
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))