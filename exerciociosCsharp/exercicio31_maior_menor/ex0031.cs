using System;

public static class Ex0030{

    public static int v1;
    public static int v2;
    public static void Main(){

        Console.Write("Digite o 1° valor: ");
        v1 = Convert.ToInt32(Console.ReadLine());
        Console.Write("Digite o 2° valor: ");
        v2 = Convert.ToInt32(Console.ReadLine());

        if(v1 == v2 && v2 == v1){
            Console.WriteLine("O valores são iguais");
        }else if(v1 != v2 && v2 != v1){
            Console.WriteLine("O valores são diferentes");
        }else if(v1 >= v2 && v2 <= v1){
            Console.WriteLine("{0} é maior ou igual a {1}", v1, v2);
        }else if(v2 >= v1 && v1 <= v2){
            Console.WriteLine("{0} é maior ou igual a {1}", v2, v1);
        }
    }
}