 using System;

 public class Ex0022{
    static void Main(){

        double nota;
        double mediaNotas;
        double notaRecuperacao;
        int somaNotas = 0;
        int contNotas = 0;
        
        for (int i = 0; i < 4; i++)
        {
            Console.Write("Digite a {0}° nota: ", i+1);
            nota = double.Parse(Console.ReadLine());
            
            somaNotas += (int)nota;

            // Maneira correta, pois estamos tratando um nota por iterações e não um array de notas

            // somaNotas += nota[i] - Usamos assim quando for um array de notas

            contNotas++;
        }
        mediaNotas = (double)somaNotas / (double)contNotas;
        if (mediaNotas >= 7)
        {
            Console.WriteLine("O aluno foi APROVADO!!");
        }else if (mediaNotas < 7){
            Console.Write("Nota da Recuperação: ");
            notaRecuperacao = double.Parse(Console.ReadLine());
            var novaNota = notaRecuperacao + mediaNotas;
            if(novaNota >= 7){
                Console.WriteLine("O aluno foi APROVADO na recuperação com {0:F2} pontos", novaNota);
            }else{
                Console.WriteLine("O aluno foi REPROVADO!");
            }
        }
    }
}