using System;

public class Ex0019{
    public static void Main(){
        
        int valor1;
        int valor2;
        int opcao;
        double media;

        while(true){
            Console.Write("Digite um 1° valor: ");
            valor1 = Convert.ToInt32(Console.ReadLine());
            Console.Write("Digite um 2° valor: ");
            valor2 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("=====================================");

            Console.WriteLine("Digite [1] verificar se os valores são multiplos de si");
            Console.WriteLine("Digite [2] verificar se valores são PARES");
            Console.WriteLine("Digite [3] verificar se a média dos valors é igual a 7");
            Console.WriteLine("Digite [4] para SAIR DO PROGRAMA");

            Console.Write("Qual é a sua escolha?");
            opcao = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("=====================================");

            if (opcao == 1){
                if (valor1 % valor2 == 0){
                    Console.WriteLine("O valor {0} é múltiplo de {1}", valor1, valor2);
                }else{
                    Console.WriteLine("Valores não são multiplos, entre si");
                }
            }else if(opcao == 2){
                if(valor1 % 2 == 0 && valor2 % 2 == 0){
                    Console.WriteLine("Ambos os valores são PAR");
                }else{
                    if(valor2 % 2 == 0 && valor1 % 2 != 0){
                        Console.WriteLine("Só o {0} é PAR", valor2);
                    }else if(valor1 % 2 == 0 && valor2 % 2 != 0){
                        Console.WriteLine("Só o {0} é PAR", valor1);
                    }else{
                        Console.WriteLine("Ambos os valores são IMPAR");
                    }
                }
            }else if(opcao == 3){
                media = (valor1 + valor2) / 2;
                if(media == 7){
                    Console.WriteLine("A média dos valores é igual a 7");
                }else{
                    Console.WriteLine("A média dos valores é diferente de 7");
                }
            }
            else if(opcao == 4){
                Console.WriteLine("Fechando o programa...");
                break;
            }
            else{
                Console.WriteLine("OPÇÃO INVÁLIDA! tente novamente");
            }
        }
        Console.WriteLine("Programa finalizado!!");  
    }
}