
class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    // adds an element to the back of the queue
    enqueue(value) {
        this.queue.push(value);
        this.size++;
    }

    // takes from the front of the queue
    dequeue() {
        if (this.size > 0) {
            this.size--;
            return this.queue.shift();
        } else {
            return null;
        }
    }

    // shows the caller the first item in the queue
    peek() {
        return this.size > 0 ? this.queue[0] : null;
    }

    // returns and removes the first item in the queue
    poll() {
        if (this.size > 0) {
            this.size--;
            return this.queue.shift();
        } else {
            return null;
        }
    }


}


let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.dequeue();


console.log(q);