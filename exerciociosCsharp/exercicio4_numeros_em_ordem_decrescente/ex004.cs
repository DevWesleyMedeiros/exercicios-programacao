using System;
using System.Threading;

class ex004{
    static void Main(){
        for (int i = 100; i > 0  ; i--)
        {
            if (i == 100)
            {
                Console.WriteLine("Opss!! agora sou " + i + ", mas vou perder valores");
            }
            else{
                Console.WriteLine("Agora estou diminuindo. Sou " + i);
            }
            Thread.Sleep(1000);
        }
        Console.WriteLine("Fim do programa!!");
    }
    
}