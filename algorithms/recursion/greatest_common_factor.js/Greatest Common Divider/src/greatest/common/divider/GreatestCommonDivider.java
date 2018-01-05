/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package greatest.common.divider;
import java.util.Scanner;

/**
 *
 * @author Charlie
 */
public class GreatestCommonDivider {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        int a;
        int b;
        
        Scanner s = new Scanner(System.in);
        System.out.println("Please enter the first number:  ");
        a = s.nextInt();
        System.out.println("Please enter the second number:  ");
        b = s.nextInt();
        
        System.out.println(r_gcd(a,b));

    }
    public static int r_gcd(int a, int b) {
        System.out.format("%d, %d\n",a,b);
        if (a % b == 0) {
            return b;
        } else {
            return r_gcd(b, a % b);
        }
    }
}
