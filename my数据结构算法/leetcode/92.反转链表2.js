/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    let pre=null
    let cur=head
    let next=head
    for(let i=1;i<left;i++){
      pre=cur
      cur=cur.next
    }
    let pre2=pre
    let cur2=cur
    for(let i=left;i<=right;i++){
      next=cur.next
      cur.next=pre
      pre=cur
      cur=next
    }
    //m>1
    if(pre2!==null){
      pre2.next=pre
    }else{
      head=pre
    }

    cur2.next=cur
    return head
};