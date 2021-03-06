class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    let currentNode = this.head;

    // 1st use-case: an empty list
    if (!currentNode) {
      this.head = node;
      this._length++;

      return node;
    }

    // 2nd use-case: a non-empty list
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;

    this._length++;

    return this;
  }

  remove(position) {
    let currentNode = this.head;
    let length = this._length;
    let count = 1;
    let message = { failure: 'Failure: non-existent node in this list.'};
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let deletedNode = null;

    // 1st use-case: an invalid position
    if ( position < 1 || position > length) {
      // throw new Error(message.failure);
      return message.failure;
    }
    // 2nd use-case: the first node is removed
    if (position === 1) {
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this._length--;
      return deletedNode;
    }
    // 3rd use-case: any other node is removed
    while (count < position) {
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      currentNode = currentNode.next;
      count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
  }

  printList() {
    if (this.head == null) {
      return "List is empty.";
    }
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
    return this;
  }

  searchNodeAt(position) {
    let currentNode = this.head;
    let length = this._length;
    let count = 1;
    let message = {failure: 'Failure: non-existent node in this list.'}

    // 1st use-case: an invalid position
    if (position < 1 || position > length) {
      return message.failure;
    }
    // 2nd use-case: a valid position
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.val == value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  max() {
    let currentNode = this.head;
    if (currentNode != null) {
      let max = currentNode.val;
      currentNode = currentNode.next;

      while (currentNode) {
        if (currentNode.val > max) {
          max = currentNode.val;
        }
        currentNode = currentNode.next;
      }
      return max;
    }
  }

  min() {
    let currentNode = this.head;
    if (currentNode != null) {
      let min = currentNode.val;
      currentNode = currentNode.next;

      while (currentNode) {
        if (currentNode.val < min) {
          min = currentNode.val;
        }
        currentNode = currentNode.next;
      }
    return min;
    }
  }
} // End of SinglyList class

var myNode = new Node(12);
var myList = new SinglyList();

myList.add(24);
myList.add(55);
myList.add(34);
myList.add(12);
myList.add(20);
myList.add(75);

function minToFront(myList) {
  var min = myList.min();
  var currentNode = myList.head;

  if (currentNode == null || currentNode.val == min) {
    return myList
  }

  while (currentNode.next) {
    if (currentNode.next.val == min) {
      var minNode = currentNode.next;  // minNode = 12
      currentNode.next = currentNode.next.next;  //  34 links to 20
      minNode.next = myList.head;  // 12 points to 24
      myList.head = minNode;  //  myList.head = 12
      return myList;
    }
    currentNode = currentNode.next;
  }
  return myList;
}

// console.log(myList.max());
// console.log(myList.min());

myList.printList();
console.log();
minToFront(myList);
console.log();
myList.printList();
