/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 * 示例 1：
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 题解：
 * 范围判断
 * 首先对数组进行排序
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  if(intervals.length<2) return intervals
  const result=[]

  intervals.sort(function(a,b){
    return a[0]-b[0]
  })
  let cur=intervals[0]
  for(const interval of intervals){
    if(cur[1]>=interval[0]){
      cur[1]=Math.max(cur[1],interval[1])
      result.push(cur)
      cur=interval
    }else{
      result.push(cur)
      cur=interval
    }
  }
  result.push(cur)

  return result
};