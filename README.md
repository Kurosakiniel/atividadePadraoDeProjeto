Mini Sistema de Chamados
Descrição

Este projeto consiste em um mini sistema de chamados desenvolvido para a atividade MAP de Padrões de Projeto.

O sistema permite:

Abrir chamados;
Informar título, descrição e prioridade;
Validar os dados antes da abertura;
Alterar o estado do chamado;
Registrar ações no histórico.

Os dados são armazenados em memória, não sendo utilizado banco de dados.

Linguagem Utilizada
HTML
CSS
JavaScript (ES6 Modules)
Formato da Aplicação

Aplicação Web.

Funcionalidades
Abrir Chamado

Permite cadastrar um chamado informando:

Título
Descrição
Prioridade
Validação

O sistema verifica se os campos obrigatórios foram preenchidos antes de criar o chamado.

Mudança de Estado

Os chamados podem avançar entre os estados:

Aberto
↓
Confirmando Atendimento
↓
Em Atendimento
↓
Finalizado
Histórico

Toda alteração relevante é registrada automaticamente no histórico do chamado.

Exemplos:

Chamado criado;
Alteração para Confirmando Atendimento;
Alteração para Em Atendimento;
Alteração para Finalizado.
Padrões de Projeto Utilizados
1. Facade (Estrutural)

Arquivo:

js/facade/ChamadoFacade.js

Responsável por centralizar as operações do sistema.

Funções principais:

abrirChamado()
listarChamados()
buscarChamado()
avancarStatus()
adicionarHistorico()

A interface se comunica apenas com a Facade, sem acessar diretamente as classes internas do sistema.

2. State (Comportamental)

Arquivos:

js/states/AbertoState.js
js/states/ConfirmandoAtendimentoState.js
js/states/EmAtendimentoState.js
js/states/FinalizadoState.js

Responsável por controlar o comportamento do chamado conforme seu estado atual.

Cada estado possui sua própria regra de transição, evitando múltiplos condicionais espalhados pelo código.

Estrutura do Projeto
chamados/
│
├── index.html
│
├── assets/
│   └── css/
│       └── style.css
│
├── js/
│   ├── models/
│   │   └── Chamado.js
│   │
│   ├── states/
│   │   ├── AbertoState.js
│   │   ├── ConfirmandoAtendimentoState.js
│   │   ├── EmAtendimentoState.js
│   │   └── FinalizadoState.js
│   │
│   ├── facade/
│   │   └── ChamadoFacade.js
│   │
│   └── main.js
│
└── README.md
Como Executar
Baixe ou clone o projeto.
Abra a pasta no Visual Studio Code.
Instale a extensão Live Server.
Clique com o botão direito no arquivo index.html.
Selecione "Open with Live Server".

O sistema será aberto no navegador.