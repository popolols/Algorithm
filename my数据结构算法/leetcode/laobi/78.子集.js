/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 题解：
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
   
  const result=[]
  function backtrack(start,curr) {
      // 把curr添加到result数组当中去
      result.push([...curr])  //注意这里要用扩展符，浅复制一下 不然默认传递的是地址值，后面对curr进行操作的时候会影响到result数组
      for(let i=start;i<nums.length;i++){
        // 1.把num[i]添加到curr中去
        curr.push(nums[i])
        // 2.递归backtrack(i+1,curr)
        backtrack(i+1,curr)
        // 3.把curr最后一个数组元素移除
        curr.pop()
      }
  }

  backtrack(0,[])

  return result
};