using System;

class ex001{
    static void Main(){
        int estoqueInicial;
        int estoqueFinal;

        estoqueInicial = 0;
        estoqueFinal = 0;

        Console.WriteLine("Calculo de estoque médio");

        Console.WriteLine("Digite o valor inicial do estoque");
        estoqueInicial = int.Parse(Console.ReadLine());
        Console.WriteLine("Digite o valor final do estoque");
        estoqueFinal = int.Parse(Console.ReadLine());

        double estoqueMedio = (estoqueInicial + estoqueFinal) / 2;

        Console.WriteLine("Você possui um estoque médio de {0}", estoqueMedio);
    }
}