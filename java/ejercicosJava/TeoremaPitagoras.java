import java.util.Scanner;

public class TeoremaPitagoras {

    public static void main(String args[]) {
        // pedir datos de entrada
        System.out.println("teorema de pitagoras");

        Scanner scanner = new Scanner(System.in);
        System.out.println("ingresa un numero");
        int a = scanner.nextInt();

        Scanner scanner2 = new Scanner(System.in);
        System.out.println("ingrese el otro numero");
        int b = scanner2.nextInt();

        // calculo

        double c = Math.pow(Math.pow(a, 2) + Math.pow(b, 2), 0.5);

        // resultado
        System.out.println("c = " + c);

    }
}