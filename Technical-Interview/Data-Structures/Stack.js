const Node = require('./Node');

// Standard stack array implementation
class Stack {
  constructor() {
    this.stack = [];
    this.count = 0;
  }

  push(elem) {
    this.stack[this.count++] = elem;
  }

  pop() {
    let elem = this.stack[this.count - 1];
    this.count--;
    return elem;
  }

  peek() {
    return this.stack[this.count - 1];
  }

  length() {
    return this.count;
  }

}

let S = new Stack();
S.push(1);
S.push(2);
S.push(3);
S.push(4);
console.log(S.peek());
console.log(S.pop());
console.log(S.peek());



// Stack Using a Linked List
class StackLL {
    constructor() {
        this.head = new Node();
    }


    push(value) {
        let newNode = new Node(value);
        newNode.next = this.head; 
        this.head = newNode;
    }

    pop() {
        let curr = this.head;
        this.head = this.head.next;
    }

    peek() {
        return this.head;
    }
}


















