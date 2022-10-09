/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

  const sMap = new Map()
  const pMap = new Map()
  const pLength = p.length
  const sLength = s.length

  for (const c of p) {
    pMap.set(c, (pMap.get(c) || 0) + 1)
  }
  const ss=s.slice(0,pLength)
  for(const c of ss){
    sMap.set(c, (sMap.get(c) || 0) + 1)
  }
  const result=[]
  for(let i=0;i<sLength;i++){
    if(i+pLength>sLength) break

    if(isAnagram(sMap,pMap)){
      result.push(i)
    }

    sMap.set(s[i],sMap.get(s[i])-1)
    sMap.set(s[i+pLength],(pMap.get(s[i+pLength]) || 0) + 1)
  }

  return result

  

};
var isAnagram = function (sMap, pMap) {
  for (const key of sMap.keys()) {
    if (sMap.get(key) === 0) continue;
    if (sMap.get(key) !== pMap.get(key)) return false;
  }
  return true;
};