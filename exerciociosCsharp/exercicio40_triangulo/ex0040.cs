using System;

public class Ex0040{

    public static double ladoA, ladoB, ladoC;
    public static void Main(){

        Console.Write("Digite um valor para o lado A: ");
        ladoA = Convert.ToDouble(Console.ReadLine());
        Console.Write("Digite um valor para o lado B: ");
        ladoB = Convert.ToDouble(Console.ReadLine());
        Console.Write("Digite um valor para o lado C: ");
        ladoC = Convert.ToDouble(Console.ReadLine());

        // Condição de existência de um triângulo
        if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA)
        {
            if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC)
            {
                Console.WriteLine("Os valores dados formam um triângulo EQUILÁTERO!");
            }
            else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB)
            {
                Console.WriteLine("Os valores dados formam um triângulo ISÓCELES!");
            }
            else
            {
                Console.WriteLine("Os valores dados formam um triângulo ESCALENO!");
            }
        }
        else
        {
            Console.WriteLine("Os valores dados não formam um triângulo");
        }
        Console.WriteLine("FIM DO PROGRAMA!!");
    } 
}