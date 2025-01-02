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
        return _this;
    }
    DevFrontend.prototype.infoDev = function () {
        _super.prototype.infoDev.call(this);
        console.log("E tamb\u00E9m trabalho com o framework ".concat(this.framework));
    };
    return DevFrontend;
}(Dev));
var DevBackend = /** @class */ (function (_super) {
    __extends(DevBackend, _super);
    function DevBackend(nome, idade, linguagemProgramacao, bancoDeDados) {
        var _this = _super.call(this, nome, idade, linguagemProgramacao) || this;
        _this.bancoDeDados = bancoDeDados;
        return _this;
    }
    DevBackend.prototype.infoDev = function () {
        _super.prototype.infoDev.call(this);
        console.log("E tamb\u00E9m utilizo o banco de dados ".concat(this.bancoDeDados));
    };
    return DevBackend;
}(Dev));
var devFrontend = new DevFrontend("Weslei", 26, "JavaScript", "React");
devFrontend.setProjetos("Projeto Frontend 1");
console.log(devFrontend.getProjetos());
devFrontend.infoDev();
var devBackend = new DevBackend("Carlos", 30, "Python", "PostgreSQL");
devBackend.setProjetos(["Projeto Backend 1", "Projeto Backend 2"]);
console.log(devBackend.getProjetos());
devBackend.infoDev();
