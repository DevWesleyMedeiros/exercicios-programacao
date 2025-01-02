using System;

public class Ex0028{

    public static void Main(){

        double pI = 3.14159;
        double volume;
        // double raio;
        double raioMedida;
        // double diametro;
        // double altura;
        double alturaMedida;

        Console.Write("Digitel um valor para o Raio: ");
        raioMedida = double.Parse(Console.ReadLine());
        Console.Write("Digitel um valor para o altura: ");
        alturaMedida = double.Parse(Console.ReadLine());

        // diametro = raio * 2;
        // raio = diametro / 2;
        volume = pI * (raioMedida*raioMedida) * alturaMedida;
        // altura = volume / (pI * (raio*raio));

        Console.WriteLine("Valor do volume: {0:F2}m³", volume);

    }
}