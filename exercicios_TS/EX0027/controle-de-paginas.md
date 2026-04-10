# Sistema de Controle de Páginas de Livro

## 📋 Visão Geral

Desenvolver um **mini-sistema** que gerencia páginas de um livro, permitindo navegação eficiente entre as páginas através de operações simples e seguras.

---

## 🎯 Funcionalidades Principais

1. **Avançar página** — Move para a próxima página do livro
2. **Voltar página** — Move para a página anterior do livro
3. **Ir para página especificada** — Navega diretamente para uma página específica

---

## 📐 Especificações do Sistema

### Restrições de Operação

- ❌ O sistema **não pode avançar** para uma página que não existe
- ❌ O sistema **não pode voltar** para uma página que não existe
- ✅ O sistema **deve informar** a página atual após cada ação
- ✅ O sistema **deve gerenciar** livros com número de páginas variáveis (10, 100, 200+ páginas)

### Suporte a Múltiplos Formatos

O sistema deve ser flexível para gerenciar:

- Livros com **poucos capítulos** (< 10 páginas)
- Livros **padrão** (100-300 páginas)
- Livros **extensos** (500+ páginas)

---

## 🏗️ Inicialização do Objeto

Ao instanciar um objeto do sistema, o usuário deve informar:

| Parâmetro                   | Tipo     | Descrição                 | Padrão      |
| --------------------------- | -------- | ------------------------- | ----------- |
| **Título do Livro**         | `string` | Nome/título da obra       | Obrigatório |
| **Número Total de Páginas** | `number` | Total de páginas do livro | Obrigatório |
| **Página Atual**            | `number` | Página inicial de leitura | `1`         |

---

## 💻 Exemplos de Uso

```typescript
const livro = new Livro('O Senhor dos Anéis', 500)

// Avançar para a próxima página
livro.avancarPagina()
// Resultado: Página atual: 2

// Voltar para página anterior
livro.voltarPagina()
// Resultado: Página atual: 1

// Ir para página específica (válida)
livro.irParaPagina(100)
// Resultado: Página atual: 100

// Tentar ir para página inexistente
livro.irParaPagina(501)
// Resultado: Página atual: 100 (operação rejeitada)
```

---

## ✨ Requisitos de Implementação

- [ ] Criar classe `Livro` com construtor apropriado
- [ ] Implementar método `avancarPagina()`
- [ ] Implementar método `voltarPagina()`
- [ ] Implementar método `irParaPagina(pagina: number)`
- [ ] Validar limites de páginas para cada operação
- [ ] Exibir feedback da página atual ao usuário
- [ ] Suportar livros de variados tamanhossuário
- [ ] Suportar livros de variados tamanhos
