public class App {
    public static class SelectionSort{

        public int[] selectionSort(int[] arr, int tamanho){
            for (int idx = 0; idx < arr.length - 1; idx++) {
                int menor = arr[idx];
                for (int j = idx + 1; j < tamanho; j++) {
                    if (arr[j] < arr[menor]) {
                        menor = arr[j];
                    }
                }
                int temp = arr[menor];
                arr[menor] = arr[idx]; 
                arr[idx] = temp;
            }
            return arr;
        }
    }
    public static void main(String[] args) throws Exception {
        
        int[] inteiros = {2, 8, 4, 6, 7, 10, 5, 1};
        int tamanhoArrayInteiros = inteiros.length - 1;

        SelectionSort selection = new SelectionSort();
        int[] sortedArray = selection.selectionSort(inteiros, tamanhoArrayInteiros);

        System.out.println("Valores" + inteiros);
        for (int num : sortedArray) {
            System.out.print(num + "");
        }
    }
}
