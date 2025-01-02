using System;

public class ex0013{
    static void Main(){
        var numero=0;
        // Variáveis com o var devem ser iniciadas, uma vez var usamos quando já sabemos o tipo de nossa variável
        
        Console.WriteLine("Digite um valor: ");
        numero = Convert.ToInt32(Console.ReadLine());

        ParImpar(numero);
    }
    static void ParImpar(int valor){

        if (valor % 2 == 0)
        {
            Console.WriteLine("O número que você digitou é PAR!!");
        }
        else
        {
            Console.WriteLine("O número que você digitou é IMPAR!!");
        }
    }
}