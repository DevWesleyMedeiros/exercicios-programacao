import java.util.ArrayList;
import java.util.List;

public class QuickSort {

    public int[] quicksort(int[] arr) {
        if (arr.length <= 1) {
            return arr;
        }

        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>(); 

        int pivot = arr[arr.length / 2];

        for (int i = 0; i < arr.length; i++) {
            if (i == arr.length / 2) continue;
            if (arr[i] < pivot) {
                left.add(arr[i]);
            } else {
                right.add(arr[i]);
            }
        }
        int[] leftArray = quicksort(left.stream().mapToInt(i -> i).toArray());
        int[] rightArray = quicksort(right.stream().mapToInt(i -> i).toArray());

        return concatenate(leftArray, pivot, rightArray);
    }

    private int[] concatenate(int[] left, int pivot, int[] right) {
        int[] result = new int[left.length + 1 + right.length];

        System.arraycopy(left, 0, result, 0, left.length);
        result[left.length] = pivot;
        System.arraycopy(right, 0, result, left.length + 1, right.length);

        return result;
    }
}
