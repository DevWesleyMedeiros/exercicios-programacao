using System;
using System.Threading;

class ex005
{
    static void Main()
    {
        int inicio;
        int produtoNumeros = 1;

        while (true)
        {
            Console.WriteLine("Digite um número: ");
            inicio = int.Parse(Console.ReadLine());
            for (int i = inicio; i >= 1; i--)
            {   
                produtoNumeros*=i;
                Console.WriteLine("{0} X {1} = {2}",inicio, i, produtoNumeros);
                Thread.Sleep(1000);
            }
            char resposta = ' ';
            Console.WriteLine("Você quer continuar [S/N]: ");
            resposta = Console.ReadLine()[0]; // Tenho que pegar somente o primeiro caractere da string gerada pelo função ReadLine, uma vez que "char" somente aceita um caractere
            if (resposta == 'N' | resposta == 'n')
            {
                break;
            }
        }
        Console.WriteLine("Fim do programa!");
    }
}
