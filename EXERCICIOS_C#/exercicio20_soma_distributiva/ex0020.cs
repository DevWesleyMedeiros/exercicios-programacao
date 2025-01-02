using System;

public class Ex0020{
    static void Main(){
        int a, b, c, d, somaProdutoValores;

        Console.Write("Digite um valor para 'a': ");
        a = Convert.ToInt32(Console.ReadLine());
        Console.Write("Digite um valor para 'b': ");
        b = Convert.ToInt32(Console.ReadLine());
        Console.Write("Digite um valor para 'c': ");
        c = Convert.ToInt32(Console.ReadLine());
        Console.Write("Digite um valor para 'd': ");
        d = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("=======================================");

        somaProdutoValores = somaDistributiva(a, b, c, d);

        Console.WriteLine("O resultado da soma e produto dos valoes dados é {0}", somaProdutoValores);

    }
    public static int somaDistributiva(int a, int b, int c, int d){
        int somaProduto;
        
        somaProduto = (a + b) * (a + c) * (a + d) * (b + c) * (b + d) * (c + d);
        return somaProduto;
    }
}