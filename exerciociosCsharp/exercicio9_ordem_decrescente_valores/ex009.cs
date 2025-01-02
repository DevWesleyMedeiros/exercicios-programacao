using System;

class ex009{
    static void Main(){
        int[] arrayValores = new int[3];

        for (int i = 0; i < arrayValores.Length; i++)
        {
            arrayValores[i] = Convert.ToInt32(Console.ReadLine());
        }

        Array.Sort(arrayValores);
        Array.Reverse(arrayValores);
        // Ambos são métodos "void", ou seja, não retornam nada. Sendo assim não se atribui a variáveis

        Console.WriteLine("Valores em ordem Decrescente: ");

        foreach(var valores in arrayValores)
        {
            Console.WriteLine(valores);
        }
    }
}