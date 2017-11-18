function Node(value) {
    this.val = value;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function(value) {
    var node = new Node(value),
    currentNode = this.head;

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

    return node;
};

SinglyList.prototype.searchNodeAt = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};

    // 1st use-case: an invalid position
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2nd use-case: a valid position
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
};

SinglyList.prototype.remove = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
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
};

SinglyList.prototype.contains = function(val) {
  var currentNode = this.head;
  if (currentNode == null) {
    return false;
  }
  if (currentNode.val == val) {
    return true;
  }
  while (currentNode.next) {
    currentNode = currentNode.next;
    if (currentNode.val == val) {
      return true;
    }
  }
  return false;
}

SinglyList.prototype.max = function() {
  var currentNode = this.head;
  var max;
  if (currentNode.next == null) {
    return currentNode.val;
  }
  max = currentNode.val;
  while (currentNode.next) {
    if(currentNode.next.val > max) {
      max = currentNode.next.val;
    }
  currentNode = currentNode.next;
  }
  return max;
}

SinglyList.prototype.min = function() {
  var currentNode = this.head;
  var min;
  if (currentNode.next == null) {
    return currentNode.val;
  }
  min = currentNode.val;
  while (currentNode.next) {
    if(currentNode.next.val < min) {
      min = currentNode.next.val;
    }
  currentNode = currentNode.next;
  }
  return min;
}

var myList = new SinglyList();
myList.add(12);
myList.add(24);
myList.add(55);
myList.add(34);
myList.add(20);
myList.add(75);


// var myEmptyList = new SinglyList();
// var mySingleList = new SinglyList();
// console.log(myList.max());
// console.log(myList.min());

// mySingleList.add(15);
// console.log(myList._length);
// console.log(myList.head);
// console.log(myList.searchNodeAt(1));
// myList.remove(1);
// console.log(myList.head);
// myList.remove(1);
// console.log(myList.head);

// console.log(myList.contains(12));
// console.log(myEmptyList.contains(12));
// console.log(mySingleList.contains(16));


function printList(myList) {
  if (!myList.head) {
    return myList;
  }

  currentNode = myList.head;
  while (currentNode.next) {
    console.log(currentNode.val);
    currentNode = currentNode.next;
  }
  console.log(currentNode.val);
  return myList;
}

printList(myList);
console.log();
myList.remove(4);
console.log();
printList(myList);
