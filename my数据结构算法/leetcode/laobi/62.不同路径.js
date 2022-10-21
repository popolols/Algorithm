/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？
输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下

题解思路：把握好只能向右或者向下移动这个特征 到达某一格子的路径数等于左边格子路径数与上边格子路径数之和
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
  const memo=[]
  for(let i=0;i<n;i++){
    memo.push([])
  }
  // 初始化第一列 只能为1
  for(let row=0;row<n;row++){
    memo[row][0]=1
  }
  // 初始化第一行 只能为1
  for(let col=0;col<m;col++){
    memo[0][col]=1
  }
  for(let row=1;row<n;row++){
    for(let col=1;col<m;col++){
      memo[row][col]=memo[row-1][col]+memo[row][col-1]
    }
  }

  return memo[n-1][m-1]
};