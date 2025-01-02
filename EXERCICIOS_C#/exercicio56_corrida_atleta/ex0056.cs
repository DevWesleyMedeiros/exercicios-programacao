using System;

public static class Ex0056{

    public static int voltas;
    public static double mediaTempVoltas;
    public static int somaTempVoltas;
    public static int contTempVoltas;
    public static int minTempo;
    public static int posMinTemp;
    public static void Main(){

        Console.Write("Número de voltas do atleta: ");
        voltas = Convert.ToInt32(Console.ReadLine());

        contTempVoltas = 0;
        somaTempVoltas = 0;
        minTempo = int.MaxValue;

        int[] tempoVoltas = new int[voltas];
        for (int i = 0; i < voltas; i++)
        {
            Console.Write("Tempo da {0}° volta em minutos: ", i+1);
            tempoVoltas[i] = Convert.ToInt32(Console.ReadLine());

            if (tempoVoltas[i] < minTempo)
            {
                minTempo = tempoVoltas[i];
                posMinTemp = Array.IndexOf(tempoVoltas, minTempo);
            }

            somaTempVoltas += tempoVoltas[i];
            contTempVoltas++;
        }
        Console.WriteLine("O melhor tempo de volta foi {0} minutos na volta {1}", minTempo, posMinTemp);

        foreach (int tempoVolta in tempoVoltas)
        {
            Console.WriteLine(" {0} minutos", tempoVolta);
        }
        mediaTempVoltas = (double)somaTempVoltas / (double)contTempVoltas;
        // passo para double para não haver médias negativas em caso de tempo fracionário.

        Console.WriteLine("A média de tempo das voltas foi de {0} minutos", mediaTempVoltas);
    }
}