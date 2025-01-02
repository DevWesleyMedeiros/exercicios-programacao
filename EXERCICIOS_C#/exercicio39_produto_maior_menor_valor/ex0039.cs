using System;

public class Ex0039{

    public static int A, B, C;
    public static int maior, menor;
    public static void Main(){

        maior = int.MinValue;
        menor = int.MaxValue;

        Console.Write("Digite um valor para A: ");
        A = Convert.ToInt32(Console.ReadLine());
        if(A > 0){
            if(A > maior){
                maior = A;
            }
            if(A < menor){
                menor = A;
            }
        }
        while(A <= 0){
            Console.WriteLine("Valor INVÁLIDO!! Digite novamente: ");
            A = Convert.ToInt32(Console.ReadLine());
            if(A > 0){
                if(A > maior){
                    maior = A;
                }
                if(A < menor){
                    menor = A;
                }
                break;
            }
        }
        Console.Write("Digite um valor para B: ");
        B = Convert.ToInt32(Console.ReadLine());
        if(B > 0){
            if(B > maior){
                maior = B;
            }
            if(B < menor){
                menor = B;
            }
        }
        while(B <= 0){
            Console.WriteLine("Valor INVÁLIDO!! Digite novamente: ");
            B = Convert.ToInt32(Console.ReadLine());
            if(B > 0){
                if(B > maior){
                    maior = B;
                }
                if(B < menor){
                    menor = B;
                }
                break;
            }
        }
        Console.Write("Digite um valor para C: ");
        C = Convert.ToInt32(Console.ReadLine());
        if(C > 0){
            if(C > maior){
                maior = C;
            }
            if(C < menor){
                menor = C;
            }
        }
        while(C <= 0){
            Console.WriteLine("Valor INVÁLIDO!! Digite novamente: ");
            C = Convert.ToInt32(Console.ReadLine());
            if(C > 0){
                if(C > maior){
                    maior = C;
                }
                if(C < menor){
                    menor = C;
                }
                break;
            }
        }
        Console.WriteLine("{0} X {1} = {2}", menor, maior, menor*maior);
        Console.WriteLine("{0} / {1} = {2:F2}", maior, menor, maior/menor);
    }
}