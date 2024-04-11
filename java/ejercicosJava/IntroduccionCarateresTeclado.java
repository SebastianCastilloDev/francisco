import java.util.Scanner;
public class IntroduccionCarateresTeclado {

    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("¿como te llamas?");
        String nombre = scanner.nextLine();
        System.out.println("hola "+nombre+" ¡bienvenido1");
        System.out.println("introduce tu edad");
        int edad = scanner.nextInt();
        System.out.println("tienes "+edad+" años.");
    }
}