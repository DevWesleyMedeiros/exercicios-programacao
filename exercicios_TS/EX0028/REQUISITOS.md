# Sistema de Lista de Jogos Favoritos - Requisitos

## 📋 Visão Geral do Projeto

**Objetivo:** Desenvolver um mini-sistema web que permite aos usuários criar, visualizar e gerenciar fichas de perfil de jogadores (gamers) com suas listas de jogos favoritos em ordem alfabética.

**Escopo:** Aplicação frontend interativa com suporte a gerenciamento de múltiplos perfis de usuários.

**Stack Tecnológico:** React 18+, TypeScript, CSS Modules com SASS/SCSS, Vite, Bun (Runtime)

---

## 🎮 Protótipo de Exibição

```code
------------ Jogador [nickname] ----------
Nome Real: [nome real do jogador]
Jogos Favoritos:
🎮 Game 1
🎮 Game 2
🎮 Game 3
(em ordem alfabética)
-------------------------------------
```

---

## 📌 Requisitos Funcionais

### RF001 - Inicializar Lista de Jogos

**Descrição:** O sistema deve permitir criar uma nova lista vazia de jogos favoritos vinculada a um perfil de jogador.

**História do Usuário:**

```code
Como um novo usuário
Eu quero iniciar uma lista vazia de jogos
Para poder começar a adicionar meus games favoritos
```

**Critérios de Aceitação:**

- [ ] Existir um formulário ou interface clara para criar um novo perfil de jogador
- [ ] O formulário deve solicitar o nome real e nickname do jogador
- [ ] Ao criar o perfil, a lista de jogos deve estar vazia
- [ ] Uma mensagem de confirmação deve ser exibida ao criar o perfil com sucesso

**Comportamento Esperado:**

- Sistema inicializa um objeto `Player` gerenciado via contexto React ou estado
- Interface apresenta campos de entrada para dados do jogador com validações em tempo real
- Validação de campos obrigatórios antes de criar o perfil
- Estado atualizado via useState e renderizado automaticamente

---

### RF002 - Visualizar Lista de Jogos

**Descrição:** O sistema deve exibir a ficha completa do jogador com todos os seus jogos favoritos em ordem alfabética.

**História do Usuário:**

```code
Como um usuário
Eu quero visualizar a ficha com meu perfil e lista de jogos
Para conferir todos os meus games favoritos organizados
```

**Critérios de Aceitação:**

- [ ] A ficha deve exibir nome real e nickname do jogador
- [ ] Os jogos devem aparecer em ordem alfabética obrigatoriamente
- [ ] Cada jogo deve ter um ícone de console (🎮) à esquerda
- [ ] O total de jogos deve ser exibido
- [ ] Múltiplas fichas devem ser exibidas uma abaixo da outra sem conflitos

**Comportamento Esperado:**

- Renderização dinâmica do componente PlayerCard conforme mudanças de estado
- Re-render automático ao adicionar/remover/editar jogos
- Exibição limpa e organizada com CSS Modules para encapsulamento de estilos

---

### RF003 - Adicionar Jogos à Lista

**Descrição:** O sistema deve permitir que o usuário adicione novos jogos à sua lista de favoritos com validações apropriadas.

**História do Usuário:**

```code
Como um usuário
Eu quero adicionar novos jogos à minha lista de favoritos
Para manter meu perfil atualizado com meus games preferidos
```

**Critérios de Aceitação:**

- [ ] Deve existir um campo de entrada para o nome do jogo
- [ ] Deve validar se o jogo já existe na lista (evitar duplicatas)
- [ ] Deve validar se o campo não está vazio
- [ ] O jogo deve ser adicionado com sucesso
- [ ] A lista deve ser automaticamente reordenada em ordem alfabética
- [ ] Uma mensagem de sucesso deve ser exibida
- [ ] A ficha deve atualizar em tempo real

**Comportamento Esperado:**

- Campo de entrada limpo após sucesso via reset de estado
- Jogo inserido no array de estado e lista reordenada via usePlayer hook
- Tratamento de erros com mensagens amigáveis exibidas via Toast
- Re-render automático do componente GameList

---

### RF004 - Remover Jogos da Lista

**Descrição:** O sistema deve permitir que o usuário remova jogos que não deseja mais manter em sua lista.

**História do Usuário:**

```code
Como um usuário
Eu quero remover jogos que não gosto mais da minha lista
Para manter apenas meus favoritos atuais
```

**Critérios de Aceitação:**

- [ ] Cada jogo deve ter um botão ou ação para remover
- [ ] Deve existir uma confirmação antes de remover (opcional)
- [ ] O jogo deve ser removido com sucesso da lista
- [ ] A lista deve permanecer ordenada alfabeticamente
- [ ] Uma mensagem de confirmação deve ser exibida
- [ ] A ficha deve atualizar imediatamente

**Comportamento Esperado:**

- Remoção via atualização de estado sem recarregar a página (SPA)
- Atualização visual instantânea via re-render do componente
- Notificação de sucesso exibida via Toast component

---

### RF005 - Ícone de Console ao Lado de Cada Jogo

**Descrição:** O sistema deve exibir um ícone visual (símbolo de controle de videogame) ao lado esquerdo de cada jogo na lista.

**História do Usuário:**

```code
Como um usuário visual
Eu quero ver um ícone de console ao lado de cada jogo
Para uma interface mais amigável e intuitiva
```

**Critérios de Aceitação:**

- [ ] Cada jogo deve ter um ícone (🎮 ou SVG) renderizado via componente
- [ ] O ícone deve estar alinhado corretamente usando CSS Modules
- [ ] O ícone deve ter tamanho consistente via variáveis SCSS
- [ ] O ícone deve ser acessível (alt text ou ARIA labels)

**Comportamento Esperado:**

- Ícone renderizado antes do nome do jogo
- Estilo consistente e profissional
- Manutenção do alinhamento visual

---

### RF006 - Editar Dados do Jogador

**Descrição:** O sistema deve permitir que o usuário edite seu nome real ou nickname após criação do perfil.

**História do Usuário:**

```code
Como um usuário
Eu quero editar meu nome real ou nickname
Para corrigir erros ou atualizar minha informação de perfil
```

**Critérios de Aceitação:**

- [ ] Existir um botão ou link para editar dados do perfil
- [ ] Um modal ou formulário deve aparecer com dados atuais
- [ ] Campos de nome e nickname devem ser editáveis
- [ ] Validações devem ser aplicadas (não vazios)
- [ ] Alterações devem ser salvas e refletidas imediatamente
- [ ] Opção para cancelar a edição sem salvar

**Comportamento Esperado:**

- Modal React renderizado via componente Modal reutilizável
- Edição com atualização de estado em tempo real
- Validação de dados antes de confirmar via hook de validação
- Opção para cancelar dispara "cleanup" de estado

---

### RF007 - Persistência de Dados

**Descrição:** O sistema deve armazenar os perfis e listas de jogos para que persistam entre sessões.

**História do Usuário:**

```code
Como um usuário
Eu quero que meus perfis e jogos sejam salvos
Para não perder meus dados quando fechar a aplicação
```

**Critérios de Aceitação:**

- [ ] Dados devem ser armazenados no LocalStorage
- [ ] Ao recarregar a página, os perfis devem ser restaurados
- [ ] A lista de jogos deve estar intacta
- [ ] Suportar múltiplos perfis simultaneamente

**Comportamento Esperado:**

- Uso do hook customizado useStorage para sincronizar estado com LocalStorage
- Efeito colateral (useEffect) salva dados ao atualizar o estado
- Restauração de dados ao montar o componente App via useEffect
- Suporte a múltiplos perfis via array gerenciado no estado

---

### RF008 - Listar Todos os Perfis

**Descrição:** O sistema deve exibir uma lista com todos os perfis de jogadores cadastrados.

**História do Usuário:**

```code
Como um usuário
Eu quero ver todos os perfis de jogadores cadastrados
Para alternar entre eles ou gerenciar múltiplos perfis
```

**Critérios de Aceitação:**

- [ ] Deve existir uma seção com lista de todos os perfis
- [ ] Cada perfil deve mostrar nickname e nome real
- [ ] Deve ser possível selecionar um perfil para visualizá-lo
- [ ] Deve existir uma opção para deletar um perfil

**Comportamento Esperado:**

- Componente PlayerList renderiza todos os perfis em tempo real
- Seleção de perfil atualiza estado global via contexto ou prop drilling
- Opção de deletar abre Modal de confirmação

---

### RF009 - Deletar Perfil Completo

**Descrição:** O sistema deve permitir a exclusão completa de um perfil e sua lista de jogos.

**História do Usuário:**

```code
Como um usuário
Eu quero deletar meu perfil
Para remover todos os meus dados do sistema
```

**Critérios de Aceitação:**

- [ ] Deve existir botão para deletar perfil
- [ ] Deve haver confirmação antes de deletar (obrigatório)
- [ ] Ao confirmar, perfil e todos os dados devem ser removidos
- [ ] A interface deve voltar ao estado inicial
- [ ] Mensagem de sucesso deve ser exibida

**Comportamento Esperado:**

- Modal de confirmação renderizado via Modal component
- Remoção do LocalStorage via useStorage hook
- Retorno à tela inicial com notificação Toast
- Estado atualizado e componentes renderizados

---

## ✅ Requisitos Não-Funcionais

### RNF001 - Performance

- Carregamento dos perfis em menos de 1 segundo
- Renderização da lista em menos de 500ms
- Suporte a até 1000 jogos por perfil sem degradação perceptível
- Bun oferece startup time mais rápido que Node.js para desenvolvimento

### RNF002 - Usabilidade

- Interface intuitiva sem necessidade de tutorial
- Acessibilidade WCAG 2.1 nível AA
- Responsivo para mobile, tablet e desktop
- Tempo de aprendizado menor que 5 minutos

### RNF003 - Segurança

- Validação de entrada em todos os campos
- Proteção contra XSS (sanitização de strings)
- Dados armazenados apenas localmente

### RNF004 - Manutenibilidade

- Componentes React modularizados e reutilizáveis
- Nomenclatura consistente e documentação clara
- Separação de concerns (Componentes, Hooks, Estilos)
- Uso de TypeScript com tipagem forte
- Suporte nativo a TypeScript do Bun facilita desenvolvimento

### RNF005 - Compatibilidade

- Suporte para navegadores modernos (Chrome, Firefox, Safari, Edge)
- Suporte a versões recentes de React (18+)
- CSS3 com suporte a CSS Modules e SASS
- Runtime Bun 1.x+ com suporte nativo a TypeScript e JSX

---

## 🏗️ Arquitetura Recomendada

### Estrutura de Arquivos

```code
EX0028/
├── index.html                           # HTML raiz
├── vite.config.ts                       # Configuração do Vite para Bun
├── tsconfig.json                        # Configuração TypeScript (Bun nativo)
├── bunfig.toml                          # Configuração específica do Bun (opcional)
├── package.json                         # Dependências e scripts Bun
├── bun.lockb                            # Lock file do Bun (binário, mais rápido)
├── src/
│   ├── App.tsx                          # Componente principal
│   ├── main.tsx                         # Ponto de entrada React
│   ├── components/
│   │   ├── PlayerCard/
│   │   │   ├── PlayerCard.tsx           # Componente de ficha do jogador
│   │   │   └── PlayerCard.module.scss   # Estilos CSS Modules
│   │   ├── GameList/
│   │   │   ├── GameList.tsx             # Componente de lista de jogos
│   │   │   └── GameList.module.scss     # Estilos CSS Modules
│   │   ├── GameForm/
│   │   │   ├── GameForm.tsx             # Formulário para adicionar jogos
│   │   │   └── GameForm.module.scss     # Estilos CSS Modules
│   │   ├── PlayerForm/
│   │   │   ├── PlayerForm.tsx           # Formulário para criar/editar perfil
│   │   │   └── PlayerForm.module.scss   # Estilos CSS Modules
│   │   ├── PlayerList/
│   │   │   ├── PlayerList.tsx           # Listagem de perfis
│   │   │   └── PlayerList.module.scss   # Estilos CSS Modules
│   │   ├── Modal/
│   │   │   ├── Modal.tsx                # Componente de modal
│   │   │   └── Modal.module.scss        # Estilos CSS Modules
│   │   └── Toast/
│   │       ├── Toast.tsx                # Notificações do sistema
│   │       └── Toast.module.scss        # Estilos CSS Modules
│   ├── hooks/
│   │   ├── usePlayer.ts                 # Hook customizado para gerenciar jogador
│   │   ├── usePlayerList.ts             # Hook para gerenciar lista de jogadores
│   │   ├── useStorage.ts                # Hook para LocalStorage
│   │   └── useToast.ts                  # Hook para notificações
│   ├── types/
│   │   └── index.ts                     # Tipos e Interfaces TypeScript
│   ├── utils/
│   │   ├── storage.ts                   # Funções de persistência
│   │   ├── validation.ts                # Funções de validação
│   │   └── sorting.ts                   # Funções de ordenação
│   ├── styles/
│   │   ├── global.scss                  # Estilos globais
│   │   ├── variables.scss               # Variáveis SCSS
│   │   └── mixins.scss                  # Mixins SCSS
│   └── App.module.scss                  # Estilos do App principal
└── REQUISITOS.md                        # Este arquivo
```

### Componentes React Principais

- **App:** Componente raiz gerenciando estado global e roteamento
- **PlayerCard:** Exibe a ficha do jogador com seus dados e lista de jogos
- **GameList:** Renderiza a lista de jogos em ordem alfabética
- **GameForm:** Formulário para adicionar novos jogos
- **PlayerForm:** Formulário para criar ou editar perfil de jogador
- **PlayerList:** Lista todos os perfis cadastrados
- **Modal:** Componente reutilizável para modais (edição, confirmação, etc)
- **Toast:** Notificações do sistema para feedback ao usuário

### Hooks Customizados

- **usePlayer:** Gerencia estado do jogador atual
- **usePlayerList:** Gerencia lista de todos os jogadores
- **useStorage:** Abstração para LocalStorage com sincronização
- **useToast:** Gerencia notificações e mensagens

### Tipos TypeScript Principais

```typescript
interface Game {
  id: string
  name: string
  addedAt: Date
}

interface Player {
  id: string
  name: string
  nickname: string
  games: Game[]
  createdAt: Date
  updatedAt: Date
}

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: string
  message: string
  type: ToastType
  duration?: number
}
```

---

## 📦 Dependências Recomendadas

### Setup Inicial com Bun

```bash
# Instalar Bun (se não tiver)
curl https://bun.sh/install | bash

# Criar projeto com Bun
bun create vite@latest . -- --template react-ts

# Instalar dependências
bun install
```

### Principais

- **react:** 18.x - Biblioteca principal
- **react-dom:** 18.x - Renderização no DOM
- **typescript:** 5.x - Linguagem tipada (Bun suporta nativamente)

### Build & Development

- **vite:** 5.x - Build tool e dev server
- **@vitejs/plugin-react:** Plugin do Vite para React
- **sass:** Pré-processador SCSS

### Linting & Formatting (Opcional)

- **eslint:** Para linting de código (executar com `bun run eslint`)
- **prettier:** Para formatação automática
- **@typescript-eslint/eslint-plugin:** Plugin ESLint para TypeScript

### Instalação de Dependências com Bun

```bash
# Instalar dependências principais
bun add react react-dom
bun add sass

# Instalar dependências de desenvolvimento
bun add -D vite @vitejs/plugin-react typescript @types/react @types/react-dom
bun add -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Exemplo `package.json` com Bun

```json
{
  "name": "lista-jogos-favoritos",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext ts,tsx",
    "format": "prettier --write \"src/**/*.{ts,tsx,scss}\"",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "sass": "^1.70.0",
    "typescript": "^5.0.0",
    "vite": "^5.0.0"
  }
}
```

### Configuração do Bun (`bunfig.toml`)

```toml
# bunfig.toml - Configurações específicas do Bun

[test]
# Configurações de teste (opcional)
root = "src"

[packages]
# Usar npm registry por padrão
registry = "npm"

[dev]
# Usar HMR em desenvolvimento
hmr = true
```

### Comando para Executar Scripts

```bash
# Iniciar servidor de desenvolvimento
bun run dev

# Build para produção
bun run build

# Preview da build de produção
bun run preview

# Lint do código
bun run lint

# Formatar código
bun run format

# Type checking com TypeScript
bun run type-check
```

---

## ⚡ Vantagens do Bun para Este Projeto

- **Suporte Nativo a TypeScript:** Executar arquivos `.ts` e `.tsx` diretamente sem compilação
- **Gerenciador de Pacotes Rápido:** Instalação de dependências significativamente mais rápida que npm/yarn
- **JSX Nativo:** Suporte direto a JSX sem configuração adicional
- **Build Rápido:** Vite com Bun oferece tempo de build otimizado
- **Ferramentas Integradas:** Suporte a testes, bundles e outras ferramentas fora da caixa
- **HMR Eficiente:** Hot Module Replacement mais rápido durante desenvolvimento
- **Compatibilidade npm:** Totalmente compatível com pacotes npm existentes

## 🔧 Diferenças Importantes do Bun

### Em relação ao Node.js

1. **Sem `node_modules` por padrão:** Bun usa cache global para dependências
2. **Sem arquivo `package-lock.json`:** Usa `bun.lockb` (binário, mais rápido)
3. **TypeScript transparente:** Não precisa compilar `.ts` para `.js`
4. **Variáveis de ambiente:** Bun suporta `.env` automaticamente
5. **APIs Web:** Bun implementa APIs Web padrão como fetch, WebSocket, etc.

### Requisitos do Sistema

- **Bun 1.x+** (download em https://bun.sh)
- Windows, macOS ou Linux
- Node.js **não é necessário** para rodar projetos Bun

---

## 📊 Critérios de Sucesso

- ✅ Todos os requisitos funcionais implementados
- ✅ Interface limpa e responsiva
- ✅ Sem erros no console
- ✅ Dados persistem após refresh
- ✅ Código modularizado e bem documentado
- ✅ Validações funcionando corretamente
- ✅ Projeto rodando perfeitamente com Bun

---

## 🔄 Fluxo de Usuário Esperado

1. Usuário acessa a aplicação
2. Sistema carrega perfis salvos (se existirem)
3. Usuário escolhe criar novo perfil ou selecionar existente
4. Preenche dados (nome e nickname)
5. Adiciona jogos à lista
6. Sistema ordena automaticamente em ordem alfabética
7. Usuário visualiza ficha com todos os dados
8. Pode editar, remover ou deletar perfil
9. Dados são automaticamente salvos

---

## 📝 Notas Adicionais

- A ordenação alfabética deve ser **case-insensitive**
- Validar contra nomes de jogos duplicados
- Manter consistência visual em todas as operações
- Considerar adicionar temas (light/dark) em versões futuras
- Possibilidade de exportar dados em futuras versões
- **Bun-specific:** Remover `bun.lockb` do .gitignore se desejar versioná-lo (recomendado)
- **Bun-specific:** Usar `bun run` em vez de `npm run` para executar scripts
- **Bun-specific:** Bun suporta importação direta de JSON e arquivos estáticos
- **Bun-specific:** Para debugging, use `bun --inspect` ou `bun --inspect-brk`

---

**Versão:** 2.0 (com Bun)  
**Data de Atualização:** 22 de abril de 2026  
**Status:** Pronto para Desenvolvimento com Bun
