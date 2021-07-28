
// Minimum Heap
/*
    Top Element         : Smallest element of the heap
    Min Heap Property   : @ Any Node the children of this node are greater than this node 
    Heap Property       : The Heap is a complete tree, meaning you fill it top to bottom left to right
*/

class minHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    // check the top element of the heap without removing 
    peek() {
        return this.size > 0 ? this.heap[0] : null;
    }

    // insert an element into the minHeap
    insert(value) {
        this.heap.push(value);
        this.size++;
        this.bubbleUp(this.size - 1);
    }
    // after insertion 
    bubbleUp(idx) {
        let parent = Math.floor((idx - 1) / 2);
        while(this.heap[parent] && this.heap[idx] < this.heap[parent]) {
            this.swap(idx, parent);
            idx = parent;
            parent = Math.floor((idx - 1) / 2);
        }
    }

    // take the top element
    remove() {
        if (this.size === 0) return;
        this.size--;
        let removedValue = this.heap[0];
        let lastIdx = this.heap[this.size - 1];
        this.heap[0] = this.heap[lastIdx];
        this.heap.pop();
        console.log(this.heap);
        this.bubbleDown(0);
        return removedValue;
    }
    // maintain heap property
    bubbleDown(idx) {
        let currIdx = idx;
        let smallest = currIdx;
        while(smallest === currIdx) {
            let leftIdx = currIdx * 2 + 1;
            let rightIdx = currIdx * 2 + 2;

            if (this.heap[leftIdx] != null && this.heap[smallest] > this.heap[leftIdx]) {
                smallest = leftIdx;
            }
            if (this.heap[rightIdx] != null && this.heap[smallest] > this.heap[rightIdx]) {
                smallest = rightIdx;
            }
            if (currIdx !== smallest) {
                this.swap(currIdx, smallest);
                currIdx = smallest;
            } else {
                break;
            }
        }
    }

    // swaps the two indexes within the heap 
    swap(idx1, idx2) {
        let temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }

}