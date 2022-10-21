/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = []
  var sum = 0
  var backtracking = function (start, curr, sum, target) {
    // 终止条件
    if (sum === target) {
      res.push([...curr])
      return
    }
    for (let i = start; i < candidates.length; i++) {
      // 剪枝
      if (sum > target) {
        continue
      }
      curr.push(candidates[i])
      sum += candidates[i]
      backtracking(i, curr, sum, target)
      sum -= curr.pop()

    }
  }
  backtracking(0, [], sum, target)
  return res
}