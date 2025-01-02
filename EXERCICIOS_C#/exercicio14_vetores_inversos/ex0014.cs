using System;

public class ex0014{
    static void Main(){

        int[] valores = new int[5]{1, 2, 10, 12, 98};

        foreach (int item in valores)
        {
            Console.Write(item + " ");
        }

        Console.WriteLine("\n");

        Array.Sort(valores);
        Array.Reverse(valores);

        foreach (int itens in valores)
        {
            Console.Write(itens + " ");
        }
    }
}