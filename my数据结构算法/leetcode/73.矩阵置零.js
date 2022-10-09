/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 * 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
  输出：[[1,0,1],[0,0,0],[1,0,1]]
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
  // 思路一：暴力解法
  /*
  const zeroRows=[]
  const zeroCols=[]
  for(let row=0;row<matrix.length;row++){
      for(let col=0;col<matrix[0].length;col++){
          if(matrix[row][col]===0){
              if(zeroRows.indexOf(row)===-1){zeroRows.push(row)}
              if(zeroCols.indexOf(col)===-1){zeroCols.push(col)}
          }
      }
  }
  for(const row of zeroRows){
     for(let i=0;i<matrix[0].length;i++){
         matrix[row][i]=0
     }
  }
  for(const col of zeroCols){
      for(let i=0;i<matrix.length;i++){
         matrix[i][col]=0
     }
  }
  return matrix  */

  // 思路二：
  /**
   * 1.用两个变量检查第一行第一列是否有零。 firstRowHasZero和firstColHasZero
   * 2.使用第一行第一列来标记其余行列是否有零
   * 3.接下来，利用第一行第一列标0的情况，来讲matrix中的元素标为0
   * 4.最后，处理第一行和第一列，如果firstRowHasZero为true，那么则将第一列的元素标为0
   */
  let firstRowHasZero=false
  let firstColHasZero=false
  // 检查第一行第一列是否有零
  for(let i=0;i<matrix.length;i++){
    if(matrix[i][0]===0){
      firstColHasZero=true
      break
    }
  }
  for(let i=0;i<matrix[0].length;i++){
    if(matrix[0][i]===0){
      firstRowHasZero=true
      break
    }
  }
  // 使用第一行第一列来标记其余行列是否有零
  for(let row=1;row<matrix.length;row++){
    for(let col=1;col<matrix[0].length;col++){
        if(matrix[row][col]===0){
          matrix[row][0]=0
          matrix[0][col]=0
        }
    }
  }
  // 利用第一行第一列标0的情况，来讲matrix中的元素标为0
  // 遍历第一行 将所有含0的列
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  // 最后，处理第一行和第一列
  // 如果firstColHasZero等于true,将第一列全设为0
  if(firstColHasZero){
    for(let i=0;i<matrix.length;i++){
      matrix[i][0]=0
    }
  }
  // 如果firstRowHasZero等于true,将第一行全设为0
  if (firstRowHasZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }
  return matrix
};