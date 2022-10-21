/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 示例 1：
 * [1,2,3]
 * [4,5,6]
 * [7,8,9]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 题解：
 * 1.如果数组为空，则返回数组
 * 2.定义四个边界以及当前方向
 * 3.当左边界小于等于右边界，且上边界小于等于下边界时，执行while循环
 * 按照右、下、左、上的顺序一次将字符添加到结果里。
 * 4.while循环结束后，返回数组
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
  if(matrix.length===0) return []
  const result=[]
  let direction="right"
  let left=0
  let right=matrix[0].length-1
  let top=0
  let bottom=matrix.length-1
  while (left<=right&&top<=bottom) {
    if(direction==="right"){
      for(let i=left;i<=right;i++){
        result.push(matrix[top][i])
      }
      top++
      direction="bottom"
    }else if(direction==="bottom"){
      for(let i=top;i<=bottom;i++){
        result.push(matrix[i][right])
      }
      right--
      direction="left"
    }else if(direction==="left"){
      for(let i=right;i>=left;i--){
        result.push(matrix[bottom][i])
      }
      bottom--
      direction="top"
    }else if(direction==="top"){
      for(let i=bottom;i>=top;i--){
        result.push(matrix[i][left])
      }
      left++
      direction="right"
    }
  }
  return result
};