class Node
  attr_accessor :val, :next

  def initialize(value)
    @val = value
    @next = nil
  end
end

class SinglyList
  attr_accessor :_length, :head

  def initialize()
    @_length = 0
    @head = nil
  end

  def add(value)
    node = Node.new(value)
    currentNode = @head

    # 1st use-case: an empty list
    if !currentNode
      @head = node
      @_length += 1
      return node
    end

    #2nd use-case: a non-empty list
    while currentNode.next
      currentNode = currentNode.next
    end

    currentNode.next = node

    @_length += 1

    return node
  end

  def printList()
    if !@head
      return self
    end

    currentNode = @head
    while currentNode.next
      p(currentNode.val)
      currentNode = currentNode.next
    end
    p(currentNode.val)
    return self
  end

  def searchNodeAt(position)
    currentNode = @head
    length = @_length
    count = 1
    message = {'failure' => 'Failure: non-existent node in this list.'}

    # 1st use-case: an invalid position
    if length == 0 || position < 1 || position > length
      return message['failure']
    end

    # 2nd use-case: a valid position
    while count < position
      currentNode = currentNode.next
      count += 1
    end

    return currentNode.val
  end

  def remove(position)
    currentNode = @head
    length = @_length
    count = 1
    message = {'failure' => 'Failure: non-existent node in this list.'}
    beforeNodeToDelete = nil
    nodeToDelete = nil
    deletedNode = nil

    # 1st use-case: an invalid position
    if position < 0 or position > length
      return message['failure']
    end

    # 2nd use-case: the first node is removed
    if position == 1
      @head = currentNode.next
      deletedNode = currentNode
      currentNode = nil
      @_length -= 1
      return deletedNode
    end

    # 3rd use-case: any other node is removed
    while count < position
      beforeNodeToDelete = currentNode
      nodeToDelete = currentNode.next
      currentNode = currentNode.next
      count += 1
    end

    beforeNodeToDelete.next = nodeToDelete.next
    deletedNode = nodeToDelete
    nodeToDelete = nil
    @_length -= 1

    return deletedNode.val
  end


  def max()
    currentNode = @head

    # Check for empty list
    if currentNode == nil
      return currentNode
    end

    # Check for max
    max = currentNode.val
    while currentNode.next
      if currentNode.next.val > max
        max = currentNode.next.val
      end
      currentNode = currentNode.next
    end
    return max
  end

  def min()
    currentNode = @head

    # Check for empty list
    if currentNode == nil
      return currentNode
    end

    # Check for max
    min = currentNode.val
    while currentNode.next
      if currentNode.next.val < min
        min = currentNode.next.val
      end
      currentNode = currentNode.next
    end
    return min
  end

end # end of SinglyList class

myList = SinglyList.new()
myList.add(24)
myList.add(55)
myList.add(34)
myList.add(12)
myList.add(20)
myList.add(75)

def minToFront(myList)
  min = myList.min()
  currentNode = myList.head

  if currentNode == nil or currentNode.val == min
    return myList
  end

  while currentNode.next # as long as there is another node
    if currentNode.next.val == min # if currentNode.next.val = 12
      minNode = currentNode.next # minNode = 12
      currentNode.next = currentNode.next.next # currentNode.next is now = 20.  34 is now linked to 20.
      minNode.next = myList.head # 12.next is linked to 24
      myList.head = minNode # 12 is now the head
      return myList
    end
  currentNode = currentNode.next
  end

  return myList
end

p myList.printList()
minToFront(myList)
p myList.printList()
