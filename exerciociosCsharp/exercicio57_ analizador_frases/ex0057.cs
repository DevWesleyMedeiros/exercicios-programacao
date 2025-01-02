using System;

public static class Ex0057
{
    public static string frase;
    public static void Main()
    {
        Console.Write("Digite uma frase de menos de 50 caracteres: ");
        frase = Console.ReadLine().Trim();

        if (frase.Length > 50 || frase.Length == 0)
        {
            Console.WriteLine("Não posso analisar a frase dada, pois é muito longa ou sem caracteres");
        }
        else
        {
            int contEspacosBrancos = 0;
            for (int i = 0; i < frase.Length; i++)
            {
                if (frase[i] == ' ')
                {
                    contEspacosBrancos++;
                }
            }

            Console.WriteLine("A frase possui {0} espaços em branco ", contEspacosBrancos);

            var fraseSemEspacos = frase.Split(' ');
            string[] palavras = new string[fraseSemEspacos.Length];

            foreach (string palavra in palavras)
            {
                Console.Write(palavra);
            }
        }
    }
}
