/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = []
  function backtrack (start, curr) {
    // 把curr添加到result数组当中去
    result.push([...curr])  //注意这里要用扩展符，浅复制一下 不然默认传递的是地址值，后面对curr进行操作的时候会影响到result数组
    for (let i = start; i < nums.length; i++) {
      // 1.把num[i]添加到curr中去
      curr.push(nums[i])
      // 2.递归backtrack(i+1,curr)
      backtrack(i + 1, curr)
      // 3.把curr最后一个数组元素移除
      curr.pop()
    }
  }

  backtrack(0, [])

  return result
}