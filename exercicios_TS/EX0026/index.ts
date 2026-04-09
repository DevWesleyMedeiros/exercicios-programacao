/* Vamos criar um sistema para analise de churrasco. Ele será capaz de calcular a quantidade de carne necessária com base no número de convidados e o custo total do evento. */
// Consumo padrão 400g por pessoa
// Preço da carne: considere $R$82,40 por kg

class Constants {
  static readonly MEAT_PER_PERSON: number = 0.4 // 400g por pessoa convertido para kg ou 400 / 1000
  static readonly PRICE_PER_KG: number = 82.4 // preço por kg
}

class MeatCostsCalculatorPerPerson {
  static calculateMeatAmount(people: number): number {
    if (people <= 0) {
      throw new Error('O número de pessoas deve ser maior que zero.')
      // quando eu lanço um erro, a execução do código é interrompida e a mensagem de erro é exibida. Isso é útil para evitar cálculos inválidos e garantir que o número de pessoas seja positivo.
    }
    return people * Constants.MEAT_PER_PERSON
  }
}

class TotalCostCalculator {
  static calculateTotalCost(amountOfMeat: number, pricePerKg: number): number {
    if (amountOfMeat < 0 || pricePerKg < 0) {
      throw new Error('A quantidade de carne e o preço por kg devem ser maiores ou iguais a zero.')
    }
    return amountOfMeat * pricePerKg
  }

  static calculateCostPerPerson(totalCost: number, people: number): number {
    if (people <= 0) {
      throw new Error('O número de pessoas deve ser maior que zero.')
    }
    return totalCost / people
  }
}

class Barbecue {
  showTotalCost() {
    throw new Error('Método ainda não implementado.')
    // isso serve para indicar que o método showTotalCost ainda não foi implementado, mas é esperado que seja implementado no futuro. Isso é útil para evitar erros de execução caso alguém tente chamar esse método antes de ele ser implementado.
  }
  public barbecueTitle: string
  public peopleComing: number
  public meatPrice: number

  constructor(title: string, people: number) {
    this.barbecueTitle = title
    this.peopleComing = people
    this.meatPrice = Constants.PRICE_PER_KG // Permite mudar o preço para um churrasco específico, se quiser
  }

  //'shows' em um único relatório para evitar recalcular a mesma coisa várias vezes
  showFullReport(): void {
    console.log(`\n--- Analisando: ${this.barbecueTitle} ---`)
    console.log(`Convidados: ${this.peopleComing} pessoas`)

    // Calculamos tudo de uma vez aqui dentro do método
    const meatAmount = MeatCostsCalculatorPerPerson.calculateMeatAmount(this.peopleComing)
    const totalCost = TotalCostCalculator.calculateTotalCost(meatAmount, this.meatPrice)
    const costPerPerson = TotalCostCalculator.calculateCostPerPerson(totalCost, this.peopleComing)

    console.log(`Carne necessária: ${meatAmount.toFixed(2)}kg`)
    console.log(`Custo total: R$${totalCost.toFixed(2)}`)
    console.log(`Custo por pessoa: R$${costPerPerson.toFixed(2)}`)
  }
}

const myBarbecue = new Barbecue('Churras dos amigos', 20)
myBarbecue.showFullReport()
// myBarbecue.showTotalCost() // Isso vai lançar um erro porque o método showTotalCost ainda não foi implementado.
