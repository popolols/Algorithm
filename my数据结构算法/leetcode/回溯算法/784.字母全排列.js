/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  var isChar = function (s) {
    let value = s.charCodeAt()
    if ((value >= 65 && value <= 90) || (value >= 97 && value <= 122)) {
      return true
    }
    return false
  }
  const res = []
  var backtracking = function (i, curr) {
    if (curr.length === s.length) {
      res.push(curr.slice())
      return
    }
    if (!isChar(s[i])) {
      backtracking(i + 1, curr + s[i])

    } else {
      backtracking(i + 1, curr + s[i].toLowerCase())
      backtracking(i + 1, curr + s[i].toUpperCase())
    }



  }
  backtracking(0, '')

  return res
}