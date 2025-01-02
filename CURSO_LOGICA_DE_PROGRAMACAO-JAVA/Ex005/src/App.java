import java.util.Arrays;

public class App {
    
    public static int buscaBinaria(int[] arrayBase, int valorBuscado) {

        int inicio = 0;
        Arrays.sort(arrayBase);
        int fim = arrayBase.length - 1;

        while (inicio <= fim) {
            int pivo = (inicio + fim) / 2; 
            int palpite = arrayBase[pivo];
            if (valorBuscado == palpite) {
                System.out.println("O valor procurado está na posição " + pivo);
                return  pivo;
            } else if (valorBuscado > palpite) {
                inicio = pivo - 1;
            }else{
                fim = pivo + 1;
            }
        }
        System.out.println("O valor " + valorBuscado + "não foi encontrado");
        return -1;
    }
    public static void main(String[] args) throws Exception {

        int[] valores = {50, 25, 10, 9, 12, 1, 7, 15};
        int valorBuscado = 10;
        buscaBinaria(valores, valorBuscado);
    }
}