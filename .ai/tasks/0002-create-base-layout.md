# Tarefa 0002 — Criar layout base do SPA

## Objetivo

Criar o layout base do SPA Controle de Atendimentos, com estrutura visual simples para navegação e exibição das páginas principais.

## Contexto

Esta tarefa dá continuidade à tarefa 0001, que configurou a base inicial do projeto.

A implementação deve respeitar os arquivos de contexto:

- `.ai/context/project-brief.md`
- `.ai/context/requirements.md`
- `.ai/context/architecture.md`
- `.ai/context/roadmap.md`
- `.ai/decisions/0001-initial-stack.md`

## Escopo

Implementar apenas:

- Layout principal da aplicação.
- Cabeçalho simples.
- Menu de navegação.
- Área principal de conteúdo.
- Estrutura visual básica para páginas.
- Ajustes mínimos de CSS necessários para organização visual.

## Fora do escopo

Não implementar:

- CRUD de atendimentos.
- Formulários funcionais.
- Persistência em LocalStorage.
- Backend.
- Login.
- Banco de dados.
- Dashboard avançado.
- Controle de permissões.
- Biblioteca visual externa.
- Framework CSS externo.

## Arquivos esperados ou impactados

A depender da arquitetura definida, podem ser criados ou alterados arquivos como:

- `src/App.vue`
- `src/components/layout/AppLayout.vue`
- `src/components/layout/AppHeader.vue`
- `src/components/layout/AppSidebar.vue`
- `src/router/index.ts`
- Arquivos CSS relacionados

## Critérios de aceite

- O projeto deve continuar executando com `npm run dev`.
- O layout base deve aparecer corretamente no navegador.
- Deve haver navegação visual para as páginas principais.
- A área de conteúdo deve renderizar as páginas configuradas.
- Nenhuma biblioteca visual externa deve ser adicionada.
- Nenhuma funcionalidade fora do escopo deve ser implementada.
- O código deve permanecer simples, legível e aderente à arquitetura definida.

## Resultado esperado

Ao final, o SPA deve ter uma estrutura visual inicial consistente, servindo como base para as próximas funcionalidades.
