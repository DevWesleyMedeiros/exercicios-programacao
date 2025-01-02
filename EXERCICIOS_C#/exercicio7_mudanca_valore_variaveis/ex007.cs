using System;

class ex007{
    static void Main(){
        int a;
        int b;

        a = 10;
        b = 13;
        /*
        Abaixo a mudança de valores nas variáveis a e b assumindo os valores um do outro
        a = b;
        b = a;
        */

        Console.WriteLine("A = {0} e B = {1}", a, b);

        Console.WriteLine("Digite um valor novo para A");
        a = int.Parse(Console.ReadLine());
        b = a;

        Console.WriteLine("Digite um valor novo para B");
        b = int.Parse(Console.ReadLine());
        a = b;

        Console.WriteLine("A = {0} e B = {1}", a, b);
        Console.WriteLine("B = {0} e A = {1}", b, a);
    }
}