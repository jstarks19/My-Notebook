class Node {
  constructor(value) {
    this.value = value;
  }
}

class SLinkedNode extends Node {
  constructor(value) {
    super(value);
    this.next = null;
  }
}

class DLinkedNode extends Node {
  constructor(value) {
    super(value);
    this.next = null;
    this.prev = null;
  }
}

class TreeNode extends Node {
  constructor(value) {
    super(value);
    this.left = null;
    this.right = null;
  }
}

module.exports = {SLinkedNode, DLinkedNode, TreeNode, Node};