using System;

public class Ex0037{

    public static int num;
    public static int valorNegativo;
    public static int valorPositivo;
    public static void Main(){

        Console.Write("Digite um valor: ");
        num = Convert.ToInt32(Console.ReadLine());

        if (num < 0)
        {
            valorNegativo = num;
            Console.WriteLine("O valor negativo dado foi: {0}", valorNegativo);
        }
        else
        {
            valorPositivo = num;
            Console.WriteLine(num);
            Console.WriteLine("O valor positivo dado foi: {0}", valorPositivo);
        }
    }
}