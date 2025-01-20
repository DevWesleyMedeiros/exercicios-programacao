"use strict";
// Exemplo de injeção de dependência ultilizando classes abstratas
// ABSTRACT CLASS pode fornecer implementações parciais ou completas de métodos, mas não pode ser instanciada diretamente.
// Se a classe é abstrata, seu métodos e propriedades devem ser abstratos
// Classe abstrata para abstração
class EnvioDeNotificacao {
}
// Implementação concreta de envio por Email
class NotificarPorEmail extends EnvioDeNotificacao {
    enviarNotificacao(notificacao, mensagem) {
        console.log(`Email: ${notificacao} \n Mensagem: ${mensagem}`);
    }
}
// Implementação concreta de envio por SMS
class NotificarPorSMS extends EnvioDeNotificacao {
    enviarNotificacao(notificacao, mensagem) {
        console.log(`SMS: ${notificacao} \n Mensagem: ${mensagem}`);
    }
}
// Classe de alto nível
class NotificacaoDoUsuario {
    servicoNotificacaoUsuario;
    constructor(servicoNotificacaoUsuario) {
        this.servicoNotificacaoUsuario = servicoNotificacaoUsuario;
    }
    // Método para enviar a notificação
    notificarUsuario(notificacao, mensagem) {
        this.servicoNotificacaoUsuario.enviarNotificacao(notificacao, mensagem);
    }
}
// Usando as classes
const notificacaoPorEmail = new NotificarPorEmail();
const usuarioPorEmail = new NotificacaoDoUsuario(notificacaoPorEmail);
usuarioPorEmail.notificarUsuario("usuario@example.com", "Seu pedido foi enviado!");
const notificaPorSMS = new NotificarPorSMS;
const usuarioPorSMS = new NotificacaoDoUsuario(notificaPorSMS);
usuarioPorSMS.notificarUsuario("1234567890", "Seu pedido foi enviado!");
