using System;

public class Ex0021{
    static void Main(){
        
        int distanciaTotalKm;
        double velocidadeMedia;
        double gastoCombustivel;
        double tempoViajem;
        double litrosPorKm;

        Console.Write("Qual a distância total da viajem em KM? ");
        distanciaTotalKm = Convert.ToInt32(Console.ReadLine());

        Console.Write("Qual foi o tempo que levou a viajem em HORAS? ");
        tempoViajem = double.Parse(Console.ReadLine());

        Console.Write("Quantos KM/L seu carro faz, na estrada? ");
        litrosPorKm = double.Parse(Console.ReadLine());

        velocidadeMedia = ((double)distanciaTotalKm / (double)tempoViajem);
        gastoCombustivel = ((double)distanciaTotalKm / (double)litrosPorKm);

        Console.WriteLine("===========================================================");

        Console.WriteLine("A velocidade média do seu carro foi de {0:F2}km/h", velocidadeMedia);
        Console.WriteLine("A distância percorrida na viajem foi de {0}km", distanciaTotalKm);
        Console.WriteLine("O tempo gasto na viajem foi de {0}Horas", tempoViajem);
        Console.WriteLine("Você precisou de {0:F2}Litros de combustível para fazer a viajem", gastoCombustivel);
    }
}