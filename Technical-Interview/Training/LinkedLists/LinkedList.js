class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }


    find(value) {
        let curr = this.head;
        while(curr) {
            if (curr.value === value) {
                return curr;
            }
            curr = curr.next;
        }
        return null;
    }

    // Add to front of list
    unshift(value) {
        if (!this.head) {
            this.head = new LinkedListNode(value);
        } else {
            let toInsert = new LinkedListNode(value);
            toInsert.next = this.head;
            this.head = toInsert;
        }

    }

    // Add to back of list
    push(value) {
        if (!this.head) {
            this.head = new LinkedListNode(value);
        } else {
            let curr = this.head;
            let prev = null;
            while(curr) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = new LinkedListNode(value);
        }

    }

    // Sorted Insert
    insertSorted(value) {
        if (!this.head) {
            this.head = new LinkedListNode(value);
        } else {
            let curr = this.head;
            let prev = null;
            let toInsert = new LinkedListNode(value);
            while(curr) {
                if (value < curr.value) {
                    // we want to insert before the head
                    if (curr === this.head) {
                        toInsert.next = this.head;
                        this.head = toInsert;
                    
                    // insert in the middle
                    } else {
                        toInsert.next = curr;
                        prev.next = toInsert;
                    }
                    break;
                }
                prev = curr;
                curr = curr.next;
            }

            // if the loop breaks through termination, we insert at the end 
            if (curr === null) {
                prev.next = toInsert;
            }
        }
    }


    remove(value) {
        if (!this.head) {
            return null;
        } else if (this.head.value === value) {
            this.head = this.head.next;
        } else {
            let prev = null;
            let curr = this.head;
            while (curr) {
                if (curr.value === value) {
                    prev.next = curr.next;
                    return curr;
                }   
                prev = curr;
                curr = curr.next;
            }
            return null;
        }
    }

    printList() {
        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }


}


let ll = new LinkedList();
ll.unshift(1);
ll.unshift(2);
ll.unshift(3);
ll.unshift(4);
ll.push(0);
ll.printList();