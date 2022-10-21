/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = []
  const len = s.length
  var backtracking = function (index, curr) {
    if (index >= len) {
      res.push([...curr])
      return
    }
    for (let i = index; i < len; i++) {
      let str = s.substring(index, i + 1)
      if (!isPalindrome(str)) continue
      curr.push(str)
      backtracking(i + 1, curr)
      curr.pop()

    }
  }
  backtracking(0, [])
  return res
}
var isPalindrome = function (s) {
  if (!s.length) return false
  if (s.length === 1) return true
  let i = 0
  let j = s.length - 1
  while (i < j) {
    if (s[i] !== s[j]) { return false }
    i++
    j--
  }
  return true
}