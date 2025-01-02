class Pessoa{
    nome = null;
    idade = null;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    comprimentar = (nome) => {
        let saudacao = `Muito Prazer em te conhecer ${this.nome}!</br> Você tem ${this.idade} anos`;
        return saudacao;
    }
}
class Estudante extends Pessoa{
    curso = null;
    constructor(nome, idade, curso){
        super(nome, idade);
        this.curso = curso;
    }
    mostraCurso = (curso) =>{
        let mostrarCurso = `Você estuda ${this.curso}`;
        return mostrarCurso;
    }
    // sobreescrevendo o método comprimentar
    comprimentar = () =>{
        return `É muito legal saber que </br>
        Você faz o curso de ${this.curso}`;
    }
    // Criando métodos getters e setters
    get Curso() {
        return this._curso;
    }
    
    set Curso(novoCurso) {
        this._curso = novoCurso;
    }
    
    get nome() {
        return this._nome;
    }
    
    set nome(novoNome) {
        this._nome = novoNome;
    }
    
    get idade() {
        return this._idade;
    }
    
    set idade(anoNascimento) {
        let dataAtual = new Date().getFullYear();
        let idadeNova = dataAtual - anoNascimento;
        if (anoNascimento > dataAtual) {
            alert("Você não nasceu no futuro");
        } else {
            this._idade = idadeNova;
        }
    }
    
}
export { Pessoa, Estudante };