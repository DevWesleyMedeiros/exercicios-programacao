class RangeValue {
    private values: number[];
  
    constructor(...numbers: number[]) {
      this.values = numbers;
    }
  
    get getAllValues(): number[] {
      return this.values;
    }
  
    // Usando filter para pegar os números pares
    evenValuesFromRange(): number[] {
      return this.values.filter(value => value % 2 === 0);
    }
  }
  
  const arrayNumbers = new RangeValue(1, 5, 100, 200, 250, 233, 55, 77);
  const arrayEvenNumbers = arrayNumbers.evenValuesFromRange();
  
  console.log(arrayEvenNumbers); // Saída: [100, 200, 250]
  