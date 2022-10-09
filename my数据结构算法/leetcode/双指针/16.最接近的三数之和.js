/**
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。\
 * 返回这三个数的和。
 * 假定每组输入只存在恰好一个解。
 * 输入：nums = [-1,2,1,-4], target = 1
 * 输出：2
 * 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  let ans=Number.MAX_VALUE

  nums.sort((a,b)=>{
    return a-b
  })
  var isPositive=1
  for(let i=0;i<nums.length-2;i++){
      let start=i+1
      let end=nums.length-1
      while (start<end) {
        diff=nums[i]+nums[start]+nums[end]-target
  
        // ans=Math.min(ans,diff)
        if(diff===0) {return target}
        else if(diff>0){
          isPositive=1
          ans=Math.min(ans,diff)
          end--
        }else{
          isPositive=0
          ans=Math.min(ans,-diff)
          start++
        }
      }
  }

  return isPositive===1?ans+target:target-ans

};
const nums = [0,0,0]
let target = 1
console.log(threeSumClosest(nums,target))