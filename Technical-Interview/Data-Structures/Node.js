class Node {

    static PrintLinkedList(head) {
      let curr = head;
      while( curr != null ) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  
    static PrintCircular(head) {
      if (head.value != null) {
        console.log(head.value);
      }
      let curr = head.next;
      while(curr && curr.value !== head.value) {
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

module.exports = Node;