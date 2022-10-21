/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = []
  candidates.sort((a, b) => a - b)
  var sum = 0
  var backtracking = function (start, curr, sum, target) {
    // 终止条件
    if (sum === target) {
      res.push([...curr])
    }
    for (let i = start; i < candidates.length; i++) {
      // 剪枝
      if (sum > target || (i > start && candidates[i] === candidates[i - 1])) {
        continue
      }
      curr.push(candidates[i])
      backtracking(i + 1, curr, sum + candidates[i], target)
      curr.pop()
    }
  }
  backtracking(0, [], sum, target)
  return res
}