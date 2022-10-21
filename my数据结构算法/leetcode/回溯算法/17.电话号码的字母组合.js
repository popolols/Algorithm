/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const res = []
  if (!digits) return res
  const len = digits.length
  const map = new Map(
    ['2', 'abc'], ['3', 'def'], ['4', 'ghi'],
    ['5', 'jkl'], ['6', 'mno'], ['7', 'pqrs'],
    ['8', 'tuv'], ['9', 'wxyz']
  )

  var backtracking = function (index, curr) {
    if (index === len) {
      res.push(curr)
      return
    }
    var temp = map.get(digits[i])
    for (let i = 0; i < temp.length; i++) {
      curr += temp[i]
      backtracking(index + 1, curr)
      curr.pop()
    }
  }
  backtracking(0, '')
  return res
}
const map = new Map([
  ['2', 'abc'], ['3', 'def'], ['4', 'ghi'],
  ['5', 'jkl'], ['6', 'mno'], ['7', 'pqrs'],
  ['8', 'tuv'], ['9', 'wxyz']
]
)

console.log(map.get('2'))