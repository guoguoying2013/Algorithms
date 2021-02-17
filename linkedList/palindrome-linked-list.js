/*
Given a singly linked list, determine if it is a palindrome.
*/
/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const isPalindrome = (head) => {
    if (head == null || head.next == null) return true;
    const getRightHalf = (h) => {
      let fast = h;
      let slow = h;
      while (fast != null && fast.next !== null) {
          slow = slow.next;
          fast = fast.next.next;
      }
      if (fast == null) {
          return slow;
  
      } else {
          return slow.next;
      }
    }
  
    const reverseLinkedList = (h) => {
        // 1 -> 2 -> 3 ->null // 3 point to null, not to empty node
        // pre = null
        // null <- 1 <-2
      let pre = null; // pre should start with null rather than empty linkedlist node
      console.log('h: ', h);
      while(h != null) {
          let next = h.next;
          h.next = pre;
          pre = h;
          h = next;
      }
      return pre; // pre is the head of reversed linked list
    }
  
    let rightHalf = getRightHalf(head);
    console.log('rightHalf:   ', rightHalf);
    let reversedRightHalf = reverseLinkedList(rightHalf);
    console.log('reversedRightHalf', reversedRightHalf);
    console.log('head: ', head);
    while(reversedRightHalf != null) {
        if(reversedRightHalf.val != head.val) {
            return false;
        }
        reversedRightHalf = reversedRightHalf.next;
        head = head.next;
    }
    return true;
  };

let test = new ListNode(1);
test.next = new ListNode(2);
// test.next.next = new ListNode(3);
console.log(test);
console.log(isPalindrome(test));
let test2 = new ListNode(-129);
test2.next = new ListNode(-129);
console.log(isPalindrome(test2));
let test3 = new ListNode(1);
test3.next = new ListNode(0);
test3.next.next = new ListNode(0);
console.log(isPalindrome(test3));