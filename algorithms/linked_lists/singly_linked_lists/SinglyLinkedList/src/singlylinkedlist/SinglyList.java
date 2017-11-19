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
