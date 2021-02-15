/*
Given the head of a linked list, return the list after sorting it in ascending order.
Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

input: linked list;
output: linked list;
time constriant: O(nlogn)


merge sort algo runs in O(nlogn) in all cases
Quicksort is also one of the efficient algorithms with the average time complexity of O(nlogn). 
But the worst-case time complexity is O(n2). 
Also, variations of the quick sort like randomized quicksort are not efficient for the linked list 
because unlike arrays, random access in the linked list is not possible in O(1) time. 
If we sort the linked list using quicksort, we would end up using the head as a pivot element 
which may not be efficient in all scenarios.

Algorithm

Recursively split the original list into two halves. 
The split continues until there is only one node in the linked list (Divide phase). 
To split the list into two halves, we find the middle of the linked list using the Fast and Slow pointer approach 
as mentioned in Find Middle Of Linked List.

Recursively sort each sublist and combine it into a single sorted list. (Merge Phase).
This is similar to the problem Merge two sorted linked lists
*/

/**
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

let merge = (l1, l2) => {
    let dummyHead = new ListNode();
    let tail = dummyHead;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
            tail = tail.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
            tail = tail.next;
        }
    }
    tail.next = (l1 != null) ? l1 : l2;
    return dummyHead.next;
}

let getMid = (head) => {
    let midPrev = null;
    while (head != null && head.next != null) {
        midPrev = (midPrev == null) ? head : midPrev.next;
        head = head.next.next;
    }
    let mid = midPrev.next;
    midPrev.next = null;
    return mid;
}

let sortList = function(head) {
  if (head == null || head.next == null) return head;
  let mid = getMid(head);
  let left = sortList(head);
  let right = sortList(mid);
  return merge(left, right);
};