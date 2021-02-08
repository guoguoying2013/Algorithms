class Queue {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length == 0) return 'Underflow';
        return this.items.shift(); 
    }

    peek() { 
        return this.items[0];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printQ() {
        console.log(this.items)
    }
}

const myQ = new Queue();
myQ.push('a');
myQ.push('b');
myQ.push('c');
myQ.printQ();
console.log(myQ.peek());
myQ.printQ();
console.log(myQ.pop());
myQ.printQ();