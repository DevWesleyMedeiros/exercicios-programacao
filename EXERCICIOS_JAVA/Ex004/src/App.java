import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class App {

    public class Fila {

        Queue<String> nomes = new LinkedList<>();
        int posicaoNome = 1;

        public Fila() {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Quantos nomes na sua fila? ");
            int numeroNome = scanner.nextInt();
            scanner.nextLine();

            for (int i = 0; i < numeroNome; i++) {
                System.out.print("Digite o " + posicaoNome + "° nome: ");
                String nome = scanner.nextLine();
                nomes.add(nome);
                posicaoNome++;
            }
            System.out.println("Sua FILA: " + nomes);
        }

        public void ShowNames() {
            System.out.println("Os nomes da sua fila são:");
            for (String nome : nomes) {
                System.out.println(nome);
            }
        }

        public boolean EmptyQueue() {
            if (nomes.isEmpty()) {
                System.out.println("Sua FILA está vazia. POR FAVOR, insira nomes.");
                return true;
            } else {
                System.out.println("Sua FILA contém os seguintes nomes: " + nomes);
                return false;
            }
        }

        public void Enqueue(String nome) {
            nomes.add(nome);
            System.out.println("Nome: " + nome + " adicionado à FILA.");
        }

        public void Dequeue() {
            if (EmptyQueue()) {
                System.out.println("Sua FILA está vazia.");
            } else {
                System.out.println("Nome removido: " + nomes.poll());
            }
        }

        protected void getHeadElement() {
            if (EmptyQueue()) {
                System.out.println("Sua FILA está vazia.");
            } else {
                System.out.println("O nome do topo da FILA é " + nomes.peek());
            }
        }

        protected void getBaseElement() {
            if (EmptyQueue()) {
                System.out.println("Sua FILA está vazia.");
            } else {
                String lastNameOfQueue = null;
                for (String nome : nomes) {
                    lastNameOfQueue = nome;
                }
                System.out.println("O nome do final da FILA é " + lastNameOfQueue);
            }
        }

        public void QueueSize() {
            System.out.println("Sua FILA possui " + nomes.size() + " nomes.");
        }
    }

    public static void main(String[] args) {
        App app = new App();
        Fila fila = app.new Fila();

        double option;
        Scanner scanner = new Scanner(System.in);
        System.out.println("==== OPÇÕES PARA SUA FILA ====");
        System.out.println("OPÇÃO 1: Verificar se a FILA está vazia");
        System.out.println("OPÇÃO 2: Retirar e mostrar o primeiro elemento da FILA");
        System.out.println("OPÇÃO 3: Adicionar nome ao final da FILA");
        System.out.println("OPÇÃO 4: Mostrar nomes da FILA");
        System.out.println("OPÇÃO 5: Número de elementos na FILA");
        System.out.println("OPÇÃO 6: Mostrar o TOPO da FILA");
        System.out.println("OPÇÃO 7: Mostrar a BASE da FILA");
        System.out.println("OPÇÃO 0: Fechar programa");

        while (true) {
            System.out.println("O que você quer fazer? ");
            option = scanner.nextDouble();
            scanner.nextLine();
            
            if (option == 1) {
                fila.EmptyQueue();
            } else if (option == 2) {
                fila.Dequeue();
            } else if (option == 3) {
                System.out.println("Novo nome a ser inserido ao final da FILA:");
                String novoNome = scanner.nextLine();
                fila.Enqueue(novoNome);
            } else if (option == 4) {
                fila.ShowNames();
            } else if (option == 5) {
                fila.QueueSize();
            } else if (option == 6) {
                fila.getHeadElement();
            } else if (option == 7) {
                fila.getBaseElement();
            } else if (option == 0) {
                System.out.println("Finalizando o programa...");
                break;
            } else {
                System.out.println("Opção inválida. Tente novamente.");
            }
        }
        scanner.close();
    }
}
