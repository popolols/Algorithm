/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (A === null || B === null) return false
  if (A.val === B.val && (recur(A.left, B.left) && recur(A.right, B.right))) return true

  return isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

var recur = function (A, B) {
  if (B === null) return true
  if (A === null) return false
  if (A.val === B.val) {
    return recur(A.left, B.left) && recur(A.right, B.right)
  } else {
    return false
  }
}