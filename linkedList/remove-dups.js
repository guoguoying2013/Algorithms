function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
};
/*
remove duplicatew from an unsorted linked list
input: singl linked list
output: linked list
*/

function removeDups(node) {
  const containerSet = new Set(); // hash table, a buffer
  let previous = null; 
  while (node !== null) { // we want to check the last node
    if(containerSet.has(node.val)) {
      previous.next = node.next;
    } else {
      containerSet.add(node.val);
      previous = node
    };
    node = node.next;
  }
}

// above O(N)
// if we don't want to use a buffer, we can iterate with two pointers: current which iterates through the linked list,
// and runner which checks all subsequent nodes for duplicates.