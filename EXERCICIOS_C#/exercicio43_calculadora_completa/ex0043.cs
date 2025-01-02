using System;

public static class Operacoes
{
    public static int Soma(params int[] valores)
    {
        int somador = 0;
        for (int i = 0; i < valores.Length; i++)
        {
            somador += valores[i];
        }
        Console.Write(" A soma dos valores dados é ");
        return somador;
    }

    public static int Subtracao(params int[] valores)
    {
        int subtracao = valores[0];
        for (int i = 1; i < valores.Length; i++)
        {
            subtracao -= valores[i];
        }
        Console.Write(" A subtração dos valores dados é ");
        return subtracao;
    }

    public static int Multiplicacao(params int[] valores)
    {
        int multiplicador = 1;
        for (int i = 0; i < valores.Length; i++)
        {
            multiplicador *= valores[i];
        }
        Console.Write(" O produto dos valores dados é ");
        return multiplicador;
    }

    public static int Divisao(params int[] valores)
    {
        int divisor = valores[0];

        for (int i = 1; i < valores.Length; i++)
        {
            if (valores[i] == 0)
            {
                valores[i] = 1;
            }
            divisor /= valores[i];
        }
        Console.Write(" A divisão dos valores dados é ");
        return divisor;
    }
    public static string binario(int numero){

        int bin = numero;

        string numeroBinario = Convert.ToString(bin, 2);
        Console.Write("O valor {0} em binário é ", bin);

        return numeroBinario;
    }
    public static string Octal(int numero){

        int oct = numero;

        if (oct < 0){
            oct = oct * (-1);
        }
        if (oct < 8){
            return oct.ToString();
        }else{
            int resto;
            int quociente;
            quociente = oct / 8;
            resto = oct % 8;

            return Octal(quociente) + resto.ToString();
        }
    }
}

public class Calculadora
{
    public static string continuar;
    public static void Main()
    {
        Console.WriteLine("BEM VINDO A CALCULADORA MALUCA!!");

        while (true)
        {
            Console.WriteLine("Digite [1] para SOMAR valores");
            Console.WriteLine("Digite [2] para SUBTRAIR valores");
            Console.WriteLine("Digite [3] para MULTIPLICAR valores");
            Console.WriteLine("Digite [4] para DIVIDIR valores");
            Console.WriteLine("Digite [5] converter para binário");
            Console.WriteLine("Digite [6] converter para octal");

            Console.Write("Qual é a sua opção: ");
            int opcao = Convert.ToInt32(Console.ReadLine());

            if (opcao >= 1 && opcao <= 4)
            {
                int quantidadeValores;
                Console.Write("Quantos valores você quer verificar? ");
                quantidadeValores = Convert.ToInt32(Console.ReadLine());

                int[] valores = new int[quantidadeValores];
                for (int i = 0; i < quantidadeValores; i++)
                {
                    Console.Write("Digite o {0}° valor: ",i+1);
                    valores[i] = Convert.ToInt32(Console.ReadLine());
                }

                switch (opcao)
                {
                    case 1:
                        Console.WriteLine(Operacoes.Soma(valores));
                        break;
                    case 2:
                        Console.WriteLine(Operacoes.Subtracao(valores));
                        break;
                    case 3:
                        Console.WriteLine(Operacoes.Multiplicacao(valores));
                        break;
                    case 4:
                        Console.WriteLine(Operacoes.Divisao(valores));
                        break; 
                }
            }
            else if(opcao == 5)
            {

                int numero;
                Console.Write("Digite um valor: ");
                numero = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine(Operacoes.binario(numero));
            }
            else if (opcao == 6)
            {
                int numero;
                Console.Write("Digite um valor: ");
                numero = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine(Operacoes.Octal(numero));
            }
            else
            {
                Console.WriteLine("Opção inválida. Tente novamente.");
            }

            Console.Write("Você quer continuar [S - sim / N - não]? ");
            continuar = Console.ReadLine().ToUpper();

            while (continuar != "N" && continuar != "S")
            {
                Console.Write("OPÇÃO INVÁLIDA [S - sim / N - não]? ");
                continuar = Console.ReadLine().ToUpper();
            }

            if (continuar == "N")
            {
                break;
            }
        }
    }
}
