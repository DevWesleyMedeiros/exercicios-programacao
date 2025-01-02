public class App {
    public static void main(String[] args) throws Exception {
        
        QuickSort sorter = new QuickSort();

        int[] value = {30, 60, 90, 40, 80, 20, 50, 70, 100, 10};
        int[] sortedArray = sorter.quicksort(value);

        for (int num : sortedArray) {
            System.out.println(num);
        }
    }
}
