using System;

public class Quadrado{

    public static float Quad(float bas, float alt){

        if(bas == 0 || alt == 0){
            throw new Exception("Base ou Altura não podem ser valor 0");
        }else{
            return bas * alt;
        }
    }
}
public static class Ex0047{

    public static float area;
    static void Main(){
        
        area = 0;

        try{
            // onde eu vou colocar o meu código normalmente

            area = Quadrado.Quad(0f, 5f);
            Console.WriteLine("Área do quadrado: {0}", area);
        }
        catch(Exception erro){
            Console.WriteLine("Erro: {0}", erro.Message);
            // sempre nesses casos, o erro.Message está recebendo do throw a exceção
        }
        finally{
            Console.WriteLine("Programa executado!!");
        }
    }
}