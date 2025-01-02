using System;

public static class Ex0059{

    public static string frase;
    public static void Main(){

        Console.Write("Digite uma frase: ");
        frase = Console.ReadLine().ToUpper();

        char[] vogais = frase.ToCharArray();
        // ToCharArray - pega frase e transforma em um array de caracteres com as letras da frase. 
        
        for (int i = 0; i < vogais.Length; i++)
        {
            if (vogais[i] == 'A' || vogais[i] == 'E' || vogais[i] == 'I' || vogais[i] == 'O' || vogais[i] == 'U')
            {
                Console.Write(" {0} ", vogais[i]);
            }
        }
    }
}