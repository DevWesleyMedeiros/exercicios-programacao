using System;

public class Ex0038{

    public static int num;
    public static void Main(){

        Console.Write("Digite um valor: ");
        num = Convert.ToInt32(Console.ReadLine());

        if (num == 0)
        {
            Console.WriteLine("Valor new positivo nem negativo");
        }
        else if (num < 0)
        {
            Console.WriteLine("O valor dado é NEGATIVO!");
        }
        else
        {
            Console.WriteLine("O valor dado é POSITIVO!");
        }
    }
}