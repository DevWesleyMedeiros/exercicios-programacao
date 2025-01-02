using System;
using System.Threading;

namespace AllMethods
{
    public static class Convertions
    {
        public static double BodyMassIndex(double weight, double height)
        {
            double massWeight = weight;
            double personHeight = height;
            double BMI = massWeight / (height * height);

            if (BMI <= 18.5)
            {
                Console.WriteLine("You are underweight");
                return BMI;
            }
            else if (BMI > 18.5 && BMI <= 24.9)
            {
                Console.WriteLine("You are normal weight");
                return BMI;
            }
            else if (BMI >= 25 && BMI <= 29.9)
            {
                Console.WriteLine("You are overweight");
                return BMI;
            }
            else if (BMI >= 30 && BMI <= 34.9)
            {
                Console.WriteLine("You are obesity class I");
                return BMI;
            }
            else if (BMI >= 35 && BMI <= 39.9)
            {
                Console.WriteLine("You are obesity class II");
                return BMI;
            }
            else
            {
                Console.WriteLine("You are obesity class III");
                return BMI;
            }
        }
        public static int CelsiusIntoFahrenheit(int CelsiusDegree)
        {
            int CelsiusTemperature = CelsiusDegree;
            int degreeFahrenheit = (9 * CelsiusTemperature + 160) / 5;

            Console.WriteLine("{0}° degree(s) Celsius into Fahrenheit is", CelsiusTemperature);

            return degreeFahrenheit;
        }
        public static int FahrenheitIntoCelsius(int FahrenheitDegree)
        {
            int FahrenheitTemperature = FahrenheitDegree;
            int degreeCelsius = (FahrenheitTemperature - 32) * 5 / 9;

            Console.WriteLine("{0}° degree(s) Fahrenheit into Celsius is", degreeCelsius);

            return degreeCelsius;
        }
    }
    namespace Default
    {
        public static class Ex0051
        {
            public static int option;

            public static void Main()
            {
                while (option != 0)
                {
                    try
                    {
                        Console.WriteLine("Type 1 to see your BMI");
                        Console.WriteLine("Type 2 to convert Celsius into Fahrenheit");
                        Console.WriteLine("Type 3 to convert Fahrenheit into Celsius");
                        Console.WriteLine("Type 0 to leave out the program");

                        option = Convert.ToInt32(Console.ReadLine());

                        switch (option)
                        {
                            case 1:
                                double weight;

                                Console.WriteLine("Type here your current weight: ");
                                weight = Convert.ToDouble(Console.ReadLine());

                                Console.WriteLine(Convertions.BodyMassIndex(weight, weight));
                                break;
                            case 2:
                                int degreeCelsius;

                                Console.WriteLine("Type here Celsius degree: ");
                                degreeCelsius = Convert.ToInt32(Console.ReadLine());

                                Console.WriteLine(Convertions.CelsiusIntoFahrenheit(degreeCelsius));
                                break;
                            case 3:
                                int degreeFahrenheit;

                                Console.WriteLine("Type here Fahrenheit degree: ");
                                degreeFahrenheit = Convert.ToInt32(Console.ReadLine());

                                Console.WriteLine(Convertions.FahrenheitIntoCelsius(degreeFahrenheit));
                                break;
                        }
                        if (option == 0)
                        {
                            Console.WriteLine("I'm leaving..., BYE!");
                            Thread.Sleep(2000);
                        }
                    }
                    catch (Exception)
                    {
                        throw new Exception("You need to type a valid Number");
                    }
                    finally
                    {
                        Console.WriteLine("...");
                    }
                }
            }
        }
    }
}
