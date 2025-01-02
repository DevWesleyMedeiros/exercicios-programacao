using System;

class Ex0041{

    public static int codigo;
    static void Main(){

        Console.Write("Digite um valor [de 1 até 3]: ");
        codigo = Convert.ToInt32(Console.ReadLine());
        while(codigo < 1 || codigo > 3){
            Console.Write("VALOR FORA DO INTERVALO tem de ser [de 1 até 3]: ");
            codigo = Convert.ToInt32(Console.ReadLine());
        }
        switch (codigo){
            case 1:
                Console.WriteLine("Valor digitado é UM!");
                break;
            case 2:
                Console.WriteLine("Valor digitado é DOIS!");
                break;
            case 3:
                Console.WriteLine("Valor digitado é TRÊS!");
                break;
            // default:
            //     Console.WriteLine("Valor digitado fora do intervalo!");
            //     break;
        }
    }
}