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
  private nomeDev: string;
  private framework: string;

  constructor(
    nome: string,
    idade: number,
    linguagemProgramacao: string,
    framework: string
  ) {
    super(nome, idade, linguagemProgramacao);
    this.framework = framework;
    this.nomeDev = nome;
  }

  // fazendo uma sobrescrita do método infoDev da classe pai
  public infoDev(): void {
    super.infoDev();
    console.log(`Meu nome é ${this.nomeDev}`);
    console.log(`E também trabalho com o framework ${this.framework}`);
  }
}

class DevBackend extends Dev {
  private nomeDevBackend: string;
  private bancoDeDados: string;

  constructor(
    nome: string,
    idade: number,
    linguagemProgramacao: string,
    bancoDeDados: string
  ) {
    super(nome, idade, linguagemProgramacao);
    this.bancoDeDados = bancoDeDados;
    this.nomeDevBackend = nome;
  }

  public infoDev(): void {
    super.infoDev();
    console.log(`Meu nome é ${this.nomeDevBackend}`);
    console.log(`E também utilizo o banco de dados ${this.bancoDeDados}`);
  }
}

abstract class CountryDeveloper {
  protected countryName: string;
  readonly devAge: number;

  constructor(countryName: string, devAge: number) {
    this.countryName = countryName;
    this.devAge = devAge;
  }
  abstract develop(): void; // método abstrato que deve ser implementado nas subclasses

  // método concreto que pode ser usado diretamente. Basta chamar a classe pai. Ex.: super.work()
  work() {
    console.log(`No momento, Estou trabalhando no(s) ${this.countryName}`);
  }
}

class CountryDevFrontend extends CountryDeveloper {
  countryName: string;

  constructor(countryName: string, devAge: number) {
    super(countryName, devAge);
    this.countryName = countryName;
  }

  develop(): void {
    console.log(
      `Tenho ${this.devAge} anos e sou dev front-end do país: ${this.countryName}`
    );
  }
  work() {
    super.work();
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

// Usando a classe abstrata e suas subclasses
const devBrazilFrontend = new CountryDevFrontend("Brasil", 26);
devBrazilFrontend.develop();
devBrazilFrontend.work();
