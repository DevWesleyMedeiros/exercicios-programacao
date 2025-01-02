using System;

public static class Ex0033{

    public static int[] valores = new int[3];
    public static int somaValores;
    public static int quadradoValores;
    public static int numero;
    public static void Main(){

        somaValores = 0;
        quadradoValores = 1;

        for (int i = 0; i < valores.Length; i++)
        {
            Console.Write("Digite o {0}° valor: ", i+1);
            numero = Convert.ToInt32(Console.ReadLine());
            if (numero > 0 && numero <= 10)
            {
                if (numero % 2 != 0)
                {
                    valores[i] = numero;
                    quadradoValores = valores[i]*valores[i];
                    somaValores += quadradoValores;
                }
                else{
                    Console.WriteLine("Valores pares não são incluídos");
                }
            }
            else
            {
                Console.WriteLine("Valores menores que 0 e maiores que 10 não são permitidos");
            }
        }
        Console.WriteLine("A soma dos quadrados dos valores dados é igual a {0}", somaValores);
    }   
}