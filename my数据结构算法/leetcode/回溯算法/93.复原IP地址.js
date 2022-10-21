/**
 * 输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
 * 
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = []
  // let pointNum = 0
  var backtracking = function (start, curr) {
    if (curr.length > 4) return
    if (start === s.length && curr.length === 4) {
      result.push(curr.join('.'))
      return
    }

    for (let i = start; i < s.length; i++) {
      const str = s.substring(start, i - start + 1)
    }

  }
}
/**
 * 判断字符是否有效
 * 0开头的字符非法
 * 不是数字的字符非法
 * 大于255的字符非法
 * @param {*} s 
 * @param {*} start 
 * @param {*} end 
 */

var isValid = function (s, start, end) {

  if (start > end) return false
  if (s[start] === '0' && start !== end) return false
  let str = s.slice(start, end)
  let value = parseInt(str)
  if (value === NaN || value > 255) {
    return false
  }
  return true
}

var s = '25525511135'

s.split('').splice(1, 1, '0')
console.log(s)