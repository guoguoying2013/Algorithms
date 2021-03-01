// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.items.length == 0) return 'Underflow';
//         return this.items.shift(); 
//     }

//     peek() { 
//         return this.items[0];
//     }

//     isEmpty() {
//         return this.items.length == 0;
//     }

//     printQ() {
//         console.log(this.items)
//     }
// }

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;
        const temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;

        this.size --;

        return temp.val;
    }

    print() {
        let pointer = this.first;
        while(pointer !== null) {
            console.log(pointer.val);
            pointer = pointer.next;
        }
    }
}


//////// test //////////
// const myQ = new Queue();
// myQ.push('a');
// myQ.push('b');
// myQ.push('c');
// myQ.printQ();
// console.log(myQ.peek());
// myQ.printQ();
// console.log(myQ.pop());
// myQ.printQ();

const myQ = new Queue();
myQ.enqueue('a');
myQ.enqueue('b');
myQ.enqueue('c');
myQ.print();
myQ.dequeue();
myQ.print();