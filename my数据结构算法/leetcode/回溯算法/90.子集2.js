/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)
  var backtracking = function (start, curr) {
    result.push([...curr])

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }
      curr.push(nums[i])
      backtracking(i + 1, curr)
      curr.pop()
    }
  }
  backtracking(0, [])
  return result
}