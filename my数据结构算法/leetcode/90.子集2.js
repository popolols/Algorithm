/**
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
 * 示例 1：
 * 输入：nums = [1,2,2]
 * 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  const result=[]
  function backtrack(start,curr) {
    //  首先把curr存进result数组
      result.push([...curr])
    for(let i=start;i<nums.length;i++){
      if(i>start && nums[i]===nums[i-1]){
        continue
      }
      curr.push(nums[i])
      backtrack(i+1,curr)
      curr.pop()
    }
  }

  backtrack(0,[])
  return result
};