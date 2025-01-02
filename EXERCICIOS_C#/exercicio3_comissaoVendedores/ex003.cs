using System;

class ex003{
    static void Main(){
        string vendedor1 = "Wesley";
        int idVendedor1 = 111;

        string vendedor2 = "Maria";
        int idVendedor2 = 222;

        string vendedor3 = "Julio";
        int idVendedor3 = 333;

        string peca1 = "Peça1";
        int idp1 = 555;
        double valorUnitarioPeca1 = 25.00; 
        int qtdeP1 = 5;

        string peca2 = "Peça2";
        int idp2 = 666;
        double valorUnitarioPeca2 = 50.00;
        int qtdeP2 = 10; 

        string peca3 = "Peça3";
        int idp3 = 777;
        double valorUnitarioPeca3 = 100.00;
        int qtdeP3 = 20;

        Console.WriteLine("{0}{1,10}{2,10:c}", peca1, idp1, valorUnitarioPeca1);
        Console.WriteLine("{0}{1,10}{2,10:c}", peca2, idp2, valorUnitarioPeca2);
        Console.WriteLine("{0}{1,10}{2,11:c}", peca3, idp3, valorUnitarioPeca3);

        var qtdeTotalVendidaP1 = (valorUnitarioPeca1*qtdeP1) - (0.95*(valorUnitarioPeca1*qtdeP1));
        var qtdeTotalVendidaP2 = (valorUnitarioPeca2*qtdeP2) - (0.95*(valorUnitarioPeca2*qtdeP2));
        var qtdeTotalVendidaP3 = (valorUnitarioPeca3*qtdeP3) - (0.95*(valorUnitarioPeca3*qtdeP3));

        Console.WriteLine("Vendedor {0} ganhou {1:c} em comissão (5% do total de peças vendidas) pela venda de {2} unidades da peça de código {3}", vendedor2, qtdeTotalVendidaP2, qtdeP2, idp2);
    }
}