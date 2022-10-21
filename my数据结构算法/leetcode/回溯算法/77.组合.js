/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = []

  var backtracking = function (start, curr, k) {
    if (curr.length === k) {
      res.push([...curr])
      return
    }
    for (let i = start; i <= n; i++) {
      curr.push(i)
      backtracking(i + 1, curr, k)
      curr.pop()
    }
  }
  backtracking(1, [], k)

  return res
}