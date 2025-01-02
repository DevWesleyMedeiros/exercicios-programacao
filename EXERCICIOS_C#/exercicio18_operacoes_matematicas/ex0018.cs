using System;

public class Ex0018{
    public static void Main(){

        int opcoa;
        int soma;
        int subtracao;
        int multiplicacao;
        double dividir;
        int valor1;
        int valor2;

        inicio: 

        Console.WriteLine("Digite [1] para SOMAR 2 valores valores");
        Console.WriteLine("Digite [2] para SUBTRAIR 2 valores valores");
        Console.WriteLine("Digite [3] para MULTIPLICAR 2 valores valores");
        Console.WriteLine("Digite [4] para DIVIDIR 2 valores valores");

        opcao = Convert.ToInt32(Console.ReadLine());

        switch (opcao)
        {
            case 1:
                Console.Write("Digite o 1° valor: ");
                valor1 = Convert.ToInt32(Console.ReadLine());
                Console.Write("Digite o 2° valor: ");
                valor2 = Convert.ToInt32(Console.ReadLine());
                soma = valor1 + valor2;
                Console.Write("{0} + {1} = {2}", valor1, valor2, soma);
                break;
            case 2:
                Console.Write("Digite o 1° valor: ");
                valor1 = Convert.ToInt32(Console.ReadLine());
                Console.Write("Digite o 2° valor: ");
                valor2 = Convert.ToInt32(Console.ReadLine());
                subtracao = (valor1 - valor2) * (-1);
                Console.Write("{0} - {1} = {2}", valor1, valor2, subtracao);
                break;
            case 3:
                Console.Write("Digite o 1° valor: ");
                valor1 = Convert.ToInt32(Console.ReadLine());
                Console.Write("Digite o 2° valor: ");
                valor2 = Convert.ToInt32(Console.ReadLine());
                multiplicacao = valor1 * valor2;
                Console.Write("{0} X {1} = {2}", valor1, valor2, multiplicacao);
                break;
            case 4:
                Console.Write("Digite o 1° valor: ");
                valor1 = Convert.ToInt32(Console.ReadLine());

                valor1 = valor1 == 0 ? 1 : valor1;

                Console.Write("Digite o 2° valor: ");
                valor2 = Convert.ToInt32(Console.ReadLine());

                valor2 = valor2 == 0 ? 1 : valor2;
                
                dividir = (double)valor1 / (double)valor2;
                Console.Write("{0} / {1} = {2}", valor1, valor2, dividir);
                break;
            default:
                opcoa = -1;
                break;
        }
        if(opcoa < 0){
            Console.WriteLine("Valor fora do intervalo");
            goto inicio;
        }
    }
}