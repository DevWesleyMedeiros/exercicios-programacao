using System;

public class ex0010{
    static void Main(){
        int v1, v2;

        Console.WriteLine("Digite o primeiro valor: ");
        v1 = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Digite o segundo valor valor: ");
        v2 = Convert.ToInt32(Console.ReadLine());

        DiferencaValores(v1, v2);

    }
    static void DiferencaValores(int v1, int v2){
        int diferenca;
        if (v1 < v2)
        {
            diferenca = (v1 - v2) * (-1);
            Console.WriteLine("Diferença de: {0}", diferenca);
        }
        else if (v2 < v1)
        {
            diferenca = (v2 - v1) * (-1);
            Console.WriteLine("Diferença de: {0}", diferenca);
        }
        else
        {
            Console.WriteLine("Valores são iguais");
        }
    }
}
