class Node {

    static PrintLinkedList(head) {
        let curr = head;
        while( curr != null ) {
        console.log(curr.value);
        curr = curr.next;
        }
    }

    constructor(value = null, key = null, next = null) {
        this.value = value;
        this.keyRef = key;
        this.next = next;
    }
    
}


class HashTable {
    constructor(mod=10) {
        this.tableArr = [];
        this.mod = mod;
    }

    put(key, value) {
        let nodeToAdd = new Node(value, key);
        let index = this.hasher(key);
        if (this.tableArr[index]) {
            this.addToBucket(index, nodeToAdd);
            return true;
        } else {
            this.tableArr[index] = nodeToAdd;
            return true;
        }
    }


    get(key) {
        let index = this.hasher(key);
        if (this.tableArr[index]) {
            const {result, value} = this.findValueInBucket(key, this.tableArr[index]);
            return result ? value : "Does Not Exist";
        } else {
            return "Does Not Exist";
        }
    }

    hasher(key) {
        let arr = key.split('');
        let sum = arr.reduce((acc, head) => { return head.charCodeAt() + acc},0);
        sum = Math.floor(sum % this.mod);
        return sum;
    }

    findValueInBucket(key, bucket) {
        let curr = bucket;
        while (curr !== null) {
            if (curr.keyRef === key) {
                return {result: true, value: curr.value};
            }
            curr = curr.next;
        }   
        return {result: false, value: null};
    }


    addToBucket(index, node) {
        let currHead = this.tableArr[index];
        node.next = currHead;
        this.tableArr[index] = node;
        return;
    }


    printTable() {
        for (const bucket of this.tableArr) {
            console.log('\t\tBucket Start');
            Node.PrintLinkedList(bucket);
            console.log('\t\tBucket End');
        }
    }


}




let map = new HashTable();

map.put('hello', 1);
map.put('jason', 200);
map.put('hi', 3);
map.put('he', 4);
console.log(map.get('jason'));



  






