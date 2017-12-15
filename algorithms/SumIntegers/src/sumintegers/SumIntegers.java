/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sumintegers;
import java.util.Scanner;
/**
 *
 * @author Charlie
 */
public class SumIntegers {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int num = in.nextInt();
        int sum = 0;
        for (int i = num; i > 0; i--) {
            if (i % 5 == 0 || i % 7 == 0) {
                continue;
            } else {
                sum += i;
            }            
        }
        System.out.println(sum);
    }
    
}
