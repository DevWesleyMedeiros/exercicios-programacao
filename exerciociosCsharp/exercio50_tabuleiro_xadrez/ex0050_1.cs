using System;

public static class Ex0050_1{

    public static int bas;
    public static int exp;
    public static int resultado;

    public static void Main(){

        try
        {
            Console.Write("Digite uma valor para a base: ");
            bas = Convert.ToInt32(Console.ReadLine());
            if (bas == 0)
            {
                bas = 1;
            }
            Console.Write("Digite uma valor para a expoente: ");
            exp = Convert.ToInt32(Console.ReadLine());
            if (exp == 0)
            {
                exp = 1;
            }
            resultado = 1;
            for (int i = 0; i < exp; i++)
            {
                resultado *= bas;
            }
            Console.WriteLine("{0}^{1} = {2}", bas, exp, resultado);
        }
        catch (Exception error)
        {
            
            throw new Exception("ERRO! você precisa digitar um valor válido: " + error.Message);
        }
        finally{
            Console.WriteLine("Progrma finalizado");
        }
    }
}