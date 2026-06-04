# Tarefa 0005 — Refinar MVP antes de persistência

## Objetivo

Refinar pontos simples do MVP visual antes de avaliar persistência local, reduzindo ambiguidades para validação por usuários administrativos sem ampliar o escopo funcional do produto.

## Contexto

A tarefa 0004 criou e validou o formulário inicial de atendimento. O produto agora possui setup, layout e navegação, listagem visual simples e formulário inicial sem persistência.

Esta tarefa corresponde à versão 0.4.1 do roadmap: refinamentos antes de persistência. O handoff `0005-po-to-architect-refine-mvp-before-persistence.md` orienta que a próxima entrega sane pendências simples identificadas nos reviews, sem iniciar a versão 0.5.0 de estado e persistência local.

Os reviews anteriores registraram pendências de baixa prioridade relacionadas à clareza do formulário, apresentação da data na listagem, assets sem uso claro e crescimento do CSS global. Esta task deve tratar esses pontos de forma pequena e objetiva.

## Escopo

Implementar apenas:

- validação visual simples para evitar confirmação do formulário com campos essenciais vazios;
- ajuste da mensagem de confirmação para deixar claro que nenhum dado foi salvo;
- formatação da data de criação da listagem em padrão mais amigável ao usuário;
- manutenção do valor original da data em estrutura semanticamente adequada, quando aplicável;
- avaliação dos assets sem uso claro em `src/assets/`;
- remoção dos assets sem uso, se confirmado que não são utilizados;
- registro documental das pendências que não forem resolvidas nesta task;
- ajustes mínimos no CSS para manter a interface simples e compreensível.

Campos essenciais para validação visual nesta task:

- solicitante;
- assunto.

O campo status pode manter valor padrão ou opção inicial simples, desde que o comportamento continue claro para o usuário.

## Fora do escopo

Não implementar:

- backend;
- autenticação;
- banco de dados;
- persistência em localStorage;
- store de atendimentos no Pinia;
- criação real de registros na listagem;
- cadastro real persistido;
- CRUD completo;
- edição de atendimento;
- exclusão de atendimento;
- detalhamento de atendimento;
- filtros;
- relatórios;
- exportação de dados;
- upload de arquivos;
- controle de permissões;
- biblioteca visual externa;
- alteração de stack;
- refatoração ampla de CSS;
- reorganização estrutural grande do projeto.

## Arquivos esperados ou impactados

Arquivos ou pastas provavelmente impactados:

- `src/components/atendimentos/AtendimentoForm.vue`;
- `src/components/atendimentos/AtendimentoListItem.vue`;
- `src/style.css`, apenas para ajustes simples;
- `src/assets/`, apenas para remover arquivos confirmadamente sem uso;
- `README.md`, se alguma pendência for resolvida ou reclassificada;
- `CHANGELOG.md`, se o projeto mantiver registro da versão executada.

Não é esperado alterar:

- `src/stores/app.ts`;
- `src/router/index.ts`;
- `src/data/atendimentos.mock.ts`, salvo se houver ajuste estritamente necessário para preservar o formato original da data;
- `src/types/atendimento.types.ts`, salvo correção pontual sem ampliar o modelo.

## Critérios de aceite

- O formulário não apresenta confirmação positiva quando solicitante ou assunto estiverem vazios.
- A mensagem de confirmação continua informando claramente que nenhum dado foi salvo.
- A submissão do formulário continua sem backend, banco, localStorage ou store.
- A data de criação na listagem é exibida em formato legível para usuário administrativo.
- O valor original da data é preservado quando houver marcação semântica de data.
- Assets sem uso claro são removidos ou a decisão de mantê-los é registrada.
- O CSS global permanece simples e compreensível após os ajustes.
- Nenhuma store de atendimentos é criada.
- Nenhuma persistência local é implementada.
- Nenhuma biblioteca externa é adicionada.
- Nenhuma funcionalidade fora do escopo é implementada.
- O layout comum e a navegação existente são preservados.
- O projeto continua validando com `npm run build`.

## Resultado esperado

Ao final da tarefa, o MVP visual deve estar mais claro para validação interna: o formulário não deve sugerir aceite de dados essenciais vazios, a listagem deve apresentar datas de forma mais amigável e pendências simples de organização devem estar resolvidas ou registradas.

A aplicação deve continuar sem backend, autenticação, banco de dados, permissões, persistência local, store de atendimentos ou CRUD completo.
