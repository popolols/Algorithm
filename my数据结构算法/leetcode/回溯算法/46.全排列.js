/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  const len = nums.length
  const used = new Array(len).fill(0)
  var backtracking = function (curr, used) {
    // 终止条件
    if (curr.length === len) {
      res.push([...curr])
    }
    for (let i = 0; i < len; i++) {
      if (used[i] === 1) continue
      used[i] = 1
      curr.push(nums[i])
      backtracking(curr, used)
      curr.pop()
      used[i] = 0
    }
  }
  backtracking([], used)
  return res

}