/*
Crie uma função que retorne o resultado de uma equação do segundo grau
ax² + bx + c = 0
Fórmula de baskara: x= −b± Vb² -4ac / 2a 
*/ 
class EquacaoSegundoGrau {
    private equacao: string;
  
    constructor(a: number, b: number, c: number) {
      this.equacao = `${a.toString()}x² + ${b.toString()}x + ${c.toString()} = 0`;
    }
  
    get getEquacaoFormatada(): string {
      return this.equacao;
    }
  
    public resultadoEquacaoSegundoGrau(a: number, b: number, c: number): string {
      try {
        if (a === 0) {
          return 'O valor de a não pode ser zero em uma equação do segundo grau.';
        }
  
        let delta: number = b ** 2 - 4 * a * c;
  
        if (delta < 0) {
          return 'Não existem raízes reais. As raízes são complexas.';
        }
  
        let x1: number = (-b + Math.sqrt(delta)) / (2 * a);
        let x2: number = (-b - Math.sqrt(delta)) / (2 * a);
  
        return `As raízes da equação são: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
      } catch (error: any) {
        console.error(`Erro: ${error.message}`);
        return 'Ocorreu um erro no cálculo.';
      }
    }
  }
  
  const equacaoSegundo = new EquacaoSegundoGrau(2, 4, 1);
  console.log(equacaoSegundo.getEquacaoFormatada); // Exibe a equação formatada
  console.log(equacaoSegundo.resultadoEquacaoSegundoGrau(0, 4, 1)); // Exibe as raízes