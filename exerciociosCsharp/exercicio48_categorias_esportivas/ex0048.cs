using System;
using System.Threading;

public class Ex0048{

    public static int idade;
    public static int anoNascimento;
    public static char opcao;

    static void Main(){

        while(opcao != 'N'){
            try{
                Console.Write("Digite o ano de nascimento do atleta: ");
                anoNascimento = Convert.ToInt32(Console.ReadLine());
                var data = DateTime.Now;
                idade = data.Year - anoNascimento;
                Console.WriteLine("Atleta de {0} anos", idade);
                
                if(idade >= 5 && idade <= 7){
                    var categoria = "MIRIM";
                    Console.WriteLine("O atleta se enquadra na categoria {0}", categoria);
                }else if(idade >= 8 && idade <= 11){
                    var categoria = "INFANTIL";
                    Console.WriteLine("O atleta se enquadra na categoria {0}", categoria);
                }else if(idade >= 12 && idade <= 13){
                    var categoria = "INFANTO-JUVENIL";
                    Console.WriteLine("O atleta se enquadra na categoria {0}", categoria);
                }else if(idade >= 14 && idade <= 17){
                    var categoria = "JUVENIL";
                    Console.WriteLine("O atleta se enquadra na categoria {0}", categoria);
                }else if(idade >= 18 && idade <= 35){
                    var categoria = "ADULTO";
                    Console.WriteLine("O atleta se enquadra na categoria {0}", categoria);
                }else{
                    var categoria = "VETERANO";
                    Console.WriteLine("O atleta se enquadra na categoria {0}", categoria);
                }
                
                Console.Write("Você quer continuar [Não - N]");
                opcao = char.Parse(Console.ReadLine().ToUpper());
                while(opcao != 'N' && opcao != 'S'){
                    Console.Write("OPÇÃO INVÁLIDA!! Você quer continuar [Não - N]");
                    opcao = char.Parse(Console.ReadLine().ToUpper());
                }
            }catch(System.FormatException erro){
                Console.WriteLine("Mensagem de ERRO: {0}", erro.Message);
                Console.WriteLine("Tipo da Exceção: {0}", erro.GetType());
            }finally{
                Console.WriteLine("...");
                Thread.Sleep(2000);
            }
        }
        Console.WriteLine("Programa finalizado!!");
    }
}
