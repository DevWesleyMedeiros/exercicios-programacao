using System;

class Ex002{
    static void Main(){

        double valorCotacao;
        double qtdeDolares;

        Console.WriteLine("Digite o valor da cotação atual do dolar: ");

        valorCotacao = Convert.ToDouble(Console.ReadLine());
        // Convert.ToDouble - usado para conversões de string para double. receber doubles pelo console

        Console.WriteLine("Digite o valor em dolares: ");
        qtdeDolares = Convert.ToDouble(Console.ReadLine());

        var conversaoValorReais = (qtdeDolares * valorCotacao);

        Console.WriteLine("{0} dolares em Reais vale R${1:C0} reais", qtdeDolares, conversaoValorReais);
    }
}