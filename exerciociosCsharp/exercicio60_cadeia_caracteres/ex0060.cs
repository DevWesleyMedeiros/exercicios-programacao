using System;

namespace MainMethod
{
    public static class Func
    {
        public static int PhraseAnalizer(char firstCaracter, char secondCaracter)
        {
            char[] letter = new char[26]{'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};
            // array de caracteres

            int fC = Array.IndexOf(letter, firstCaracter);
            int sC = Array.IndexOf(letter, secondCaracter);
            // Basicamente aqui eu estou acessando os index da firstCaracter e secondCaracter

            string countLetters = new string(letter).Substring(fC, sC +1);

            // Instanciando um objeto string da classe string
            /*
            Aqui eu pego meu array de caracteres e transformo em uma string só com os caracteres do array para poder usar o método Substrig, que é um método que pertence a classe String.
            */
            /*
            Substring - retorna uma string de um intervalo dado, nesse caso, o número de caracter entre firstCaracter e secondCaracter
            */

            return countLetters.Length;
            // Aqui eu retorno o tamanho desse intervalor entre os caracteres
        }
    }

    namespace Default
    {
        public static class Ex0060
        {
            public static char firstCaracter;
            public static char secondCaracter;
            public static int result;

            public static void Main()
            {
                Console.Write("Type here the first letter from the alphabet you want to verify: ");
                firstCaracter = char.Parse(Console.ReadLine().ToUpper().Trim());

                Console.Write("Type here the second letter from the alphabet you want to verify: ");
                secondCaracter = char.Parse(Console.ReadLine().ToUpper());

                result = MainMethod.Func.PhraseAnalizer(firstCaracter, secondCaracter);

                Console.WriteLine("There are(is) {0} letters in the alphabet between {1} and {2}", result, firstCaracter, secondCaracter);
            }
        }
    }
}
