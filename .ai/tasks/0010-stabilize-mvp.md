# Tarefa 0010 — Estabilizar MVP

## Objetivo

Consolidar pequenos ajustes finais do MVP após a entrega dos filtros simples, sem adicionar nova funcionalidade de produto.

## Contexto

A tarefa 0009 implementou filtros simples na listagem de atendimentos locais. O produto agora permite cadastrar atendimentos localmente no navegador, listar registros persistidos, filtrar por status, buscar por protocolo, solicitante ou assunto e distinguir ausência de registros locais de ausência de resultados filtrados.

O review `0009-implement-simple-filters-review.md` aprovou a entrega e não identificou impedimentos. As pendências restantes são de baixa prioridade: pequena duplicação do contrato do filtro de status, monitoramento do crescimento do CSS global e registro documental da validação de build da tarefa 0009, caso ainda não esteja presente no `CHANGELOG.md`.

Esta tarefa corresponde à versão 0.6.1 do roadmap: estabilização do MVP para validação interna.

## Escopo

Implementar apenas:

- centralizar o tipo usado no filtro de status, evitando duplicação desnecessária entre `AtendimentoFilters.vue` e `AtendimentosPage.vue`;
- manter o contrato de filtro por status simples e aderente aos status já previstos para atendimento;
- revisar textos principais da interface para garantir coerência com persistência local limitada ao navegador;
- revisar estados vazios da listagem e dos resultados filtrados;
- preservar a distinção entre ausência de atendimentos cadastrados neste navegador e ausência de resultados para os filtros aplicados;
- registrar pendências remanescentes no backlog, se aplicável;
- atualizar o `CHANGELOG.md` com a observação de build da tarefa 0009, se ainda faltar.

Comportamento esperado:

- filtros simples continuam operando apenas em memória, sobre atendimentos locais já carregados;
- cadastro, listagem e persistência local continuam preservados;
- textos não devem sugerir backend, sincronização, armazenamento compartilhado ou persistência fora deste navegador;
- ajustes devem ser pequenos e voltados a estabilidade, clareza e redução de duplicação.

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
- relatórios;
- exportação de dados;
- upload de arquivos;
- novas funcionalidades de produto;
- filtros avançados;
- filtros por período;
- ordenação avançada;
- paginação;
- nova estratégia de persistência;
- bibliotecas externas;
- alteração de stack.

## Arquivos esperados ou impactados

Arquivos provavelmente impactados:

- `src/types/atendimento.types.ts`;
- `src/components/atendimentos/AtendimentoFilters.vue`;
- `src/pages/AtendimentosPage.vue`;
- `src/components/atendimentos/AtendimentoEmptyState.vue`, somente se houver ajuste textual pequeno;
- `CHANGELOG.md`;
- `.ai/context/process-backlog.md`, se houver pendência remanescente a registrar.

Arquivos que não devem ser alterados sem necessidade:

- `src/stores/atendimentos.ts`;
- `src/services/atendimentosStorage.ts`;
- `src/components/atendimentos/AtendimentoForm.vue`;
- `src/components/atendimentos/AtendimentoList.vue`;
- `src/components/atendimentos/AtendimentoListItem.vue`;
- `src/router/index.ts`;
- `src/stores/app.ts`;
- `package.json`;
- arquivos de configuração da stack.

## Critérios de aceite

- Não há nova funcionalidade de produto.
- O contrato de filtro por status não fica duplicado de forma desnecessária.
- Filtros simples continuam funcionando.
- Cadastro, listagem e persistência local continuam preservados.
- Textos continuam claros sobre dados salvos apenas neste navegador.
- Estados vazios continuam distinguindo ausência de registros locais e ausência de resultados filtrados.
- Pendências remanescentes são registradas no backlog, se aplicável.
- O `CHANGELOG.md` registra a observação de build da tarefa 0009, se ela ainda estiver ausente.
- Nenhum backend, login, banco de dados, sincronização, permissão, edição, exclusão, detalhamento, relatório ou exportação é implementado.
- Nenhum upload, filtro avançado, paginação, ordenação avançada ou nova estratégia de persistência é implementado.
- Nenhuma biblioteca externa é adicionada.
- A stack atual permanece inalterada.
- O projeto continua validando com `npm run build`.

## Resultado esperado

Ao final da tarefa, o MVP deve estar mais estável para validação interna, com contratos simples menos duplicados, textos coerentes com persistência local limitada ao navegador e estados vazios claros, sem expansão funcional para CRUD completo, relatórios, exportação, integrações ou qualquer capacidade fora do escopo aprovado.
