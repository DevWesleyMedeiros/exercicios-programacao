using System;

public static class Ex0058{

    public static int num;

    public static void Main(){

        Console.Write("Digite um valor para o array: ");
        num = Convert.ToInt32(Console.ReadLine());

        int[] valores = new int[num];

        for (int i = 0; i < num; i++)
        {
            Console.Write("Digite o {0}° valor ", i+1);
            valores[i] = Convert.ToInt32(Console.ReadLine());

            if (valores[i] % 2 == 0 && valores[i] % 5 == 0)
            {
                Console.WriteLine("Valor {0} é PAR! e MULTIPLO de 5", valores[i]);
            }
        }
    }
}