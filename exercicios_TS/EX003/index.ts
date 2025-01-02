class Dev {
    private nome: string;
    protected idade: number;
    protected linguagemProgramacao: string;
    protected projetos: string[] = [];

    constructor(nome: string, idade: number, linguagemProgramacao: string) {
        this.nome = nome;
        this.idade = idade;
        this.linguagemProgramacao = linguagemProgramacao;
        this.projetos = this.projetos;
    }

    public getProjetos(): string[] {
        return this.projetos;
    }

    public setProjetos(projetos: string | string[]): void {
        if (typeof projetos === 'string') {
            this.projetos.push(projetos);
        } else {
            this.projetos = projetos;
        }
    }

    public infoDev(): void {
        console.log(`Meu nome é ${this.nome}. Tenho ${this.idade} anos de idade e sei programar em ${this.linguagemProgramacao}`);
        console.log(`Projetos: ${this.projetos.join(', ')}`);
    }
}

class DevFrontend extends Dev {
    private nome: string;
    private framework: string;

    constructor(nome:string, idade: number, linguagemProgramacao: string, framework: string) {
        super(nome, idade, linguagemProgramacao);
        this.framework = framework;
        this.nome = nome;
    }

    public infoDev(): void {
        super.infoDev();
        console.log(`E também trabalho com o framework ${this.framework}`);
    }
}

class DevBackend extends Dev {
    private nome: string;
    private bancoDeDados: string;

    constructor(nome: string, idade: number, linguagemProgramacao: string, bancoDeDados: string) {
        super(nome, idade, linguagemProgramacao);
        this.bancoDeDados = bancoDeDados;
    }

    public infoDev(): void {
        super.infoDev();
        console.log(`E também utilizo o banco de dados ${this.bancoDeDados}`);
    }
}
abstract class CountryDeveloper{
    readonly countryName: string;

    constructor(countryName:string){
        this.countryName = countryName;
    }
    abstract develop(): void;

    work() {
        console.log(`Estou trabalhando no(s) ${this.countryName}`);
    }
}

const devFrontend = new DevFrontend("Weslei", 26, "JavaScript", "React");
devFrontend.setProjetos("Projeto Frontend 1"); 
console.log(devFrontend.getProjetos());
devFrontend.infoDev();                       

const devBackend = new DevBackend("Carlos", 30, "Python", "PostgreSQL");
devBackend.setProjetos(["Projeto Backend 1", "Projeto Backend 2"]);
console.log(devBackend.getProjetos());   
devBackend.infoDev();                    

