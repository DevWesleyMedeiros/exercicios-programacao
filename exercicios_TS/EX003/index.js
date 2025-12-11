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
var Dev = /** @class */ (function () {
    function Dev(nome, idade, linguagemProgramacao) {
        this.projetos = [];
        this.nome = nome;
        this.idade = idade;
        this.linguagemProgramacao = linguagemProgramacao;
        this.projetos = this.projetos;
    }
    Dev.prototype.getProjetos = function () {
        return this.projetos;
    };
    Dev.prototype.setProjetos = function (projetos) {
        if (typeof projetos === 'string') {
            this.projetos.push(projetos);
        }
        else {
            this.projetos = projetos;
        }
    };
    Dev.prototype.infoDev = function () {
        console.log("Meu nome \u00E9 ".concat(this.nome, ". Tenho ").concat(this.idade, " anos de idade e sei programar em ").concat(this.linguagemProgramacao));
        console.log("Projetos: ".concat(this.projetos.join(', ')));
    };
    return Dev;
}());
var DevFrontend = /** @class */ (function (_super) {
    __extends(DevFrontend, _super);
    function DevFrontend(nome, idade, linguagemProgramacao, framework) {
        var _this = _super.call(this, nome, idade, linguagemProgramacao) || this;
        _this.framework = framework;
        _this.nomeDev = nome;
        return _this;
    }
    // fazendo uma sobrescrita do método infoDev da classe pai
    DevFrontend.prototype.infoDev = function () {
        _super.prototype.infoDev.call(this);
        console.log("Meu nome \u00E9 ".concat(this.nomeDev));
        console.log("E tamb\u00E9m trabalho com o framework ".concat(this.framework));
    };
    return DevFrontend;
}(Dev));
var DevBackend = /** @class */ (function (_super) {
    __extends(DevBackend, _super);
    function DevBackend(nome, idade, linguagemProgramacao, bancoDeDados) {
        var _this = _super.call(this, nome, idade, linguagemProgramacao) || this;
        _this.bancoDeDados = bancoDeDados;
        _this.nomeDevBackend = nome;
        return _this;
    }
    DevBackend.prototype.infoDev = function () {
        _super.prototype.infoDev.call(this);
        console.log("Meu nome \u00E9 ".concat(this.nomeDevBackend));
        console.log("E tamb\u00E9m utilizo o banco de dados ".concat(this.bancoDeDados));
    };
    return DevBackend;
}(Dev));
var CountryDeveloper = /** @class */ (function () {
    function CountryDeveloper(countryName, devAge) {
        this.countryName = countryName;
        this.devAge = devAge;
    }
    // método concreto que pode ser usado diretamente. Basta chamar a classe pai. Ex.: super.work()
    CountryDeveloper.prototype.work = function () {
        console.log("No momento, Estou trabalhando no(s) ".concat(this.countryName));
    };
    return CountryDeveloper;
}());
var CountryDevFrontend = /** @class */ (function (_super) {
    __extends(CountryDevFrontend, _super);
    function CountryDevFrontend(countryName, devAge) {
        var _this = _super.call(this, countryName, devAge) || this;
        _this.countryName = countryName;
        return _this;
    }
    CountryDevFrontend.prototype.develop = function () {
        console.log("Tenho ".concat(this.devAge, " anos e sou dev front-end do pa\u00EDs: ").concat(this.countryName));
    };
    CountryDevFrontend.prototype.work = function () {
        _super.prototype.work.call(this);
    };
    return CountryDevFrontend;
}(CountryDeveloper));
var devFrontend = new DevFrontend("Weslei", 26, "JavaScript", "React");
devFrontend.setProjetos("Projeto Frontend 1");
console.log(devFrontend.getProjetos());
devFrontend.infoDev();
var devBackend = new DevBackend("Carlos", 30, "Python", "PostgreSQL");
devBackend.setProjetos(["Projeto Backend 1", "Projeto Backend 2"]);
console.log(devBackend.getProjetos());
devBackend.infoDev();
// Usando a classe abstrata e suas subclasses
var devBrazilFrontend = new CountryDevFrontend("Brasil", 26);
devBrazilFrontend.develop();
devBrazilFrontend.work();
