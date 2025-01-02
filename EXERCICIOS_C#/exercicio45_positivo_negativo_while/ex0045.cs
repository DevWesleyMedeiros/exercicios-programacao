using System;

public class Ex0045{

    public static char opcao;
    public static int num;
    static void Main(){

        
        while (opcao != 'S')
        {
            Console.Write("Digite um valor: ");
            num = Convert.ToInt32(Console.ReadLine());

            if(num % 2 == 0){
                Console.WriteLine("O valor é PAR! e ");
                if(num < 0){
                    Console.WriteLine("O Valor é NEGATIVO!");
                }else{
                    Console.WriteLine("O Valor é POSITIVO!");
                }
            }else if (num % 2 != 0){
                Console.WriteLine("O valor é IMPAR! e ");
                if(num > 0){
                   Console.WriteLine(" O Valor é POSITIVO!"); 
                }else{
                    Console.WriteLine(" O Valor é NEGATIVO!");
                }
            }else{
                Console.WriteLine("Valor nem NEGATIVO nem POSITIVO nem PAR nem IMPAR");
            }
            Console.WriteLine("Deseja encerrar o programa [Sim - S]? ");
            opcao = Convert.ToChar(Console.ReadLine().ToUpper());
            if(opcao == 'S'){
                break;
            }
        }
    }
}