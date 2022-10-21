/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const sLen = s.length
  const pLen = p.length
  const pMap = new Map()
  const sMap = new Map()
  // if (pLen > sLen) return []
  for (const c of p) {
    pMap.set(c, (pMap.get(c) || 0) + 1)
  }
  const ss = s.slice(0, pLen)
  for (const c of ss) {
    sMap.set(c, (sMap.get(c) || 0) + 1)
  }

  const res = []
  for (let i = 0; i < sLen; i++) {
    if (i + pLen > sLen) break

    if (isAnagram(sMap, pMap)) {
      res.push(i)
    }

    sMap.set(s[i], sMap.get(s[i]) - 1)
    sMap.set(s[i + pLen], (sMap.get(s[i + pLen]) || 0) + 1)
  }

  return res
}

var isAnagram = function (sMap, pMap) {
  for (const key of sMap.keys()) {
    if (sMap.get(key) === 0) continue
    if (sMap.get(key) !== pMap.get(key)) return false
  }
  return true
}
