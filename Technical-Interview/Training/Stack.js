
class stackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value) {
        let toAdd = new stackNode(value)
        toAdd.next = this.head;
        this.head = toAdd;
        this.size++;
    }

    pop() {
        let value = this.head;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    peek() {
        return this.size > 0 ? this.head.value : null;
    }

}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack);