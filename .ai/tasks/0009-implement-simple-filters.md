# Tarefa 0009 — Implementar filtros simples

## Objetivo

Implementar filtros simples na listagem de atendimentos locais, permitindo consulta por status e busca textual sem transformar a tela em relatório avançado.

## Contexto

A tarefa 0008 refinou a persistência local. O produto agora permite cadastrar atendimentos localmente no navegador, listar registros persistidos, manter dados em `localStorage` por meio de serviço isolado e validar apenas status previstos ao ler dados locais.

Esta tarefa corresponde à versão 0.6.0 do roadmap: filtros simples e melhorias de uso. O handoff `0009-po-to-architect-implement-simple-filters.md` orienta priorizar filtro por status e busca textual simples sobre os atendimentos locais disponíveis no navegador.

O review `0008-refine-local-persistence-review.md` aprovou a entrega anterior e não identificou impedimentos, mas apontou duas pendências pequenas: a mensagem de erro do formulário ainda usa o termo `validar` e o `CHANGELOG.md` pode registrar a validação de build da versão 0.5.2.

## Escopo

Implementar apenas:

- filtro simples por status na página de atendimentos;
- busca textual simples sobre registros locais;
- busca sobre campos básicos:
  - protocolo;
  - solicitante;
  - assunto;
- combinação simples entre status e busca textual;
- estado vazio específico para ausência de resultados filtrados;
- preservação do estado vazio atual para ausência de registros locais;
- componente `AtendimentoFilters.vue`, se ainda não existir;
- uso dos atendimentos locais já mantidos na store existente;
- atualização da mensagem de erro do formulário para remover o termo `validar`;
- atualização pontual do `CHANGELOG.md`, se ainda faltar o registro de validação da tarefa 0008.

Comportamento recomendado:

- opção padrão de status: todos;
- busca textual sem diferenciar maiúsculas e minúsculas;
- busca textual com espaços extras ignorados no início e no fim;
- filtros aplicados apenas em memória, sobre dados locais já carregados;
- nenhum acesso direto ao `localStorage` nos componentes de filtro.

Texto recomendado para a mensagem de erro do formulário:

- `Preencha solicitante e assunto para salvar o atendimento localmente.`

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
- filtros avançados;
- filtros por período;
- ordenação avançada;
- paginação;
- relatórios;
- exportação de dados;
- upload de arquivos;
- biblioteca externa;
- alteração de stack;
- mudança no modelo de dados;
- nova estratégia de persistência;
- busca em dados externos.

## Arquivos esperados ou impactados

Arquivos ou pastas provavelmente impactados:

- `src/pages/AtendimentosPage.vue`;
- `src/components/atendimentos/AtendimentoFilters.vue`;
- `src/components/atendimentos/AtendimentoList.vue`;
- `src/components/atendimentos/AtendimentoEmptyState.vue`;
- `src/components/atendimentos/AtendimentoForm.vue`;
- `src/types/atendimento.types.ts`, apenas se for necessário tipar filtros sem ampliar o modelo de atendimento;
- `src/style.css`, apenas para ajustes visuais simples;
- `CHANGELOG.md`, se houver atualização documental pontual.

Arquivos que não devem ser alterados sem necessidade:

- `src/stores/atendimentos.ts`;
- `src/services/atendimentosStorage.ts`;
- `src/router/index.ts`;
- `src/stores/app.ts`;
- `package.json`;
- arquivos de configuração da stack.

## Critérios de aceite

- A listagem permite filtrar atendimentos locais por status.
- A listagem permite busca textual simples por protocolo, solicitante ou assunto.
- Filtro por status e busca textual podem funcionar em conjunto.
- A busca textual ignora diferenças entre maiúsculas e minúsculas.
- A busca textual ignora espaços extras no início e no fim.
- Quando não houver registros locais, o estado vazio continua indicando ausência de atendimentos cadastrados neste navegador.
- Quando houver registros locais, mas nenhum resultado para os filtros aplicados, a interface informa ausência de resultados para os filtros.
- Os filtros operam apenas sobre dados locais já disponíveis na aplicação.
- Componentes de filtro não acessam `localStorage` diretamente.
- A mensagem de erro do formulário fica coerente com salvamento local.
- Nenhuma edição, exclusão, detalhamento, relatório, exportação ou filtro avançado é implementado.
- Nenhum backend, login, banco de dados, permissão ou sincronização é implementado.
- Nenhuma biblioteca externa é adicionada.
- O layout comum e a navegação existente são preservados.
- O projeto continua validando com `npm run build`.

## Resultado esperado

Ao final da tarefa, a página de atendimentos deve permitir consulta simples dos registros locais por status e texto, mantendo a experiência clara para o usuário administrativo e sem ampliar o MVP para relatórios, CRUD completo ou integrações externas.
