import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class App {

    public class Soma {

        ArrayList<Integer> numeros = new ArrayList<>();
        double somatorio = 0.0;

        public Soma() {
            Scanner scanner = new Scanner(System.in); 
            int posicaoNumero = 1;

            try {
                for (int i = 0; i < 5; i++) { 
                    System.out.println("Digite o " + posicaoNumero +"° valor:");
                    int valor = scanner.nextInt();
                    numeros.add(valor);
                    posicaoNumero++;
                }
            } catch (InputMismatchException e) {
                System.out.println("Entrada inválida! Por favor, insira um número inteiro.");
                scanner.next(); 
            }

            System.out.println("Números inseridos: " + numeros);

            for (int idx = 0; idx < numeros.size(); idx++) {
                somatorio += numeros.get(idx);
            }

            System.out.println("O somatório dos valores dados é " + somatorio);
            scanner.close(); 
        }
    }

    public static void main(String[] args) throws Exception {
        App app = new App();
        Soma soma = app.new Soma();
    }
}
