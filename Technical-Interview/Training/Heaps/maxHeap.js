
// Maximum Heap
/*
    Top Element         : Largest element of the heap
    Max Heap Property   : @ Any Node the children of this node are smaller than this node 
    Heap Property       : The Heap is a complete tree, meaning you fill it top to bottom left to right
*/

class maxHeap {
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
        // we inserted our value at the end of the heap
            //  we calculate our parent
        let parent = Math.floor((idx - 1) / 2);

        // As long as our parent exists within the heap
            // and is smaller than the value we inserted
            // keep swapping
        while(this.heap[parent] != null && this.heap[parent] < this.heap[idx]) {
            // swap the new value and the parent
            this.swap(idx, parent);
            // now the parent's index is our index
            idx = parent;
            // recalculate our parent
            parent = Math.floor((idx - 1) / 2);
        }
    }

    // take the top element
    remove() {
        // if there is nothing in the heap, return
        if (this.size === 0) return;

        // swap the first and last element
        this.swap(0, this.size-1);

        // remove the top element (now at the last position)
        let removed = this.heap.pop();
        
        // decrease size
        this.size--;

        // move the new top element down the heap
        this.bubbleDown(0);
        return removed;
    }

    // maintain heap property
    bubbleDown(idx) {

        // we removed the top element and swapped in its position, the last element
        let curr = idx;
        // we are currently the 'largest' of us and our two children (we update if this wrong, which it usually will be)
        let largest = curr;
        // as long as we are the largest at the moment, compare against our children
        while (largest === curr) {
            // calculate children 
            let left = curr * 2 + 1;
            let right = curr * 2 + 2;

            // if our left child exists and the current largest is less than it, left becomes the new largest
            if (this.heap[left] != null && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            // if our right child exists and the current largest is less than it, right becomes the new largest
            if (this.heap[right] != null && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            // if we are no longer the largest, swap the largest with us, and now curr takes the index of the largest that was swapped 
            if (largest !== curr) {
                this.swap(curr, largest);
                curr = largest;
            } else {
                // if we are the largest, there is no reason to keep swapping
                break;
            }
        }


    }

    // swaps the two indices within the heap 
    swap(idx1, idx2) {
        let temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }

}

let mH = new maxHeap();
mH.insert(1);
mH.insert(2);
mH.insert(8);
let one = mH.remove();
let two = mH.remove();
let three = mH.remove();
console.log(one,two,three);

console.log(mH);