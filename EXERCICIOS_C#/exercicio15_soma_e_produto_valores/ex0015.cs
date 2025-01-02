using System;

public class ex0015
{
    static void Main()
    {
        int[] vetor1 = new int[5];
        int[] vetor2 = new int[5];
        int produtoEscalar = 0;

        Console.WriteLine("Valores para array 1");

        for (int i = 0; i < vetor1.Length; i++)
        {
            Console.WriteLine("Digite o {0} valor do primeiro vetor", i + 1);
            vetor1[i] = Convert.ToInt32(Console.ReadLine());
        }

        Console.WriteLine("Valores para array 2");

        for (int i = 0; i < vetor2.Length; i++)
        {
            Console.WriteLine("Digite o {0} valor do segundo vetor", i + 1);
            vetor2[i] = Convert.ToInt32(Console.ReadLine());
        }
        for (int i = 0; i < vetor1.Length; i++)
        {
            produtoEscalar += vetor1[i] * vetor2[i];
        }

        Console.WriteLine("O produto escalar dos vetores vale {0}", produtoEscalar);
    }
}
