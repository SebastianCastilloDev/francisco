/*escriba 1 para consultar saldo
 * escriba 2 para ingressar dinero
 * escriba 3 para sacar dinero
 * escriba 4 para conultar sus ultimos movientos
 */

import java.util.Scanner;

public class interfaz {

    public static void main(String args[]) {
        System.out.println("Interfaz cajero automatico");
        System.out.println("elija una de las siguiente");
        System.out.println("\tingresa el numero 1 para consultar saldo");
        System.out.println("\tingresa el numero 2 para ingresar dinero");
        System.out.println("\tingresa el numero 3 para sacar dinero");
        System.out.println("\tingresa el numero 4 para sacar dinero");

        Scanner scanner = new Scanner(System.in);
        int option = scanner.nextInt();
        System.out.println("la opcion escogida es " + option);

    }
}