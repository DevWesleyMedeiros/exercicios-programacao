// TRABALHANDO COM CLASSES
class Pessoa {
    public nome: string;
    protected numero: number;

    constructor(nome: string){
        this.nome = nome;
        this.numero = 0;
        this.info();
    }
    protected info(): void{
        console.log(this.nome, this.numero);
    }
}
// SUPER CLASSE
  
// Criando uma pessoa Física a partir da classe Pessoa
class PessoaFisica extends Pessoa {
    protected nomePf: string = "";
    protected idade: number;
    private nasceu: boolean = false;
    private certidaoNascimento: boolean = false;
    private cpf: string = "";

    constructor(nome: string) {
        super(nome);
        this.nomePf = nome;
        this.idade = 0;
        this.nasceu = true;
        this.concederCertidao();
        this.cpf = this.concederCPF(); 
    }

    private concederCertidao(): void {
        this.certidaoNascimento = true;
    }
    //public info(){
    //     super.info();
    //     console.log(this.)
    // }
    //Chamar um método da classe pai sem precisar colocá-lo como protected

    private concederCPF(): string {
        if (this.certidaoNascimento) {
            let numeroDeCPF: number = Math.floor(Math.random() * 99999999999);
            let numCPFString: string = numeroDeCPF.toString().padStart(11, '0');
            let digitosVerificadores: string = Math.floor(Math.random() * 99)
                .toString().padStart(2, "0");
            let cpfFormatado =
                numCPFString.slice(0, 3) +
                "." +
                numCPFString.slice(3, 6) +
                "." +
                numCPFString.slice(6, 9) +
                "-" +
                digitosVerificadores;
            return cpfFormatado;
        } else {
            console.log("Você precisa de uma certidão de nascimento");
            return "";
        }
    }

    public pessoaInfo(): void {
        if (this.nasceu) {
            console.log(`Nome da pessoa é ..... ${this.nomePf}`);
            console.log(`Pessoa nasceu com ..... ${this.idade} anos`);
            if (this.cpf) {
                console.log(`A pessoa ${this.nomePf} possui certidão de nascimento`);
                console.log(`O número do CPF é ${this.cpf}`);
            } else {
                console.log(`O(A) ${this.nomePf} ainda não possui CPF`);
                console.log("Esta pessoa ainda não possui CPF registrado");
            }
        } else {
            console.log("A pessoa não nasceu ainda!!");
        }
    }
}

const pessoaFisica = new PessoaFisica("Wesley");
pessoaFisica.pessoaInfo();
console.log("------------------------------------------");
const pessoaFisica2 = new PessoaFisica("Juliana");
pessoaFisica2.pessoaInfo();

// Criando uma pessoa Jurídica a partir de uma Pessoa
class PessoaJuridica extends Pessoa {
    public nomePj: string;
    private Cnpj: string;
    private registrada: boolean = false;

    constructor(nome: string){
        super(nome);
        this.nomePj = nome;
        this.registrada = this.concederRegistro();
        this.Cnpj = this.concederCNPJ();
    }

    private concederRegistro(): boolean {
        return this.registrada = true;
    }

    private concederCNPJ(): string {
        if (this.registrada) {
            let numeroDeCNPJ: number = Math.floor(Math.random() * 99999999999999);
            let numCNPJString: string = numeroDeCNPJ.toString().padStart(14, '0');
            let numCNPJString2PrimeirosDigitos: string = numCNPJString.slice(0, 2);
            let numCNPJ6DigitosPosteriores: string = numCNPJString.slice(2, 8);
            let numCNPJ4DigitosComBarra: string = numCNPJString.slice(8, 12);
            let ultimosDigitosCNPJ: string = numCNPJString.slice(12, 14);
            let cnpjFormatado: string =
                numCNPJString2PrimeirosDigitos + "." +
                numCNPJ6DigitosPosteriores.substring(2, 5) + "." + numCNPJ6DigitosPosteriores.substring(5, 8)+ "/" +
                numCNPJ4DigitosComBarra + "-" +
                ultimosDigitosCNPJ;
            return cnpjFormatado;
        } else {
            console.log("Você precisa de um registro para sua empresa");
            return "";
        }
    }

    public infoPJ(): void {
        if (this.registrada) {
            console.log("----------------------------------------------------")
            console.log(`Sua empresa está registrada e se chama ${this.nomePj}`);
            console.log(`Seu CNPJ é ${this.Cnpj}`);
        } else {
            console.log("Você não possui registro da sua PJ");
        }
    }
}

const PJ = new PessoaJuridica("Programming BR LTDA");
PJ.infoPJ();
