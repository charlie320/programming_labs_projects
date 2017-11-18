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

end


myList = SinglyList.new()
myList.add(12)
myList.add(24)
myList.add(55)
myList.add(34)
myList.add(20)
myList.add(75)

p(myList)
