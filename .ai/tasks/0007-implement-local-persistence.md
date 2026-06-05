# Tarefa 0007 — Implementar persistência local

## Objetivo

Implementar persistência local limitada ao navegador para permitir que o formulário de novo atendimento crie registros locais e que a listagem exiba os atendimentos criados pelo usuário.

## Contexto

A tarefa 0006 avaliou a persistência local e gerou solicitação de decisão humana. A decisão formal registrada em `.ai/decisions/0001-local-persistence-decision.md` aprovou a persistência local limitada ao navegador, usando Pinia e um serviço simples de `localStorage`.

Esta tarefa corresponde à versão 0.5.1 do roadmap: implementação da persistência local aprovada. A implementação deve transformar o fluxo atual, que é apenas visual, em um fluxo local simples de cadastro e listagem, sem backend, autenticação, banco de dados, permissões ou CRUD completo.

O handoff `0007-po-to-architect-implement-local-persistence.md` orienta que a próxima entrega seja pequena e limitada: criar registros locais a partir do formulário, persistir no navegador e exibir esses registros na listagem.

## Escopo

Implementar apenas:

- store de atendimentos com Pinia;
- serviço simples para leitura e gravação em `localStorage`;
- criação local de atendimento a partir do formulário;
- geração local de `id`;
- geração local de `protocolo`;
- geração local de `dataCriacao`;
- carregamento de atendimentos persistidos ao abrir a aplicação;
- exibição dos atendimentos locais na página de listagem;
- mensagem de interface informando que os dados ficam apenas no navegador;
- ajuste da mensagem do formulário para indicar que o atendimento foi salvo localmente;
- preservação da navegação entre formulário e listagem;
- validação visual já existente para solicitante e assunto.

Dados mínimos persistidos:

- `id`;
- `protocolo`;
- `solicitante`;
- `assunto`;
- `status`;
- `dataCriacao`.

Estratégia recomendada para dados demonstrativos:

- não misturar dados demonstrativos com dados persistidos como se fossem equivalentes;
- priorizar a lista local persistida como fonte da tela de atendimentos;
- manter estado vazio claro quando não houver registros locais;
- manter `src/data/atendimentos.mock.ts` apenas se ainda for útil para referência futura, sem usá-lo como persistência.

Texto de interface recomendado:

- na listagem: `Os atendimentos exibidos ficam salvos apenas neste navegador.`;
- no formulário, após salvar: `Atendimento salvo localmente neste navegador.`;
- no estado vazio: `Nenhum atendimento local cadastrado neste navegador.`;
- evitar textos que sugiram sincronização, compartilhamento ou salvamento definitivo.

Estratégia recomendada para storage:

- usar uma chave única e descritiva no `localStorage`, por exemplo `controle-atendimentos:atendimentos`;
- isolar leitura, gravação e tratamento de erro em `src/services/atendimentosStorage.ts`;
- manter componentes sem acesso direto ao `localStorage`;
- tratar falhas de leitura ou JSON inválido de forma simples, retornando lista vazia;
- não persistir dados sensíveis.

Estratégia recomendada para protocolo:

- gerar protocolo local simples e legível;
- evitar dependência de backend ou contador global remoto;
- deixar claro no código que o protocolo é apenas local nesta fase.

## Fora do escopo

Não implementar:

- backend;
- autenticação;
- banco de dados;
- sincronização entre usuários, dispositivos ou navegadores;
- controle de permissões;
- CRUD completo;
- edição de atendimento;
- exclusão de atendimento;
- detalhamento de atendimento;
- filtros;
- relatórios;
- exportação de dados;
- upload de arquivos;
- biblioteca externa;
- alteração de stack;
- migração de dados locais;
- limpeza avançada de storage;
- tela de configuração ou administração dos dados locais.

## Arquivos esperados ou impactados

Arquivos ou pastas provavelmente impactados:

- `src/stores/atendimentos.ts`;
- `src/services/atendimentosStorage.ts`;
- `src/pages/AtendimentosPage.vue`;
- `src/pages/NovoAtendimentoPage.vue`;
- `src/components/atendimentos/AtendimentoForm.vue`;
- `src/components/atendimentos/AtendimentoList.vue`;
- `src/components/atendimentos/AtendimentoEmptyState.vue`;
- `src/types/atendimento.types.ts`;
- `src/style.css`, apenas para ajustes visuais simples;
- `README.md`, para refletir a persistência local aprovada e implementada;
- `CHANGELOG.md`, se o projeto mantiver registro da versão executada.

Arquivos que não devem ser alterados sem necessidade:

- `src/router/index.ts`;
- `src/stores/app.ts`;
- `package.json`;
- arquivos de configuração da stack.

## Critérios de aceite

- O formulário cria um atendimento local quando solicitante e assunto são preenchidos.
- O atendimento criado aparece na página de listagem.
- O atendimento criado continua disponível após recarregar a página no mesmo navegador.
- Os dados persistidos ficam limitados ao navegador local.
- A interface informa que os dados ficam apenas neste navegador.
- `id`, `protocolo` e `dataCriacao` são gerados pela aplicação.
- A store de atendimentos centraliza a lista e a criação local.
- O serviço de `localStorage` fica separado dos componentes visuais.
- Componentes visuais não acessam `localStorage` diretamente.
- A listagem não mistura dados demonstrativos com dados locais de forma ambígua.
- A chave de `localStorage` é única e descritiva para o projeto.
- Falhas simples de leitura do storage não quebram a aplicação.
- Nenhum backend, login, banco de dados ou permissão é implementado.
- Não há edição, exclusão, detalhamento, filtros, relatórios ou exportação.
- Nenhuma biblioteca externa é adicionada.
- O layout comum e a navegação existente são preservados.
- O projeto continua validando com `npm run build`.

## Resultado esperado

Ao final da tarefa, o usuário deve conseguir registrar um atendimento no formulário, visualizar esse atendimento na listagem e manter o registro após recarregar a página no mesmo navegador.

A aplicação deve continuar simples e limitada ao MVP: persistência apenas local, sem backend, autenticação, banco de dados, permissões ou CRUD completo.
