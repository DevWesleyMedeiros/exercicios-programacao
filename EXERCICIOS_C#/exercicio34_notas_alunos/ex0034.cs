using System;

public static class Ex0034{
    public static double nota;
    public static int index;
    public static double somaNotasAlunos;
    public static int contAlunos;
    public static double mediaAlunos;
    public static char opcao;
    public static void Main(){

        index = 0;
        mediaAlunos = 0;
        somaNotasAlunos = 0;
        contAlunos = 0;

        while (true)
        {
            Console.Write("Digite a nota do {0}° aluno: ", index + 1);
            nota = Convert.ToDouble(Console.ReadLine());
            somaNotasAlunos += nota;
            contAlunos++;
            index++;

            Console.Write("Continuar inserindo notas [S/N]? ");
            opcao = char.Parse(Console.ReadLine().ToUpper());
            while(opcao != 'S' && opcao != 'N'){
                Console.Write("POR FAVOR!! digitar uma opção válida [S/N]? ");
                opcao = char.Parse(Console.ReadLine().ToUpper());
            }
            if (opcao == 'N')
            {
                break;
            }
        }
        mediaAlunos = somaNotasAlunos / (double)contAlunos;

        Console.WriteLine("Ao todo são {0} nota(s)", contAlunos);
        Console.WriteLine("A soma das notas deles vale {0}", somaNotasAlunos);
        Console.WriteLine("A média da(s) nota(s) nesta turma é {0:F2}", mediaAlunos);
    }
}