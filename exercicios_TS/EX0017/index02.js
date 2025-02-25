// Exemplo de injeção de dependência ultilizando classes abstratas
// ABSTRACT CLASS pode fornecer implementações parciais ou completas de métodos, mas não pode ser instanciada diretamente.
// Se a classe é abstrata, seu métodos e propriedades devem ser abstratos
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
// Classe abstrata para abstração
var EnvioDeNotificacao = /** @class */ (function () {
    function EnvioDeNotificacao() {
    }
    return EnvioDeNotificacao;
}());
// Implementação concreta de envio por Email
var NotificarPorEmail = /** @class */ (function (_super) {
    __extends(NotificarPorEmail, _super);
    function NotificarPorEmail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificarPorEmail.prototype.enviarNotificacao = function (notificacao, mensagem) {
        console.log("Email: ".concat(notificacao, " \n Mensagem: ").concat(mensagem));
    };
    return NotificarPorEmail;
}(EnvioDeNotificacao));
// Implementação concreta de envio por SMS
var NotificarPorSMS = /** @class */ (function (_super) {
    __extends(NotificarPorSMS, _super);
    function NotificarPorSMS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificarPorSMS.prototype.enviarNotificacao = function (notificacao, mensagem) {
        console.log("SMS: ".concat(notificacao, " \n Mensagem: ").concat(mensagem));
    };
    return NotificarPorSMS;
}(EnvioDeNotificacao));
// Classe de alto nível
var NotificacaoDoUsuario = /** @class */ (function () {
    function NotificacaoDoUsuario(servicoNotificacaoUsuario) {
        this.servicoNotificacaoUsuario = servicoNotificacaoUsuario;
    }
    // Método para enviar a notificação
    NotificacaoDoUsuario.prototype.notificarUsuario = function (notificacao, mensagem) {
        this.servicoNotificacaoUsuario.enviarNotificacao(notificacao, mensagem);
    };
    return NotificacaoDoUsuario;
}());
// Usando as classes
var notificacaoPorEmail = new NotificarPorEmail();
var usuarioPorEmail = new NotificacaoDoUsuario(notificacaoPorEmail);
usuarioPorEmail.notificarUsuario("usuario@example.com", "Seu pedido foi enviado!");
var notificaPorSMS = new NotificarPorSMS;
var usuarioPorSMS = new NotificacaoDoUsuario(notificaPorSMS);
usuarioPorSMS.notificarUsuario("1234567890", "Seu pedido foi enviado!");
