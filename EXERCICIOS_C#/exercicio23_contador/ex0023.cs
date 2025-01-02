using System;

public class Ex0023{

    public static int contador;
    static void Main(){

        contador = 1;

        while(contador <= 2000){
            Console.WriteLine(contador);
            contador++;
        }
    }
}