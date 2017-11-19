/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package singlylinkedlist;

/**
 *
 * @author Charlie
 */
public class SinglyList {
    public Node head;
    public Node node;
    public Node currentNode;
    public int _length = 0;
    public int max;
    public int min;

    // We will use no-argument constructor for all instances

    public Node add(int value) {
      node = new Node(value);
      currentNode = this.head;

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

      currentNode = this.head;
      while (currentNode.next != null) {
        System.out.println(currentNode.val);
        currentNode = currentNode.next;
      }
      System.out.println(currentNode.val);
      return this;
    }

    public int max() {
      currentNode = this.head;

      // Empty list or single node
      if (currentNode.next == null) {
        return currentNode.val;
      }

     max = currentNode.val;
     while (currentNode.next != null) {
       if (currentNode.next.val > max) {
         max = currentNode.next.val;
       }
       currentNode = currentNode.next;       
     }
      return max;
    }
    
    public int min() {
      currentNode = this.head;

      // Empty list or single node
      if (currentNode.next == null) {
        return currentNode.val;
      }

     min = currentNode.val;
     while (currentNode.next != null) {
       if (currentNode.next.val < min) {
         min = currentNode.next.val;
       }
       currentNode = currentNode.next;       
     }
      return min;
    }    
} // end of SinglyList class
