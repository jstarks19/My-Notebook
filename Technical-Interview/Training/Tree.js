class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(root) {
        this.root = root;
    }

    find(value) {
        let curr = this.root;
        while (true) {
            if (curr === null) { // we reach a leaf without finding our element
                break;
            } else {
                if (value < curr.value) { // equal
                    curr = curr.left;
                } else if (value > curr.value) { // equal
                    curr = curr.right;
                } else { // equal
                    return curr;
                }
            }
        }
        return null;
    }

    insert(value) {
        let toInsert = new TreeNode(value);
        let curr = this.root;

        while (true) {
            if (value < curr.value) {
                // descend left
                if (curr.left) {
                    curr = curr.left;
                } else {
                    curr.left = toInsert;
                    break;
                }
            } else {
                // descend right
                if (curr.right) {
                    curr = curr.right;
                } else {
                    curr.right = toInsert;
                    break;
                }
            }
        }
    }

    
    remove(value) {
        this.recRemove(this.root, value);
    }

    recRemove(node, value) {
        if (node === null) return node;

        if (value < node.value) {
            node.left = this.recRemove(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.recRemove(node.right, value);
            return node;
        // we are the value
        } else {
            if (!node.left && !node.right) {
                return null;
            } else if (node.left && node.right) {
                let successor = this.findMin(node.right);
                node.value = successor.value;
                node.right = this.recRemove(node.right, successor.value);
                return node;
            } else {
                let child = node.right ? node.right : node.left;
                return child;
            } 
        }


    }


    findMin(node) {
       let curr = node;
       while (curr.left) {
           curr = curr.left;
       }
       return curr;
    }


    inOrderPrint(curr = this.root) {
        if (curr === null) return;
        this.inOrderPrint(curr.left);
        console.log(curr.value)
        this.inOrderPrint(curr.right);
    }

    preOrderPrint(curr = this.root) {
        if (curr === null) return;
        console.log(curr.value)
        this.preOrderPrint(curr.left);
        this.preOrderPrint(curr.right);
    }


    postOrderPrint(curr = this.root) {
        if (curr === null) return;
        this.postOrderPrint(curr.left);
        this.postOrderPrint(curr.right);
        console.log(curr.value)
    }

}


let rootNode = new TreeNode(10);
let myBST = new BST(rootNode);
myBST.insert(15);
myBST.insert(5);
myBST.insert(3);
myBST.insert(8);
myBST.insert(7);

myBST.inOrderPrint();
console.log(' ');
myBST.preOrderPrint();
console.log(' ');
myBST.postOrderPrint();
