using System;

class Ex0042{

    public static string sexo;
    public static double altura;
    static void Main(){


        Console.Write("Digite o seu Sexo: ");
        sexo = Console.ReadLine().ToUpper();
        Console.Write("Digite sua altura: ");
        altura = Convert.ToDouble(Console.ReadLine());

        switch (sexo)
        {
            case "FEMENINO":
                var pesoIdealFem = (62.1 * altura) - 44.7;
                Console.WriteLine("Seu peso ideal deve ser {0:F2} Kg", pesoIdealFem);
                break;
            case "MASCULINO":
                var pesoIdealMasc = (72.7 * altura) - 58;
                Console.WriteLine("Seu peso ideal deve ser {0:F2} Kg", pesoIdealMasc);
                break;
            default:
                Console.WriteLine("Digite um sexo válido!!");
                break;
        }
    }
}
/*
No C#, char é com aspas simples - '';
No C#, string é com aspas duplas - "";
*/