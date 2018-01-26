class BTNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(value) {
    let node = new BTNode(value);
    let currentNode = this.root;

    // 1st use-case: an empty list
    if (!currentNode) {
      this.root = node;
      return this.root.val;
    }

    // 2nd use-case: a non-empty list
    if (value < currentNode.val) {
      currentNode = currentNode.left;
      if (currentNode == null) {
        currentNode.val = value;
        return currentNode.val;
      }
    }
    if (value >= currentNode.val) {
      currentNode = currentNode.right;
      if (currentNode == null) {
        currentNode.val = value;
        return currentNode.val;
      }
    }
  }
}

var myNode = new BTNode(12);
var myTree = new BST();

console.log(myTree.add(15));
console.log(myTree.add(2));
console.log(myTree.add(5));
