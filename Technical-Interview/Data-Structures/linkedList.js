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




let n1 = new Node(1);
let n2 = new Node(2,n1,null);
n1.next = n2;
let n3 = new Node(3,n2,null);
n2.next = n3;
n3.next = n1;

Node.PrintCircular(n2);