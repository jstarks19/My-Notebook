class Node {

    static PrintLinkedList(head) {
      let curr = head;
      while( curr != null ) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
    
    constructor(data = null, prev = null, next = null) {
      this.value = data;
      this.prev = prev;
      this.next = next;
    }
      
}


class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    dequeue() {
        let head = this.head;
        if (head.next) {
            this.head = head.next;
            return head;
        } else {
            this.head = null;
            this.tail = null;
            return head;
        }
    }

    // Add to Back of Queue 
    enqueue(data) {
        let newNode = new Node(data);

        // If the list exists
        if (this.head) {           
            this.tail.next = newNode;
            this.tail = newNode;

        // If it does not 
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
    }

    peek() {
        console.log(this.head.value);
        let newOb = new Node(this.head.value);
        return newOb;
    }


}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log(q.peek());
Node.PrintLinkedList(q.head);