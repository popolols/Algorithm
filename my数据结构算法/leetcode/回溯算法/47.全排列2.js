/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = []
  const len = nums.length
  const used = new Array(len).fill(0)
  nums.sort((a, b) => a - b)
  var backtracking = function (curr, used) {
    if (curr.length === len) {
      res.push([...curr])
      return
    }
    for (let i = 0; i < len; i++) {
      // 剪枝
      if (used[i] === 1 || (used[i - 1] === 0 && i > 0 && nums[i] === nums[i - 1])) {
        continue
      }
      used[i] = 1
      curr.push(nums[i])
      backtracking(curr, used)
      used[i] = 0
      curr.pop()
    }
  }
  backtracking([], used)

  return res
}