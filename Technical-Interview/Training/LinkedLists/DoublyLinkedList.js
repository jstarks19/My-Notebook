

class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}



class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // if value exists in list
    exists(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return true;
            }
        }
        return false;
    }

    // returns null on non-existant, and the node on discovery 
    find(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return curr;
            }
        }
        return null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.head === null) this.head = newNode;
        else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }

            // curr.next !exist

            curr.next = newNode;
            newNode.prev = curr;
        }
    }


    remove(value) {
        if (this.head === null) return null;

        let curr = this.head;
        while(curr) {
            if (curr.value === value) {
                console.log('here')
                if (curr === this.head) {
                    // remove the head
                    this.head = curr.next;
                    return curr;
                } else {
                    // remove curr
                    curr.prev.next = curr.next;
                    curr.next.prev = curr.prev;
                    return curr;
                }
            }
            curr = curr.next;
        }
        return null;
    }

    printList() {
        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }

}



let DLL = new DoublyLinkedList();
DLL.insert(1);
DLL.insert(2);
DLL.insert(3);

DLL.remove(2);
console.log(DLL.head);
DLL.printList();