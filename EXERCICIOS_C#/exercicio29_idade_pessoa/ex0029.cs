using System;

public static class Ex0029{

    public static void Main(){

        int idadeEmAnos;
        int idadePessoaMeses;
        int idadePessoaDias;

        Console.Write("Digite sua idade em anos: ");
        idadeEmAnos = Convert.ToInt32(Console.ReadLine());

        idadePessoaMeses = idadeEmAnos * 12;
        idadePessoaDias = idadeEmAnos * 365;

        Console.WriteLine("Sua idade em anos é {0}", idadeEmAnos);
        Console.WriteLine("Sua idade {0} em meses", idadePessoaMeses);
        Console.WriteLine("Sua idade é {0} dias", idadePessoaDias);
    }
}