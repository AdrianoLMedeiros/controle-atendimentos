# Tarefa 0008 — Refinar persistência local

## Objetivo

Refinar a persistência local recém-implementada, garantindo que os textos da interface estejam coerentes com salvamento local real e que a leitura dos dados persistidos aceite apenas status válidos.

## Contexto

A tarefa 0007 implementou persistência local limitada ao navegador, conforme decisão aprovada em `.ai/decisions/0001-local-persistence-decision.md`.

O produto agora possui store de atendimentos com Pinia, serviço isolado para `localStorage`, criação local de registros a partir do formulário, geração local de `id`, `protocolo` e `dataCriacao`, carregamento de registros persistidos e listagem baseada em dados locais.

O review `0007-implement-local-persistence-review.md` aprovou a entrega e não identificou impedimentos para avanço, mas apontou pendências de baixa prioridade: textos que ainda sugerem validação apenas visual, validação incompleta do status lido do storage e ausência de registro da entrega 0007 no `CHANGELOG.md`.

Esta tarefa corresponde à versão 0.5.2 do roadmap: refinamentos pós-persistência local.

## Escopo

Implementar apenas:

- atualizar o texto principal da página de novo atendimento para explicar que o atendimento será salvo apenas neste navegador;
- atualizar o texto do botão principal do formulário para comunicar salvamento local;
- manter a mensagem de sucesso coerente com persistência local no navegador;
- reforçar a validação dos dados lidos do `localStorage`;
- aceitar apenas status previstos:
  - `novo`;
  - `em_andamento`;
  - `concluido`;
- ignorar registros locais inválidos sem quebrar a aplicação;
- preservar o fluxo atual de cadastro local e listagem local;
- atualizar `CHANGELOG.md` com a entrega da tarefa 0007, se ainda não estiver registrada;
- manter comunicação clara de que os dados ficam apenas no navegador.

Textos recomendados:

- botão principal do formulário: `Salvar localmente`;
- texto da página de novo atendimento: `Preencha os dados essenciais para salvar um atendimento neste navegador.`;
- mensagem de sucesso: `Atendimento salvo localmente neste navegador.`;

## Fora do escopo

Não implementar:

- backend;
- autenticação;
- banco de dados;
- sincronização entre usuários, dispositivos ou navegadores;
- controle de permissões;
- edição de atendimento;
- exclusão de atendimento;
- detalhamento de atendimento;
- filtros;
- relatórios;
- exportação de dados;
- upload de arquivos;
- biblioteca externa;
- alteração de stack;
- novo modelo de dados;
- migração de dados locais;
- limpeza manual de storage;
- tela de administração de dados locais.

## Arquivos esperados ou impactados

Arquivos ou pastas provavelmente impactados:

- `src/pages/NovoAtendimentoPage.vue`;
- `src/components/atendimentos/AtendimentoForm.vue`;
- `src/services/atendimentosStorage.ts`;
- `CHANGELOG.md`.

Arquivos que não devem ser alterados sem necessidade:

- `src/stores/atendimentos.ts`;
- `src/pages/AtendimentosPage.vue`;
- `src/router/index.ts`;
- `src/stores/app.ts`;
- `package.json`;
- arquivos de configuração da stack.

## Critérios de aceite

- A página de novo atendimento não sugere mais que o cadastro é apenas validação visual.
- O botão principal do formulário comunica salvamento local.
- A mensagem de sucesso continua informando que o atendimento foi salvo apenas neste navegador.
- A leitura do `localStorage` aceita somente status previstos.
- Registros com status inválido no storage local são ignorados sem quebrar a aplicação.
- O fluxo de criar atendimento local e listar registros locais continua funcionando.
- O `CHANGELOG.md` registra a entrega da persistência local, se ainda estava pendente.
- Nenhum filtro, edição, exclusão, detalhamento ou CRUD completo é implementado.
- Nenhum backend, login, banco de dados, permissão ou sincronização é implementado.
- Nenhuma biblioteca externa é adicionada.
- O layout comum e a navegação existente são preservados.
- O projeto continua validando com `npm run build`.

## Resultado esperado

Ao final da tarefa, a persistência local deve estar mais clara para o usuário e mais robusta contra dados locais inválidos, sem expandir o escopo funcional além de criar e listar atendimentos salvos no navegador.
