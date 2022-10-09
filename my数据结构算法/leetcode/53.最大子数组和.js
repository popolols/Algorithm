/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组 是数组中的一个连续部分。
示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 题解：动态规划的思想
 * 
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let maxSum=nums[0]
  let sum=0
  for(let i=0;i<nums.length;i++){
    if(sum>0){
      sum+=nums[i]
    }else{
      sum=nums[i]
    }
    maxSum=Math.max(sum,maxSum)
  }
  return maxSum
};
// 解1:
// const memo=[]
//   memo[0]=nums[0]
//   for(let i=1;i<nums.length;i++){
//     memo[i]=Math.max(nums[i]+memo[i-1],nums[i])
//   }
//   let max=memo[0]
//   for(let i=0;i<memo.length;i++){
//     max=Math.max(memo[i],max)
//   }
//   return max