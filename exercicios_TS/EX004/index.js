"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanBeing = void 0;
var HumanBeing;
(function (HumanBeing) {
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.personSpeak = function () {
            console.log("".concat(this.name, " is speaking with you."));
        };
        Person.prototype.personInfo = function () {
            console.log("My name is ".concat(this.name, " and I'm ").concat(this.age, " years old."));
        };
        return Person;
    }());
    HumanBeing.Person = Person;
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, school) {
            var _this = _super.call(this, name, age) || this; // Chama o construtor da classe base Person
            _this.school = school;
            return _this;
        }
        // Novo método exclusivo para a classe Student
        Student.prototype.studentSchool = function () {
            console.log("The student studies at ".concat(this.school, "."));
        };
        // Sobrescrevendo o método personInfo para incluir informações específicas do Student
        Student.prototype.personInfo = function () {
            _super.prototype.personInfo.call(this); // Chama o método da classe base Person
            console.log("Student studies at ".concat(this.school, "."));
        };
        Student.prototype.studentSpeak = function () {
            _super.prototype.personSpeak.call(this);
            console.log("".concat(this.name, " is speaking to me."));
        };
        Object.defineProperty(Student.prototype, "setSchool", {
            // Setter para alterar a escola do aluno
            set: function (school) {
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
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Student.prototype, "schoolInfo", {
            // Getter para acessar o nome da escola
            get: function () {
                return this.school;
            },
            enumerable: false,
            configurable: true
        });
        return Student;
    }(Person));
    HumanBeing.Student = Student;
})(HumanBeing || (exports.HumanBeing = HumanBeing = {}));
// Criando objetos da classe Person e Student
var Me = new HumanBeing.Person("Wesley", 26);
var meAsAStudent = new HumanBeing.Student("Wesley Medeiros", 26, "Danki Code");
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
