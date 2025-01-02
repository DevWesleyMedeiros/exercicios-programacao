using System;
using System.Threading;

namespace Verificador
{
    public static class VerificadorValor
    {
        public static int ValorMaior(params int[] valores)
        {
            int maior = int.MinValue;

            for (int i = 0; i < valores.Length; i++)
            {
                if (valores[i] > maior)
                {
                    maior = valores[i];
                }
            }
            Console.WriteLine("O maior valor entre os valores dados é " + maior);
            return maior;
        }

        public static int ValorMenor(params int[] valores)
        {
            int menor = int.MaxValue;

            for (int i = 0; i < valores.Length; i++)
            {
                if (valores[i] < menor)
                {
                    menor = valores[i];
                }
            }
            Console.WriteLine("O menor valor entre os valores dados é " + menor);
            return menor;
        }
    }

    namespace Padrao
    {
        public static class Ex0049
        {
            public static int quantidadeValores;
            public static string opcao;

            public static void Main()
            {
                while (opcao != "N")
                {
                    try
                    {
                        Console.Write("Quantos valores você quer verificar: ");
                        quantidadeValores = Convert.ToInt32(Console.ReadLine());

                        int[] arrayInteiros = new int[quantidadeValores];
                        for (int i = 0; i < quantidadeValores; i++)
                        {
                            Console.Write("Digite o {0}° valor: ", i + 1);
                            arrayInteiros[i] = Convert.ToInt32(Console.ReadLine());
                        }

                        Console.WriteLine("Maior valor: " + Verificador.VerificadorValor.ValorMaior(arrayInteiros));
                        Console.WriteLine("Menor valor: " + Verificador.VerificadorValor.ValorMenor(arrayInteiros));

                        Console.Write("Você quer continuar [Sim - S / Não - N]?");
                        opcao = Console.ReadLine().ToUpper();
                        while (opcao != "S" && opcao != "N" && opcao == "")
                        {
                            Console.WriteLine("Você quer continuar [Sim - S / Não - N]?");
                            opcao = Console.ReadLine().ToUpper();
                        }
                    }
                    catch (Exception erro)
                    {
                        Console.WriteLine("ERRO: {0}", erro.Message);
                        Console.WriteLine("ERRO: {0}", erro.GetType());
                    }
                    finally
                    {
                        Console.WriteLine("...");
                        Thread.Sleep(2000);
                    }
                }
            }
        }
    }
}

