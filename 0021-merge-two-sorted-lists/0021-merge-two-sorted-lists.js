/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  // Creating new dummy node to act as a pointer while comparing
  const holder = new ListNode(- Infinity);
  let pointer = holder;
  // While nodes still populate both lists remains true, fire commands
  while(list1 && list2) {
    // Move pointer to list 1 and increment list 1
    if (list1.val <= list2.val) {
      pointer.next = list1;
      pointer = list1;
      list1 = list1.next;
    } else {
      // Move pointer to list 2 and increment list 2
      pointer.next = list2;
      pointer = list2;
      list2 = list2.next;
    }
  }
  // Check if running node is null, if so, pointer moves to the next list
  if (!list1) pointer.next = list2;
  if (!list2) pointer.next = list1;

  return holder.next;
}