/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const set = new Set()
  const len = s.length
  const used = new Array(len).fill(0)

  var backtracking = function (curr, used) {
    if (curr.length === len) {
      set.add(curr.join(''))
      return
    }

    for (let i = 0; i < len; i++) {
      if (used[i] === 1) {
        continue
      }
      used[i] = 1
      curr.push(s[i])
      backtracking(curr, used)
      used[i] = 0
      curr.pop()
    }
  }

  backtracking([], used)

  return Array.from(set)

}