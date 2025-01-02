using System;

public static class Ex0050{
    
    public static int a1 = 1;
    public static int termos = 64;
    public static int razao = 2;
    public static double somaTermos;
    
    public static void Main(){
        somaTermos = (double)a1 * (double)(Math.Pow(razao, termos-1))/(razao-1);

        string resultadoFormatado = somaTermos.ToString("N0");
        
        Console.Write("Valor: {0} ", resultadoFormatado);
    }
}
/*
Os especificadores de formato N0 e F0 são usados com o método ToString para formatar números em strings de acordo com certos padrões.

    N0 - Número com separador de milhares:
        N significa "Number".
        O número 0 indica que nenhum dígito decimal é permitido (nenhuma casa decimal).
        O separador de milhares é incluído.

    Portanto, ao usar ToString("N0"), você está instruindo o método ToString a formatar o número sem casas decimais e com um separador de milhares.

    F0 - Número fixo sem casas decimais:
        F significa "Fixed-point".
        O número 0 indica que nenhum dígito decimal é permitido.

    Portanto, ao usar ToString("F0"), você está instruindo o método ToString a formatar o número como um número fixo sem casas decimais.

No seu caso específico, ambos os formatos (N0 e F0) podem ser usados para obter um resultado semelhante, já que você mencionou que não quer casas decimais e quer incluir um separador de milhares. Então, ambos podem atender às suas necessidades. Escolher entre eles depende um pouco da preferência pessoal.
*/