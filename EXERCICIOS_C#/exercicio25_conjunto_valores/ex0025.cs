using System;

public class Ex0025
{
    public static char opcao;
    // Variáveis com CHAR,deve usar apenas uma aspa
    public static int i;
    public static int num;
    public static int somaPares;
    public static int somaImpares;
    public static int indexSomaPar;
    public static int indexSomaImpares;
    public static int[] valores = new int[1000];
    public static int[] valoresImpares = new int[1000];
    public static int[] valoresPares = new int[1000];

    static void Main()
    {
        somaPares = 0;
        somaImpares = 0;
        indexSomaPar = 0;
        indexSomaImpares = 0;
        i = 0;
        while (true)
        {
            Console.Write("Digite o {0}° valor: ", i + 1);
            num = Convert.ToInt32(Console.ReadLine());
            valores[i] = num;

            if (num % 2 == 0)
            {
                valoresPares[indexSomaPar] = num;
                somaPares += num;
                indexSomaPar++;
            }
            else
            {
                valoresImpares[indexSomaImpares] = num;
                somaImpares += num;
                indexSomaImpares++;
            }
            i++;

            Console.Write("Você quer continuar [S - sim / N - não]? ");
            opcao = char.Parse(Console.ReadLine().ToUpper());

            while (opcao != 'S' && opcao != 'N')
            {
                Console.Write("Digite uma OPÇÃO VÁLIDA!! [S - sim / N - não]? ");
                opcao = char.Parse(Console.ReadLine().ToUpper());
                // ToUpper - passa uma uma variável string ou char para uppercase
            }

            if (opcao == 'N')
            {
                break;
            }
        }
        Console.WriteLine("============================================================================");

        Console.Write("Valores: ");
        for (int j = 0; j < i; j++)
        // j itera somente em valores maiores que 0 o que faz com que tais valores não aparecam caso não colocados nada nas posições faltantes 
        {
            Console.Write(" {0} ", valores[j]);
        }
        Console.WriteLine("A soma dos valores total é DESC");

        Console.Write("Valores Pares: ");
        for (int j = 0; j < indexSomaPar; j++)
        {
            Console.Write(" {0} ", valoresPares[j]);
        }
        Console.WriteLine("A soma dos valores PARES é {0}", somaPares);

        Console.Write("Valores Ímpares: ");
        for (int j = 0; j < indexSomaImpares; j++)
        {
            Console.Write(" {0} ", valoresImpares[j]);
        }
        Console.WriteLine("A soma dos valores ÍMPARES é {0}", somaImpares);

        Console.WriteLine("FIM DO PROGRAMA!!");
    }
}
