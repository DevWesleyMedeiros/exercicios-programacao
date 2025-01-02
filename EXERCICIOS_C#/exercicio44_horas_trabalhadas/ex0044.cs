using System;

public static class Ex0044{

    public static void Main(){

        int horasTrabalho;
        int horasNormais;
        double salario;
        int excedenteHoras;

        Console.Write("Quantas horas trabalhadas? ");
        horasTrabalho = Convert.ToInt32(Console.ReadLine());

        if(horasTrabalho > 50){
            excedenteHoras = 20 * (horasTrabalho - 50);
            horasNormais = (10 * 50);
            salario = (double)excedenteHoras + (double)horasNormais;
            Console.WriteLine("O valor em horas: {0:C}\n Salário: {1:C}", excedenteHoras, salario);
        }else{
            excedenteHoras = 0;
            salario = 10 * (double)horasTrabalho;
            Console.WriteLine("Seu salário, neste mês, foi de {0:C}", salario);
        }
    }
}