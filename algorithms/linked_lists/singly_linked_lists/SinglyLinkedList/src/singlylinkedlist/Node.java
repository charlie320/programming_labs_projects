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
public class Node {
    public int val;
    public Node next;
    
    public Node(int value) {
        this.val = value;
        this.next = null;
    }
}
