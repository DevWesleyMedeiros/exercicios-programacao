using System;
using System.Linq;

public static class Ex0052

{
    public static int v1;
    public static int v2;

    public static void Main()
    {
        // Valores para a 1° lista
        Console.Write("Quantos valores para a lista V1 [50 é o limite]? ");
        v1 = Convert.ToInt32(Console.ReadLine());

        if (v1 > 50)
        {
            v1 = 50;
        }
        if (v1 < 1)
        {
            v1 = 1;
        }

        int[] valoresV1 = new int[v1];
        for (int i = 0; i < v1; i++)
        {
            Console.Write("Informe o {0}° valor: ", i+1);
            valoresV1[i] = Convert.ToInt32(Console.ReadLine());
        }
        foreach(int num1 in valoresV1){
            Console.Write(" {0} ", num1);
        }
        Console.WriteLine("\n Lista com " + valoresV1.Length + " número(s)");

        // Valores para 2° lista
        Console.Write("Quantos valores para a lista V2 [50 é o limite]? ");
        v2 = Convert.ToInt32(Console.ReadLine());

        if (v2 > 50)
        {
            v2 = 50;
        }
        if (v2 < 1)
        {
            v2 = 1;
        }

        int[] valoresV2 = new int[v2];
        for (int i = 0; i < v2; i++)
        {
            Console.Write("Informe o {0} valor°: ", i+1);
            valoresV2[i] = Convert.ToInt32(Console.ReadLine());
        }
        foreach(int num2 in valoresV2){
            Console.Write(" {0} ", num2);
        }
        Console.WriteLine("\n Lista com " + valoresV2.Length + " número(s)");

        var mesmoValor = valoresV1.Intersect(valoresV2);

        if (mesmoValor.Any())
        {
            Console.WriteLine("Os valores que contém iguais em ambos as coleções é(São):");
            foreach (int n in mesmoValor)
            {
                Console.Write(" {0} ", n);
                Console.Write(" \n E estão nas posições V1 {0} e V2 {1} ", Array.IndexOf(valoresV1, n), Array.IndexOf(valoresV2, n));
            }
        }
        else
        {
            Console.Write("As coleções não possuem valores em comum");
        }
    }
}
