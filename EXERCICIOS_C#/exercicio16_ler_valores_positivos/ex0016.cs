using System;

public class Ex0016
{
    static void Main()
    {
        int[] arrayValues = new int[10];
        int valorX;
        int[] maioresQueX = new int[10];
        int[] menoresQueX = new int[10];
        int[] iguaisX = new int[10];
        // Siginifica que eu posso ter até 10 valores nestes arrays, mais que isso ocorrerá problemas

        int indexX = 0;
        int maioresIndex = 0;
        int menoresIndex = 0;

        Console.WriteLine("Digite o valor de comparação");
        valorX = Convert.ToInt32(Console.ReadLine());

        for (int i = 0; i < arrayValues.Length; i++)
        {
            Console.WriteLine("Digite o {0}° valor", i + 1);
            arrayValues[i] = Convert.ToInt32(Console.ReadLine());

            if (arrayValues[i] > valorX)
            {
                maioresQueX[maioresIndex] = arrayValues[i];
                maioresIndex++;
                // Não posso incrementar valores no Array, logo incrementamos no index no qual inicia em 0. E se ele recebe um valor, ele vai ser incrementado + 1 para que na próxima iteração não seja mais a inicial de 0 e sim a atual
            }
            else if (arrayValues[i] < valorX)
            {
                menoresQueX[menoresIndex] = arrayValues[i];
                menoresIndex++;
            }
            else
            {
                iguaisX[indexX] = arrayValues[i];
                indexX++;
            }
        }
        Console.Write("Array valores: ");
        foreach (int value in arrayValues)
        {
            Console.WriteLine(value);
        }

        Console.WriteLine("Valores maiores que X são:");
        for (int i = 0; i < maioresIndex; i++)
        {
            Console.WriteLine(maioresQueX[i]);
        }

        Console.WriteLine("Valores menores que X são:");
        for (int i = 0; i < menoresIndex; i++)
        {
            Console.WriteLine(menoresQueX[i]);
        }
        for (int i = 0; i < indexX; i++)
        {
            Console.WriteLine(iguaisX[i]);
        }
    }
}
