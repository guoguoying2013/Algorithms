/*
You have a Linked List formed by Node objects with the following properties: Node.next (pointer to the next Node object in the Linked List) and Node.value (value of the node). 
Return the reversed version of the original Linked List:
Example: 
  Input: root -> 1 -> 2 -> 3 -> 4 -> null
  Output: root -> 4 -> 3 -> 2 -> 1 -> null
  
 */

function reverseLinkedList (root) {
    const container = [];
    // interate over the given linked list, save each node to arr
    let node = root;
    while (node !== null) {
      container.push(node)
      node = node.getNext();
    } 
    // interate over arr to reverse the order of linked list
    let newHead = container[container.length - 1];
    let output = newHead;
    for (let i = container.length - 2; i >= 0; i--) {
      output.changeNext(container[i]);
      output = output.getNext();  // point to the next node in linked list.
    }
    output.changeNext(null);
    // return output; // This is a bug, I should have returned the head of linked list, not the end.
    return newHead;
  }
  
  class Node {
    constructor(val, next) {
      this.val = (val !== undefined ? val : 0);
      this.next = (next !== undefined? next: null);
    }
    
    getNext() {
      return this.next;
    }
    
    changeNext(newNext) {
      this.next = newNext;
    }
    
    print() {
      let str = `${this.val}`
      let pointer = this.getNext();
      while(pointer !== null) {
        str += `->${pointer.val}`;
        pointer = pointer.getNext();
      }
      return str;
    }
  }
  
  const root = new Node(0);
  const node1 = new Node(1);
  root.changeNext(node1);
  const node2 = new Node(2);
  node1.changeNext(node2);
  
  console.log(root.print());
  
  
  let res = reverseLinkedList(root);
  console.log(res.print());
  