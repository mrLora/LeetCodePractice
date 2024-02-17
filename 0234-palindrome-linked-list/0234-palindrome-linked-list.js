/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  
  let slow = head;
  let fast = head;
  const stack = [];
  
  while(fast) {
    
    if (!fast.next) {
      
      slow = slow.next;
      break;
      
    }
    
    stack.push(slow.val)
    slow = slow.next;
    fast = fast.next.next;
    
  }
  
  while(slow) {
    
    if(stack.pop() != slow.val) return false;
    slow = slow.next;
    
  }
  
  return true;
};