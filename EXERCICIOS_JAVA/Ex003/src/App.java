import java.util.ArrayList;
import java.util.Scanner;

public class App {

    public class Pilha {
        ArrayList<String> nomes = new ArrayList<>();
        int posicaoNome = 1;

        public Pilha() {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Quantos nomes você quer colocar? ");
            int numeroDeNomes = scanner.nextInt();
            scanner.nextLine(); 

            for (int i = 0; i < numeroDeNomes; i++) {
                System.out.print("Digite o " + posicaoNome + "° nome: ");
                String nome = scanner.nextLine();
                nomes.add(nome);
                posicaoNome++;
            }
            System.out.println("Nomes na pilha: " + nomes);
        }
        public void MostrarNomes(){
            System.out.println("Nomes na pilha:");
                for (String nome : nomes) {
                    System.out.println(nome);
                }
        }
        public boolean isEmpty() {
            if (nomes.isEmpty()) {
                System.out.println("Sua pilha está vazia.");
                return true;
            } else {
                System.out.println("Sua pilha contém os seguintes nomes: " + nomes);
                return false;
            }
        }
        public void unstack() {
            if (nomes.isEmpty()) {
                System.out.println("Sua pilha já está vazia.");
            } else {
                String nomeRemovido = nomes.remove(nomes.size() - 1);
                System.out.println("Nome removido: " + nomeRemovido);
            }
        }
        public void push(String nome) {
            nomes.add(nome);
            System.out.println("Nome " + nome + " adicionado à pilha.");
        }
        public void NumeroDeElementosPilha(){
            System.out.println("Sua pilha esta com " + nomes.size() + " Elementos");
        }
    }
    public static void main(String[] args) {
        App app = new App();
        Pilha pilha = app.new Pilha();

        double option;
        Scanner scanner = new Scanner(System.in);
        System.out.println("==== OPÇÕES PARA SUA PILHA ====");

        System.out.println("OPÇÃO 1: Verificar se a pilha esta vazia");
        System.out.println("OPÇÃO 2: Desempilhar");
        System.out.println("OPÇÃO 3: Empilhar");
        System.out.println("OPÇÃO 4: Mostrar nome na pilha");
        System.out.println("OPÇÃO 5: Número de elementos na pilha");
        System.out.println("OPÇÃO 0 Fechar programa");

        while (true) {
            System.out.println("O que você quer fazer? ");
            option = scanner.nextDouble();
            scanner.nextLine(); 

            if (option == 1) {
                pilha.isEmpty();
            }else if(option == 2){
                pilha.unstack();
            }else if(option == 3){
                String novoNome;
                System.out.println("Qual é o novo nome? ");
                novoNome = scanner.nextLine();
                pilha.push(novoNome);
            }else if(option == 4){
                pilha.MostrarNomes();
            }else if(option == 5){
                pilha.NumeroDeElementosPilha();
            }else if (option == 0){
                System.out.println("Finalizando o programa ...");
                break;
            }else{
                System.out.println("Opção inválida. Tente novamente");
            }
        }
    }
}
