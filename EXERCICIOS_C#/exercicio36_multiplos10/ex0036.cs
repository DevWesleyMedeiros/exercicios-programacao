using System;
using System.Threading;

class Ex0036{

    static void Main(){

        for (int i = 0; i <= 100; i++)
        {
            Thread.Sleep(1000);
            if (i % 10 == 0 && i != 0)
            {
                Console.Write("Múltiplo de 10!");
                Console.Write(" {0} ", i);
                Console.WriteLine("");
            }
            else
            {
                continue;
            }
        }
    }
}