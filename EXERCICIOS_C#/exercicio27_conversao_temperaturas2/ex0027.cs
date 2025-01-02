using System;

class Ex0027{
    
    public static int temperaturaEmCelsius;
    public static int temperaturaFahrenheit;
    public static int temperaturaCelsius;
    static void Main(){

        Console.Write("Digite uma temparatura em Fahrenheit: ");
        temperaturaFahrenheit = Convert.ToInt32(Console.ReadLine());

        temperaturaCelsius = conversorFahrenheit(temperaturaFahrenheit);

        Console.WriteLine("A temperatura de {0} Fahrenheit vale {1}°Celsius", temperaturaFahrenheit, temperaturaCelsius);

    }

    public static int conversorFahrenheit(int temperaturaFahrenheit){


        temperaturaEmCelsius = (temperaturaFahrenheit - 32) * 5 / 9;

        return temperaturaEmCelsius;
    }
}