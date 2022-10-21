/**
 * 解题思路：
 * 1.遍历每一个字符串 生成一个长度为26的数组初始值为0
 * 2.遍历字符串，根据字符的ascci码值存到数组的对应下标下面
 * 3.将数组作为key存入map中
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  /*
  if(strs===0) return []
  const map=new Map()
  for(const str of strs){
    const charactors=Array(26).fill(0)
    for(let i=0;i<str.length;i++){
      const asci=str.charCodeAt(i)-97
      charactors[asci]++
    }
    const key=charactors.join(' ')
    if(map.has(key)){
      map.set(key,[...map.get(key),str])
    }else{
      map.set(key,[str])
    }
  }
  const result=[]
  for (const item of map){
    result.push(item[1])
  }
  return result  */
  if(strs.length===0) return []

  const map =new Map()
  for(const str of strs){
    const characters=Array(26).fill(0)
    for(let i=0;i<str.length;i++){
      const ascci =str.charCodeAt(i)-97
      characters[ascci]++
    }
    const key =characters.join(' ')
    if(map.has(key)){
      map.set(key,[...map.get(key),str])
    }else{
      map.set(key,[str])
    }
  }

  const result=[]
  for(const item of map){
    result.push(item[1])
  }
  return result
 }