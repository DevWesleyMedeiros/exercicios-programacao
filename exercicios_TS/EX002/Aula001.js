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
// TRABALHANDO COM CLASSES
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
        this.numero = 0;
    }
    return Pessoa;
}());
// SUPER CLASSE
// Criando uma pessoa Física a partir da classe Pessoa
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome) {
        var _this = _super.call(this, nome) || this;
        _this.nomePf = "";
        _this.nasceu = false;
        _this.certidaoNascimento = false;
        _this.cpf = "";
        _this.nomePf = nome;
        _this.idade = 0;
        _this.nasceu = true;
        _this.concederCertidao();
        _this.cpf = _this.concederCPF();
        return _this;
    }
    PessoaFisica.prototype.concederCertidao = function () {
        this.certidaoNascimento = true;
    };
    PessoaFisica.prototype.concederCPF = function () {
        if (this.certidaoNascimento) {
            var numeroDeCPF = Math.floor(Math.random() * 99999999999);
            var numCPFString = numeroDeCPF.toString().padStart(11, '0');
            var digitosVerificadores = Math.floor(Math.random() * 99)
                .toString().padStart(2, "0");
            var cpfFormatado = numCPFString.slice(0, 3) +
                "." +
                numCPFString.slice(3, 6) +
                "." +
                numCPFString.slice(6, 9) +
                "-" +
                digitosVerificadores;
            return cpfFormatado;
        }
        else {
            console.log("Você precisa de uma certidão de nascimento");
            return "";
        }
    };
    PessoaFisica.prototype.pessoaInfo = function () {
        if (this.nasceu) {
            console.log("Nome da pessoa \u00E9 ..... ".concat(this.nomePf));
            console.log("Pessoa nasceu com ..... ".concat(this.idade, " anos"));
            if (this.cpf) {
                console.log("A pessoa ".concat(this.nomePf, " possui certid\u00E3o de nascimento"));
                console.log("O n\u00FAmero do CPF \u00E9 ".concat(this.cpf));
            }
            else {
                console.log("O(A) ".concat(this.nomePf, " ainda n\u00E3o possui CPF"));
                console.log("Esta pessoa ainda não possui CPF registrado");
            }
        }
        else {
            console.log("A pessoa não nasceu ainda!!");
        }
    };
    return PessoaFisica;
}(Pessoa));
var pessoaFisica = new PessoaFisica("Wesley");
pessoaFisica.pessoaInfo();
console.log("------------------------------------------");
var pessoaFisica2 = new PessoaFisica("Juliana");
pessoaFisica2.pessoaInfo();
// Criando uma pessoa Jurídica a partir de uma Pessoa
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome) {
        var _this = _super.call(this, nome) || this;
        _this.registrada = false;
        _this.nomePj = nome;
        _this.registrada = _this.concederRegistro();
        _this.Cnpj = _this.concederCNPJ();
        return _this;
    }
    PessoaJuridica.prototype.concederRegistro = function () {
        return this.registrada = true;
    };
    PessoaJuridica.prototype.concederCNPJ = function () {
        if (this.registrada) {
            var numeroDeCNPJ = Math.floor(Math.random() * 99999999999999);
            var numCNPJString = numeroDeCNPJ.toString().padStart(14, '0');
            var numCNPJString2PrimeirosDigitos = numCNPJString.slice(0, 2);
            var numCNPJ6DigitosPosteriores = numCNPJString.slice(2, 8);
            var numCNPJ4DigitosComBarra = numCNPJString.slice(8, 12);
            var ultimosDigitosCNPJ = numCNPJString.slice(12, 14);
            var cnpjFormatado = numCNPJString2PrimeirosDigitos + "." +
                numCNPJ6DigitosPosteriores.substring(2, 5) + "." + numCNPJ6DigitosPosteriores.substring(5, 8) + "/" +
                numCNPJ4DigitosComBarra + "-" +
                ultimosDigitosCNPJ;
            return cnpjFormatado;
        }
        else {
            console.log("Você precisa de um registro para sua empresa");
            return "";
        }
    };
    PessoaJuridica.prototype.infoPJ = function () {
        if (this.registrada) {
            console.log("----------------------------------------------------");
            console.log("Sua empresa est\u00E1 registrada e se chama ".concat(this.nomePj));
            console.log("Seu CNPJ \u00E9 ".concat(this.Cnpj));
        }
        else {
            console.log("Você não possui registro da sua PJ");
        }
    };
    return PessoaJuridica;
}(Pessoa));
var PJ = new PessoaJuridica("Programming BR LTDA");
PJ.infoPJ();
