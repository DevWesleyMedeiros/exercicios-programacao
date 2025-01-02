using System;

public static class Ex0054{

    public static int num;
    public static int contUm;
    public static int contTres;
    public static int contQuatro;

    public static void Main(){

        while(num != -1)
        {
            Console.Write("Valor de tamanho para lista: ");
            num = Convert.ToInt32(Console.ReadLine());

            if (num > 100)
            {
                num = 100;
            }
            if (num < 1)
            {
                num = 1;
            }
            int[] inteiros = new int[num];

            contUm = 0;
            contTres = 0;
            contQuatro = 0;

            for (int i = 0; i < num; i++)
            {
                Console.Write("Insira o {0}° valor ", i+1 );
                inteiros[i] = Convert.ToInt32(Console.ReadLine());
                if (inteiros[i] == 1)
                {
                    Console.WriteLine("Valor 1 contado");
                    contUm++;
                }
                else if (inteiros[i] == 3)
                {
                    Console.WriteLine("Valor 3 contado");
                    contTres++;
                }
                else if (inteiros[i] == 4)
                {
                    Console.WriteLine("Valor 4 contado");
                    contQuatro++;
                }
            }
            Console.WriteLine("Valor 1 aparece {0} vezes ", contUm);
            Console.WriteLine("Valor 3 aparece {0} vezes ", contTres);
            Console.WriteLine("Valor 4 aparece {0} vezes ", contQuatro);
        }
    }
}