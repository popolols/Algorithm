function BinarySearchTree () {
  function Node (key) {
    this.key = key
    this.left = null
    this.right = null
  }

  this.root = null

  // 插入数据
  BinarySearchTree.prototype.insert = function (key) {
    var newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  BinarySearchTree.prototype.insertNode = function (node, newNode) {

  }
}

