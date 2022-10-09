/**
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标。
 * 示例 1：
输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
 * 示例 2：
输入：nums = [3,1,0,2,4]
输出：true
思路一：可以用动态规划 递归回溯
1.定义一个表记录每个节点是否为通路 （即是否可达到）0表示未知 1表示是通路 -1表示未通
思路二：可以用动态规划 从后往前回溯遍历
1.定义一个表记录每个节点是否为通路 （即是否可达到）0表示未知 1表示是通路 -1表示未通
思路三：贪心算法 依然是从后往前遍历 
1.定义一个变量maxJump，初始值为末尾的下标
2.往前遍历，判断index+nums[index]是否大于maxJump，大于maxJump表示该点可达 maxjump=index 否则一直往前遍历
3.最后判断maxjump的值是否为0
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 思路一
  /*
  const totalLength=nums.length
  const memo=Array(totalLength).fill(0)
  memo[totalLength-1]=1

  function jump(position) {
    if(memo[position]===-1){
      return false
    }else if(memo[position]===1){
      return true
    }

    const maxJump=Math.min(position+nums[position],totalLength-1)

    for(let i=position;i<maxJump;i++){
      const jumpResult=jump(i)
      if(jumpResult===true){
        memo[position]=1
        return true
      }
    }
    memo[position]=-1
    return false

  }

  let result=jump(0)
  return result */

  // 思路二
  /*
  const totalLength = nums.length
  const memo = Array(totalLength).fill(0)
  memo[totalLength - 1] = 1

  for (let i = totalLength - 2; i >= 0; i--) {
    const maxJump = Math.min(i + nums[i], totalLength - 1)
    for (let j = i + 1; j <= maxJump; j++) {
      if (memo[j] === 1) {
        memo[i] = 1
        break
      }
    }
  }

  if (memo[0] === 1) {
    return true
  } else {
    return false
  } */
 
  // 思路三

  let maxJump=nums.length-1
  for(let i=nums.length-2;i>=0;i--){
    if(i+nums[i]>=maxJump){
      maxJump=i
    }
  }
  if(maxJump===0){return true}
  else{return false}
};