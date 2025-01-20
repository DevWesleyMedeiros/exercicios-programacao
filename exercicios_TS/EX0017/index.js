"use strict";
// Exemplo de injeção de dependência ultilizando interfaces
// Uma INTERFACE mais leve, usada para definir apenas contratos.
// Classes de baixo nível operacional que envia Email - implementação concreta
class NotificacaoEmail {
    enviarNotificacao(notificacaoPorEmail, mensagem) {
        console.log(`Email: ${notificacaoPorEmail} \n Mensagem: ${mensagem}`);
    }
}
// Classes de baixo nível operacional que envia SMS - implementação concreta
class NotificacaoSMS {
    enviarNotificacao(notificacaoPorSMS, mensagem) {
        console.log(`SMS: ${notificacaoPorSMS} \n Mensagem: ${mensagem}`);
    }
}
// Classe de alto nível (não depende mais diretamente das implementações concretas - baixo nível, mas sim da abstração EnvioNotificacao)
class NotificacaoUsuario {
    servicoNotificacaoUsuario;
    // Parte do código que faz um injeção de dependência
    constructor(servicoNotificacaoUsuario) {
        this.servicoNotificacaoUsuario = servicoNotificacaoUsuario;
    }
    // Método para enviar a notificação da própria classe
    notificarUsuario(notificacao, mensagem) {
        this.servicoNotificacaoUsuario.enviarNotificacao(notificacao, mensagem);
    }
}
// Enviando notificações por Email
const email = new NotificacaoEmail();
const usuarioEmail = new NotificacaoUsuario(email);
usuarioEmail.notificarUsuario("devwesleymedeiros@outlook.com", "Email");
// Enviado uma notificação por mensagem
const mensagem = new NotificacaoSMS();
const usuarioSMS = new NotificacaoUsuario(mensagem);
usuarioSMS.notificarUsuario("Olá, mundo", "SMS");
/*
"NotificacaoUsuario" depende da abstração "EnvioNotificacao", e não das implementações concretas de "NotificacaoEmail" ou "NotificacaoSMS". Isso permite que você substitua a implementação concreta sem modificar a classe NotificacaoUsuario.

As implementações concretas, como "NotificacaoEmail" e "NotificacaoSMS", implementam a interface "EnvioNotificacao", fornecendo o comportamento específico de como enviar a notificação.
*/
/*
Pode-se resumir este princípio em quatro fases
Criar uma abstração (Interface ou Classe Abstrata):

1 - Crie uma interface ou classe abstrata que define os métodos ou comportamentos comuns que a classe de baixo nível precisa implementar. Esta abstração serve como um contrato que as classes de baixo nível devem seguir, mas sem fornecer detalhes de implementação.
Criar as classes de baixo nível que implementam a abstração:

2 - As classes concretas devem implementar a abstração criada no primeiro passo. Elas fornecem a implementação específica do comportamento definido na interface ou classe abstrata.
Criar as classes de alto nível que dependem da abstração:

3 - As classes de alto nível (normalmente, as classes que implementam a lógica de negócios) devem depender da abstração e não das implementações concretas. Isso significa que a classe de alto nível deve ser projetada para utilizar objetos que seguem a abstração, e não detalhes específicos das classes de baixo nível.
Injetar as dependências na classe de alto nível:

4 -As instâncias das classes de baixo nível são criadas (geralmente, por meio de injeção de dependência) e injetadas na classe de alto nível. Isso garante que a classe de alto nível use o comportamento da classe de baixo nível de forma desacoplada.
*/ 
