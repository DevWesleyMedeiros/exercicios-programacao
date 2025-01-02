using System;
using System.Linq;

public static class Ex0055{

    public static int v1;
    public static int v2;
    public static void Main(){

        Console.Write("Value to set the array number 1: ");
        v1 = Convert.ToInt32(Console.ReadLine());

        int[] values1 = new int[v1];

        for(int i = 0; i < v1; i++){

            Console.Write("Type {0}° value: ", i+1);
            values1[i] = Convert.ToInt32(Console.ReadLine());
        }
        foreach (int value1 in values1)
        {
           Console.Write(" {0} ", value1);
        }
        Console.WriteLine("\n ================================================================");

        Console.Write("Value to set the array number 2: ");
        v2 = Convert.ToInt32(Console.ReadLine());

        int[] values2 = new int[v2];

        for(int i = 0; i < v2; i++){

            Console.Write("Type {0}° value: ", i+1);
            values2[i] = Convert.ToInt32(Console.ReadLine());
        }
        foreach (int value2 in values2)
        {
           Console.Write(" {0} ", value2);
        }
        var values3 = values1.Intersect(values2);
        if (values3.Any())
        {
            Console.WriteLine("Values that contains in both arrays are(is)");
            foreach (int value3 in values3)
            {
                Console.WriteLine(" {0} ", value3);
            }
        }
    }
}