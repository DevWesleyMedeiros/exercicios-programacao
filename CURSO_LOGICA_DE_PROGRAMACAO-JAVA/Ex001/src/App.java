public class App {

    // Variável de instância contendo o nome em letras
    public char[] letrasNome = {'W', 'e', 's', 'l', 'e', 'y'};

    // Classe interna que processa o nome
    public class Nome {

        // Construtor da classe Nome
        public Nome() {
            String NomeHorizontal = "";

            // Iterando sobre as letras e convertendo para maiúsculas
            for (int idx = 0; idx < letrasNome.length; idx++) {
                // Convertendo char para String antes de usar toUpperCase
                NomeHorizontal += Character.toUpperCase(letrasNome[idx]);
            }
            // Exibe o nome em formato horizontal
            System.out.println(NomeHorizontal);
        }
    }

    // Método main que inicia a execução do programa
    public static void main(String[] args) {
        // Criando uma instância de App
        App app = new App();
        // Criando uma instância de Nome
        Nome nome = app.new Nome();
    }
}
