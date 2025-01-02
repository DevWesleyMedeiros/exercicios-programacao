using System;

class ex006{
    static void Main(){
        for (int i = 100; i <= 200; i++)
        {
            if (i % 2 != 0)
            {
                Console.WriteLine("Número ímpar: " + i);
            }
            else{
                Console.WriteLine("Número Par: " + i);
            }
        }
        Console.WriteLine("Fim do progrma!!");
    }
}