export namespace HumanBeing {

    export class Person {

        protected name: string;
        protected age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        public personSpeak(): void {
            console.log(`${this.name} is speaking with you.`);
        }

        public personInfo(): void {
            console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
        }
    }

    export class Student extends Person {

        private school: string;

        constructor(name: string, age: number, school: string) {
            super(name, age);  // Chama o construtor da classe base Person
            this.school = school;
        }

        // Novo método exclusivo para a classe Student
        public studentSchool(): void {
            console.log(`The student studies at ${this.school}.`);
        }

        // Sobrescrevendo o método personInfo para incluir informações específicas do Student
        public personInfo(): void {
            super.personInfo();  // Chama o método da classe base Person
            console.log(`Student studies at ${this.school}.`);
        }

        public studentSpeak(): void {
            super.personSpeak();
            console.log(`${this.name} is speaking to me.`);
        }

        // Setter para alterar a escola do aluno
        set setSchool(school: string) {
            if (school.length > 0) {
                try {
                    // Validando que a escola não deve ser um número
                    if (!Number.isNaN(Number(school))) {
                        throw new Error("School name cannot be a number.");
                    }

                    // Se a validação passar, atualiza a escola
                    this.school = school;
                    console.log("School name updated successfully.");

                } catch (error) {
                    console.error(error.message);
                }
            } else {
                console.error("School name cannot be empty.");
            }
        }

        // Getter para acessar o nome da escola
        get schoolInfo(): string {
            return this.school;
        }
    }
}

// Criando objetos da classe Person e Student
const Me = new HumanBeing.Person("Wesley", 26);
const meAsAStudent = new HumanBeing.Student("Wesley Medeiros", 26, "Danki Code");

// Chamando métodos da classe base Person
Me.personSpeak();
Me.personInfo();

// Chamando métodos da classe Student
meAsAStudent.personInfo();
meAsAStudent.studentSchool();
meAsAStudent.studentSpeak();

// Usando o getter e setter
console.log(meAsAStudent.schoolInfo);  // Acessando o nome da escola

// Modificando o nome da escola usando o setter
meAsAStudent.setSchool = "New School";  // Vai atualizar a escola
console.log(meAsAStudent.schoolInfo);  // Acessando novamente o nome da escola

// Tentando atribuir um nome de escola vazio
meAsAStudent.setSchool = "";  // Não vai alterar a escola, pois é vazio

// Tentando atribuir um nome de escola como número
meAsAStudent.setSchool = "123";  // Vai lançar erro, pois a escola não pode ser um número
