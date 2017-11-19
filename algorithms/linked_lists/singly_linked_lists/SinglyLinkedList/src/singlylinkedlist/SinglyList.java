/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package singlylinkedlist;

import java.util.HashMap;

/**
 *
 * @author Charlie
 */
public class SinglyList {
    public Node head;
    public Node node;
    public int _length = 0;

    // We will use no-argument constructor for all instances

    public Node add(int value) {
      node = new Node(value);
      Node currentNode = this.head;

      // 1st use-case: an empty list
      if (currentNode == null) {
        this.head = node;
        this._length++;
        return node;
      }

      // 2nd use-case: a non-empty list
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
      this._length++;
      return node;
    }

    public SinglyList printList() {
      if (this.head == null) {
        return this;
      }

      Node currentNode = this.head;
      while (currentNode.next != null) {
        System.out.println(currentNode.val);
        currentNode = currentNode.next;
      }
      System.out.println(currentNode.val);
      return this;
    }

    public boolean contains(int value) {
        Node currentNode = this.head;
        
        // Check for empty list
        if (currentNode == null){
            return false;
        }
        // Check for first node
        if (this.head.val == value) {
            return true;
        }
        // Check for remainder of list of multi-node list
        while (currentNode.next != null) {
            currentNode = currentNode.next;
            if (currentNode.val == value) {
                return true;
            }
        }
      return false;
    }

    public int remove(int position) {
        Node currentNode = this.head;
        int length = this._length;
        int count = 1;
        HashMap<String, String> message = new HashMap<>();
        message.put("failure","Failure: non-existent node in this list.");
        Node beforeNodeToDelete = null;
        Node nodeToDelete = null;
        Node deletedNode;

        // 1st use-case: an invalid position
        if (position < 1 || position > length) {
          System.out.println(message);
          return -1;
        }
        // 2nd use-case: the first node is removed
        if (position == 1) {
          this.head = currentNode.next;
          deletedNode = currentNode;
          currentNode = null;
          this._length--;
          return deletedNode.val;
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

        return deletedNode.val;
    }

    public int max() {
      Node currentNode = this.head;

      // Empty list or single node
      if (currentNode.next == null) {
        return currentNode.val;
      }

     int max = currentNode.val;
     while (currentNode.next != null) {
       if (currentNode.next.val > max) {
         max = currentNode.next.val;
       }
       currentNode = currentNode.next;
     }
      return max;
    }

    public int min() {
      Node currentNode = this.head;

      // Empty list or single node
      if (currentNode.next == null) {
        return currentNode.val;
      }

     int min = currentNode.val;
     while (currentNode.next != null) {
       if (currentNode.next.val < min) {
         min = currentNode.next.val;
       }
       currentNode = currentNode.next;
     }
      return min;
    }

    public int searchNodeAt(int position) {
      Node currentNode = this.head;
      int length = this._length;
      int count = 1;
      HashMap<String, String> message = new HashMap<>();
      message.put("failure","Failure: non-existent node in this list.");

      if (length == 0 || position < 1 || position > length){
        System.out.println(message.get("failure"));
        return -1;
      }
      while (count < position) {
          currentNode = currentNode.next;
          count++;
      }
      return currentNode.val;
    }

} // end of SinglyList class
