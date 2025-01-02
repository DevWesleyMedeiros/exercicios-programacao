using System;

public class ex0012{
    static void Main(){
        int co, ca, hipot;

        Console.WriteLine("Valor do Cateto oposto: ");
        co = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Valor do Cateto Adjacente: ");
        ca = Convert.ToInt32(Console.ReadLine());

        hipot = TeoremaPitagoras(co, ca);

        Console.WriteLine("A hipotenusa do CO {0} e CA {1} = {2}", co, ca, hipot);

    }
    static int TeoremaPitagoras(int co, int ca){
        int hipotenusa;

        hipotenusa = (int)Math.Sqrt(Math.Pow(co, 2) + Math.Pow(ca, 2));

        return hipotenusa;
    }
}