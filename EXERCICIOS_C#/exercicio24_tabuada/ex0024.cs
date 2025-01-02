using System;

public class Ex0024{

    public static int num;

    static void Main(){

        Console.Write("A tabuado de qual valor? ");
        num = Convert.ToInt32(Console.ReadLine());

        for (int i = 0; i <= 10; i++)
        {
            Console.WriteLine("{0} X {1} = {2}", num, i, num*i);
        }

        Console.WriteLine("Fim do programa!!");
    }
}