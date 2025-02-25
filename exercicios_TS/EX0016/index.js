var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Empresa = /** @class */ (function () {
    function Empresa(nomeSocial, capitalSocial) {
        this.nomeSocial = nomeSocial;
        this.capitalSocial = capitalSocial;
        this.CNPJ = "";
    }
    Object.defineProperty(Empresa.prototype, "getNumeroCNPJ", {
        get: function () {
            return this.CNPJ;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Empresa.prototype, "setNovoCNPJ", {
        set: function (cnpj) {
            this.CNPJ = cnpj;
        },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.mostrarInfoEmpresa = function () {
        var infoEmpresa = [this.getNumeroCNPJ, this.nomeSocial];
        if (this.capitalSocial !== undefined) {
            infoEmpresa.push(this.capitalSocial.toFixed(2)); // Adiciona 2 casas decimais
        }
        return infoEmpresa;
    };
    Empresa.prototype.iterarInfoEmpresa = function () {
        var _i, _a, info;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _i = 0, _a = this.mostrarInfoEmpresa();
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                    info = _a[_i];
                    return [4 /*yield*/, info];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    };
    return Empresa;
}());
var GerarCNPJ = /** @class */ (function () {
    function GerarCNPJ() {
    }
    GerarCNPJ.gerarCNPJ = function () {
        var bloco1 = Math.floor(Math.random() * 900) + 100;
        var bloco2 = Math.floor(Math.random() * 900) + 100;
        var bloco3 = Math.floor(Math.random() * 900) + 100;
        var bloco4 = Math.floor(Math.random() * 90) + 10; // Dígito verificador
        return "".concat(bloco1, ".").concat(bloco2, ".").concat(bloco3, "/0001-").concat(bloco4);
    };
    return GerarCNPJ;
}());
var PessoaNatural = /** @class */ (function () {
    function PessoaNatural(nome, anoNascimento) {
        this.nomeCompleto = nome;
        this.anoNascimento = anoNascimento;
        this.idade = 0;
        this.numeroCPF = "";
        this.numeroID = 0;
        this.tituloEleitor = "";
    }
    Object.defineProperty(PessoaNatural.prototype, "getAnoNascimento", {
        get: function () {
            return this.anoNascimento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PessoaNatural.prototype, "getIdade", {
        get: function () {
            return this.idade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PessoaNatural.prototype, "setIdade", {
        set: function (idade) {
            this.idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    PessoaNatural.prototype.mostrarDocumentos = function () {
        return [
            { tipo: "CPF", numero: this.numeroCPF },
            { tipo: "ID", numero: this.numeroID.toString() },
            { tipo: "Título Eleitoral", numero: this.tituloEleitor },
        ];
    };
    return PessoaNatural;
}());
var CalcularIdade = /** @class */ (function () {
    function CalcularIdade() {
    }
    CalcularIdade.calcularIdade = function (pessoa) {
        var dataAtual = new Date();
        var nascimento = new Date(pessoa.getAnoNascimento, 0, 1);
        var idade = dataAtual.getFullYear() - nascimento.getFullYear();
        if (dataAtual.getMonth() < nascimento.getMonth() ||
            (dataAtual.getMonth() === nascimento.getMonth() &&
                dataAtual.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    };
    return CalcularIdade;
}());
var GerarCPF = /** @class */ (function () {
    function GerarCPF() {
    }
    GerarCPF.gerarCPF = function () {
        var bloco1 = Math.floor(Math.random() * 900) + 100;
        var bloco2 = Math.floor(Math.random() * 900) + 100;
        var bloco3 = Math.floor(Math.random() * 900) + 100;
        var digito1 = Math.floor(Math.random() * 9);
        var digito2 = Math.floor(Math.random() * 9);
        return "".concat(bloco1, ".").concat(bloco2, ".").concat(bloco3, "-").concat(digito1).concat(digito2);
    };
    return GerarCPF;
}());
var GerarIdentidade = /** @class */ (function () {
    function GerarIdentidade() {
    }
    GerarIdentidade.numeroIdentidade = function () {
        return Math.floor(1000000000 + Math.random() * 9000000000).toString();
    };
    return GerarIdentidade;
}());
var GerarNumeroTitulo = /** @class */ (function () {
    function GerarNumeroTitulo() {
    }
    GerarNumeroTitulo.numeroTitulo = function () {
        var bloco1 = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
        var bloco2 = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
        var bloco3 = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
        return "".concat(bloco1, " ").concat(bloco2, " ").concat(bloco3);
    };
    return GerarNumeroTitulo;
}());
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }
    var calcDigito = function (base, pesos) {
        return pesos
            .reduce(function (soma, peso, i) { return soma + parseInt(base[i]) * peso; }, 0) %
            11 < 2
            ? 0
            : 11 - (pesos.reduce(function (soma, peso, i) { return soma + parseInt(base[i]) * peso; }, 0) % 11);
    };
    var digito1 = calcDigito(cpf.slice(0, 9), [10, 9, 8, 7, 6, 5, 4, 3, 2]);
    var digito2 = calcDigito(cpf.slice(0, 10), [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]);
    return cpf[9] === digito1.toString() && cpf[10] === digito2.toString();
}
// Testando o código corrigido
var pessoa = new PessoaNatural("Wesley Medeiros da Rosa", 1998);
pessoa.numeroCPF = GerarCPF.gerarCPF();
pessoa.numeroID = parseInt(GerarIdentidade.numeroIdentidade());
pessoa.tituloEleitor = GerarNumeroTitulo.numeroTitulo();
pessoa.setIdade = CalcularIdade.calcularIdade(pessoa);
console.log(pessoa.mostrarDocumentos());
console.log("Validação CPF:", validarCPF(pessoa.numeroCPF));
var minhaEmpresa = new Empresa("WesleyLTDA", 10000);
minhaEmpresa.setNovoCNPJ = GerarCNPJ.gerarCNPJ();
console.log(minhaEmpresa.getNumeroCNPJ);
console.log(minhaEmpresa.mostrarInfoEmpresa());
console.log(minhaEmpresa.iterarInfoEmpresa());
