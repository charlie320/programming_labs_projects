class Node(object):
    def __init__(self,value):
        self.val = value
        self.next = None

class SinglyList(object):
    def __init__(self):
        self._length = 0
        self.head = None

    def add(self,value):
        node = Node(value)
        currentNode = self.head
        # 1st use-case: an empty list
        if not currentNode:
            self.head = node
            self._length += 1;
            return node

        # 2nd use-case: a non-empty list
        while currentNode.next:
            currentNode = currentNode.next

        currentNode.next = node

        self._length += 1

        return node

    def printList(self):
        if not self.head:
            return self
        currentNode = self.head
        while currentNode.next:
            print currentNode.val
            currentNode = currentNode.next

        print currentNode.val
        return self

    def searchNodeAt(self,position):
        currentNode = self.head
        length = self._length
        count = 1
        message = {'failure' : 'Failure: non-existent node in this list.'}

        # 1st use-case: an invalid position
        if length == 0 or position < 1 or position > length:
            return message['failure']

        # 2nd use-case: a valid position
        while count < position:
            currentNode = currentNode.next
            count += 1

        return currentNode.val

    def remove(self,position):
        currentNode = self.head
        length = self._length
        count = 1
        message = {'failure' : 'Failure: non-existent node in this list.'}
        beforeNodeToDelete = None
        nodeToDelete = None
        deletedNode = None

        # 1st use-case: an invalid position
        if position < 0 or position > length:
            # raise ValueError('Failure: non-existent node in this list.')
            return message['failure']

        # 2nd use-case: the first node is removed
        if position == 1:
            self.head = currentNode.next
            deletedNode = currentNode
            currentNode = None
            self._length -= 1
            return deletedNode

        # 3rd use-case: any other node is removed
        while count < position:
            beforeNodeToDelete = currentNode
            nodeToDelete = currentNode.next
            currentNode = currentNode.next
            count += 1

        beforeNodeToDelete.next = nodeToDelete.next
        deletedNode = nodeToDelete
        nodeToDelete = None
        self._length -= 1

        return deletedNode.val

    def max(self):
        currentNode = self.head

        # Check for empty list or single-node list
        if currentNode.next == None:
            return currentNode

        # Check for max on lists longer than 1 node
        max = currentNode.val
        while currentNode.next:
            if currentNode.next.val > max:
                max = currentNode.next.val
            currentNode = currentNode.next
        return max

    def min(self):
        currentNode = self.head

        # Check for empty list or single-node list
        if currentNode.next == None:
            return currentNode

        # Check for max on lists longer than 1 node
        min = currentNode.val        
        while currentNode.next:
            if currentNode.next.val < min:
                min = currentNode.next.val
            currentNode = currentNode.next
        return min

    def contains(self,value):
        currentNode = self.head

        # Check for empty list
        if currentNode == None:
            return False

        # Check for fist node
        if currentNode.val == value:
            return True

        # Check for remainder of list of multi-node list
        while currentNode.next:
            currentNode = currentNode.next
            if currentNode.val == value:
                return True

        return False
# end of SinglyList class

myList = SinglyList()
myList.add(12)
myList.add(24)
myList.add(55)
myList.add(34)
myList.add(20)
myList.add(75)


# print "Max = {}".format(myList.max())
# print "Min = {}".format(myList.min())

print myList.contains(13)
