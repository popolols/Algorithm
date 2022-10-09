// 思路：
// 1.用一个数组记录每个节点的状态，数组的属性值是一个node节点，包括当前距离和前置节点两个属性
// 2.递归遍历a的子节点。

// 用链表来记录中转节点
function Node (val, pre) {
  this.val = val //当前距离
  this.pre = pre || nul  //中转（前置）节点
}

function dijkstra (matrix, start = 0) {
  const rows = matrix.length, cols = matrix[0].length

  let distance = new Array(rows)
  for (let i = 0; i < rows; i++) {
    distance[i] = new Node(Infinity)
  }

  // 

  return distance

}

function fibonaci (params) {
  if (params === 1) return 1
  if (params === 2) return 1

  return fibonaci(params - 1) + fibonaci(params - 2)
}