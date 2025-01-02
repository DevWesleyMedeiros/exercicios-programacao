using System;

public class ex0011{
    static void Main(){
        double salario;
        double taxa;

        Console.WriteLine("Qual o valor do salário: ");
        salario = double.Parse(Console.ReadLine());

        Console.WriteLine("Qual é a taxa do reajuste: ");
        taxa = double.Parse(Console.ReadLine());

        ReajusteSalarial(salario, taxa);

    }
    static void ReajusteSalarial(double salario, double taxa){
        double valorReajustado;

        valorReajustado = (1 +(taxa/100)) * salario;

        Console.WriteLine("O salário de {0:C} com o reajuste de {1}% vai para {2:C}", salario, taxa, valorReajustado);
    }
}