using System;

class Ex0026{
    static void Main(){

        int grauCelsius;
        double grauFahrenheit;

        Console.WriteLine("Conversor de temperatura CELSIUS PARA FAHRENHEIT");

        Console.Write("Digite o valor da temperatura em Celsius: ");
        grauCelsius = Convert.ToInt32(Console.ReadLine());

        grauFahrenheit = (double)(9 * grauCelsius + 160) / 5;

        Console.Write("A temperatura de {0}°Celsius vale {1}  Fahrenheit: ", grauCelsius, grauFahrenheit);
    }
}