using System;

public static class Ex0030{

    public static int valor;
    public static void Main(){

        Console.Write("Digite um valor: ");
        valor = Convert.ToInt32(Console.ReadLine());

        if (valor >= 0 && valor <= 9)
        {
            Console.WriteLine("Valor válido");
        }
        else
        {
            Console.WriteLine("Valor Inválido");
        }
    }
}