using System;

public class Ex0018
{
    static void Main()
    {
        string nome;
        int idade;
        int anoNascimento;
        string[] mulheresAprovadas = new string[5];
        int[] idadesMulheres = new int[5];
        int indexAprovadas = 0;
        int indexIdade = 0;

        for (int i = 0; i < mulheresAprovadas.Length; i++)
        {
            Console.WriteLine("Escreva seu o {0}° nome: ", i+1);
            nome = Console.ReadLine();
            Console.WriteLine("Seu ano de nascimento: ");
            anoNascimento = Convert.ToInt32(Console.ReadLine());
            idade = CalcularIdade(anoNascimento);
            if (idade >= 18 & idade <= 20)
            {
                mulheresAprovadas[indexAprovadas] = nome;
                idadesMulheres[indexIdade] = idade;
                indexAprovadas++;
                indexIdade++;
            }
            else{
                Console.WriteLine("Não poderá participar do sorteio. Não atende o quesito idade");
            }
            Console.WriteLine("=====================================");
        }
        Console.Write("Vão participar do disfile: ");
        foreach (var mulher in mulheresAprovadas)
        {
            Console.Write(" {0} ", mulher);
        }
        Console.Write("Idade das meninas: ");
        foreach (int idadeMulher in idadesMulheres)
        {
            Console.Write(" {0} ", idadeMulher);
        }
    }
    public static int CalcularIdade(int anoNascimento)
    {
        var data = DateTime.Now;
        int idade = data.Year - anoNascimento;

        return idade;
    }
}
