// Interface para Pessoa Física
interface PessoaFisica {
    numeroCPF: string;
    numeroID: number;
    tituloEleitor: string;
    mostrarDocumentos(): { tipo: string, numero: string }[];
}

interface PessoaJuridica {
    CNPJ: string;
    nomeSocial: string;
    capitalSocial?: number;
    mostrarInfoEmpresa(): string[];
}

class Empresa implements PessoaJuridica {
    private CNPJ: string;
    private nomeSocial: string;
    private capitalSocial?: number;

    constructor(nomeSocial: string, capitalSocial?: number) {
        this.nomeSocial = nomeSocial;
        this.capitalSocial = capitalSocial;
        this.CNPJ = "";
    }

    get getNumeroCNPJ(): string {
        return this.CNPJ;
    }

    set setNovoCNPJ(cnpj: string) {
        this.CNPJ = cnpj;
    }

    mostrarInfoEmpresa(): string[] {
        const infoEmpresa: string[] = [this.getNumeroCNPJ, this.nomeSocial];
        if (this.capitalSocial !== undefined) {
            infoEmpresa.push(this.capitalSocial.toFixed(2)); // Adiciona 2 casas decimais
        }
        return infoEmpresa;
    }

    *iterarInfoEmpresa() {
        for (const info of this.mostrarInfoEmpresa()) {
            yield info;
        }
    }
}

class GerarCNPJ {
    static gerarCNPJ(): string {
        const bloco1 = Math.floor(Math.random() * 900) + 100;
        const bloco2 = Math.floor(Math.random() * 900) + 100;
        const bloco3 = Math.floor(Math.random() * 900) + 100;
        const bloco4 = Math.floor(Math.random() * 90) + 10; // Dígito verificador
        return `${bloco1}.${bloco2}.${bloco3}/0001-${bloco4}`;
    }
}

class PessoaNatural implements PessoaFisica {
    protected nomeCompleto: string;
    private anoNascimento: number;
    private idade: number;
    numeroCPF: string;
    numeroID: number;
    tituloEleitor: string;

    constructor(nome: string, anoNascimento: number) {
        this.nomeCompleto = nome;
        this.anoNascimento = anoNascimento;
        this.idade = 0;
        this.numeroCPF = "";
        this.numeroID = 0;
        this.tituloEleitor = "";
    }

    get getAnoNascimento(): number {
        return this.anoNascimento;
    }

    get getIdade(): number {
        return this.idade;
    }

    set setIdade(idade: number) {
        this.idade = idade;
    }

    mostrarDocumentos(): { tipo: string; numero: string }[] {
        return [
            { tipo: "CPF", numero: this.numeroCPF },
            { tipo: "ID", numero: this.numeroID.toString() },
            { tipo: "Título Eleitoral", numero: this.tituloEleitor },
        ];
    }
}

class CalcularIdade {
    static calcularIdade(pessoa: PessoaNatural): number {
        const dataAtual = new Date();
        const nascimento = new Date(pessoa.getAnoNascimento, 0, 1);
        let idade = dataAtual.getFullYear() - nascimento.getFullYear();

        if (
            dataAtual.getMonth() < nascimento.getMonth() ||
            (dataAtual.getMonth() === nascimento.getMonth() &&
                dataAtual.getDate() < nascimento.getDate())
        ) {
            idade--;
        }
        return idade;
    }
}

class GerarCPF {
    static gerarCPF(): string {
        const bloco1 = Math.floor(Math.random() * 900) + 100;
        const bloco2 = Math.floor(Math.random() * 900) + 100;
        const bloco3 = Math.floor(Math.random() * 900) + 100;
        const digito1 = Math.floor(Math.random() * 9);
        const digito2 = Math.floor(Math.random() * 9);
        return `${bloco1}.${bloco2}.${bloco3}-${digito1}${digito2}`;
    }
}

class GerarIdentidade {
    static numeroIdentidade(): string {
        return Math.floor(1000000000 + Math.random() * 9000000000).toString();
    }
}

class GerarNumeroTitulo {
    static numeroTitulo(): string {
        const bloco1 = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
        const bloco2 = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
        const bloco3 = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
        return `${bloco1} ${bloco2} ${bloco3}`;
    }
}

function validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    const calcDigito = (base: string, pesos: number[]) =>
        pesos
            .reduce((soma, peso, i) => soma + parseInt(base[i]) * peso, 0) %
            11 < 2
            ? 0
            : 11 - (pesos.reduce((soma, peso, i) => soma + parseInt(base[i]) * peso, 0) % 11);

    const digito1 = calcDigito(cpf.slice(0, 9), [10, 9, 8, 7, 6, 5, 4, 3, 2]);
    const digito2 = calcDigito(cpf.slice(0, 10), [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);

    return cpf[9] === digito1.toString() && cpf[10] === digito2.toString();
}

// Testando o código corrigido
const pessoa = new PessoaNatural("Wesley Medeiros da Rosa", 1998);
pessoa.numeroCPF = GerarCPF.gerarCPF();
pessoa.numeroID = parseInt(GerarIdentidade.numeroIdentidade());
pessoa.tituloEleitor = GerarNumeroTitulo.numeroTitulo();
pessoa.setIdade = CalcularIdade.calcularIdade(pessoa);

console.log(pessoa.mostrarDocumentos());
console.log("Validação CPF:", validarCPF(pessoa.numeroCPF));

const minhaEmpresa = new Empresa("WesleyLTDA", 10000);
minhaEmpresa.setNovoCNPJ = GerarCNPJ.gerarCNPJ();
console.log(minhaEmpresa.getNumeroCNPJ);
console.log(minhaEmpresa.mostrarInfoEmpresa());
console.log(minhaEmpresa.iterarInfoEmpresa())
