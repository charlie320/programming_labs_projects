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
public class SinglyLinkedList {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        SinglyList myList = new SinglyList();        
        myList.add(24);
        myList.add(55);
        myList.add(34);
        myList.add(20);
        myList.add(75);
        
        System.out.println(myList.max());
        System.out.println(myList.min());        
    }
    
}
