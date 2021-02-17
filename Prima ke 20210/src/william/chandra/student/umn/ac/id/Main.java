package william.chandra.student.umn.ac.id;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter nth prime number: ");
        int n = scanner.nextInt();

        int number = 1;
        int count = 0;
        int i;

        while (count < n){
            number += 1;
            for (i = 2; i <= number; i++){// 2 3
                if(number % i == 0) {
                    break;
                }
            }
            if(number == i){
                count += 1;
            }
        }

        if(n == 1){
            System.out.println("The " + n + "st prime number is " + number);
        }
        else if(n == 2){
            System.out.println("The " + n + "nd prime number is " + number);
        }
        else if(n == 3){
            System.out.println("The " + n + "rd prime number is " + number);
        }
        else{
            System.out.println("The " + n + "th prime number is " + number);
        }
    }
}
