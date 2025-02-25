/*
Faça uma função que recebe um número qualquer e retorne uma lista ordenada através daquele número
Ex.: 84323 - deve retornar [2, 3, 3, 4, 8]
*/
interface RangeNumber {
    orderList(number: number): number[];
  }
  
  class RandomValue implements RangeNumber {
    private randomNumber: number;
  
    constructor(number: number) {
      this.randomNumber = number;
    }
  
    get getNumber(): number {
      return this.randomNumber;
    }
  
    // 84323 - deve retornar [2, 3, 3, 4, 8]
    orderList(number: number): number[] {
      try {
        // Verificando se o número é válido (não NaN) e é um número positivo
        if (isNaN(number) || number <= 0) {
          throw new Error("Valor inválido. O número deve ser positivo e maior que zero.");
        }
  
        // Converte o número para string, divide em caracteres individuais e transforma em um array de números
        let arrayNumbers: number[] = number.toString().split("").map(Number);
        /*
              A função number.toString() converte o número para uma string, permitindo acessar os dígitos individualmente.
              O split('') divide a string em um array de caracteres. Exemplo: "84323" se torna ['8', '4', '3', '2', '3'].
              O map(Number) transforma cada elemento (que está em formato string) em um número. O array resultante será [8, 4, 3, 2, 3].
        */
  
        // Ordena os números de forma crescente e retorna o array ordenado
        return arrayNumbers.sort((a, b) => a - b);
        // Compara a e b, nos seus valores numéricos, verifica qual é o menor e maior e os atualiza
      } catch (error: any) {
        console.error(`Error: ${error.message}`);
        return []; // Retorna um array vazio caso haja erro
      }
    }
  }
  
  const value = new RandomValue(148665349);
  const getValue = value.getNumber;
  console.log(value.orderList(getValue)); // Esperado: [1, 3, 4, 5, 6, 6, 8, 9]
  