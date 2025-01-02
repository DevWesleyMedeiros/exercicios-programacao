using System;

public static class Operacoes{

    public static int num; 

    public static void Main(){

        Console.Write("Digite um valor: ");
        num = Convert.ToInt32(Console.ReadLine());
        var numText = Convert.ToString(num);

        Console.WriteLine(numText);

    }
}