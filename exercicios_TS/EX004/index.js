"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanBeing = void 0;
var HumanBeing;
(function (HumanBeing) {
    class Person {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        personSpeak() {
            console.log(`${this.name} is speaking with you.`);
        }
        personInfo() {
            console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
        }
    }
    HumanBeing.Person = Person;
    class Student extends Person {
        school;
        constructor(name, age, school) {
            super(name, age); // Chama o construtor da classe base Person
            this.school = school;
        }
        // Novo método exclusivo para a classe Student
        studentSchool() {
            console.log(`The student studies at ${this.school}.`);
        }
        // Sobrescrevendo o método personInfo para incluir informações específicas do Student
        personInfo() {
            super.personInfo(); // Chama o método da classe base Person
            console.log(`Student studies at ${this.school}.`);
        }
        studentSpeak() {
            super.personSpeak();
            console.log(`${this.name} is speaking to me.`);
        }
        // Setter para alterar a escola do aluno
        set setSchool(school) {
            if (school.length > 0) {
                try {
                    // Validando que a escola não deve ser um número
                    if (!Number.isNaN(Number(school))) {
                        throw new Error("School name cannot be a number.");
                    }
                    // Se a validação passar, atualiza a escola
                    this.school = school;
                    console.log("School name updated successfully.");
                }
                catch (error) {
                    console.error(error.message);
                }
            }
            else {
                console.error("School name cannot be empty.");
            }
        }
        // Getter para acessar o nome da escola
        get schoolInfo() {
            return this.school;
        }
    }
    HumanBeing.Student = Student;
})(HumanBeing || (exports.HumanBeing = HumanBeing = {}));
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
console.log(meAsAStudent.schoolInfo); // Acessando o nome da escola
// Modificando o nome da escola usando o setter
meAsAStudent.setSchool = "New School"; // Vai atualizar a escola
console.log(meAsAStudent.schoolInfo); // Acessando novamente o nome da escola
// Tentando atribuir um nome de escola vazio
meAsAStudent.setSchool = ""; // Não vai alterar a escola, pois é vazio
// Tentando atribuir um nome de escola como número
meAsAStudent.setSchool = "123"; // Vai lançar erro, pois a escola não pode ser um número
