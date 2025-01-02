using System;

class ex008{
    static void Main(){
        int valor;

        Console.WriteLine("Digite um valor: ");
        valor = Convert.ToInt32(Console.ReadLine());

        if (valor >= 0)
        {
            Console.WriteLine("Módulo de {0} e +{0}", valor);
        }
        else
        {
            int moduloValor = valor * (-1);
            Console.WriteLine("O módulo de {0} é {1}", valor, moduloValor);
        }
    }
}