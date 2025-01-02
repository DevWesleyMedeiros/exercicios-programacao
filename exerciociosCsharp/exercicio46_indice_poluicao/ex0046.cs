using System;

public static class Ex0046{

    public static double indicePoluicao;
    public static char opcao;

    public static void Main(){

        while(opcao != 'S'){

            Console.Write("Qual o índice de poluição em %? ");
            indicePoluicao = Convert.ToDouble(Console.ReadLine());
            indicePoluicao = indicePoluicao / 100;

            if(indicePoluicao < 0.05){
                indicePoluicao = 0.05;
                Console.WriteLine("Índice de {0:P} está no nível adequado", indicePoluicao);
            }
            if(indicePoluicao >= 0.05 && indicePoluicao <= 0.25){
                Console.WriteLine("O índice de poluição {0:P} está no nível adequado", indicePoluicao);
            }else{
                if(indicePoluicao <= 0.30){
                    Console.WriteLine("O índice de poluição de {0:P} está muito elevado para as empresas do grupo 1. Elas deve supender suas atividades imediatamente", indicePoluicao);
                }else if(indicePoluicao <= 0.40){
                    Console.WriteLine("O índice de poluição de {0:P} está muito elevado para as empresas do grupo 1 e do grupo 2. Elas deve supender suas atividades imediatamente", indicePoluicao);
                }else{
                    Console.WriteLine("O índice de poluição de {0:P} está muito elevado. Todas as empresas devem supender suas atividades imediatamente", indicePoluicao);
                }
            }
            Console.Write("Você quer continuar [S - sim]? ");
            opcao = char.Parse(Console.ReadLine().ToUpper());
            if(opcao == 'S')
                break;
        }
    }
}
 


