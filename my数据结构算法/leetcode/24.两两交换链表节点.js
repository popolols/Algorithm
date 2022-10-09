/**
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  /*
  let dummy=new ListNode()
  dummy.next=head
  let p=dummy
  while(p.next!==null && p.next.next!==null){
      let n1=p.next
      let n2=p.next.next
      p.next=n2
      n1.next=n2.next
      n2.next=n1
      p=n1
  }
  return dummy.next  */
  let dummy = new ListNode()
  dummy.next=head
  let cur = dummy

  while (cur.next !== null && cur.next.next !== null) {
    let n1 = cur.next
    let n2 = cur.next.next
    cur.next = n2
    n1.next = n2.next
    n2.next = n1
    cur = n1
  }
  return dummy.next

};