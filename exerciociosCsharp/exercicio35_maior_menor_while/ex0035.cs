using System;

class Ex0035
{
    public static int num, maior, menor, index;
    public static int[] valores = new int[100];

    static void Main()
    {
        index = 0;
        menor = int.MaxValue; 
        maior = int.MinValue;
        /*
        int.MaxValue retorna o valor máximo possível que um int pode ser, que é 2.147.483.647. Por outro lado, int.MinValue retorna o valor mínimo possível que um int pode ter, que é -2.147.483.648.
        */

        while (true) 
        // Alterado para um loop infinito, pois o controle de saída é feito com break
        {
            Console.Write("Digite um valor [DIGITE VALOR NEGATIVO PARA FINALIZAR!]: ");
            num = Convert.ToInt32(Console.ReadLine());

            if (num < 0)
            {
                Console.WriteLine("Fechando o programa...");
                break;
                // Quebra o if e consequentemente vai para o final do loop onde também vai ser quebrado
            }
            else
            {
                valores[index] = num;

                if (valores[index] > maior)
                {
                    maior = valores[index];
                }

                if (valores[index] < menor)
                {
                    menor = valores[index];
                }
            }

            index++;

            if (index == valores.Length)
            {
                Console.WriteLine("Array valores:");
                for (int i = 0; i < valores.Length; i++)
                {
                    Console.Write(" {0} ", valores[i]);
                }

                Console.WriteLine("Maior valor da coleção: {0}", maior);
                Console.WriteLine("Menor valor da coleção: {0}", menor);
                Console.WriteLine("FIM DO PROGRAMA!!");
                break;
                // Após eu quebrar o if, vem para final do loop onde vai ser quebrado
            }
        }
    }
}
