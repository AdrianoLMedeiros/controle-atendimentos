# Decisão 0001 — Stack inicial do projeto

## Status

Aceita

## Contexto

O projeto Controle de Atendimentos SPA tem como objetivo criar uma aplicação web simples para registrar, listar, filtrar e acompanhar atendimentos administrativos.

A versão inicial deve priorizar simplicidade, organização e evolução incremental, sem incluir backend, autenticação, banco de dados, upload de arquivos, relatórios avançados ou controle de permissões.

## Decisão

A stack inicial escolhida para o projeto será:

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia

## Justificativa

### Vue 3

Escolhido como framework principal para construção da SPA. Atende bem ao objetivo de criar uma interface simples, organizada em componentes pequenos e com boa legibilidade.

### TypeScript

Escolhido para dar mais clareza aos contratos internos da aplicação e reduzir erros durante a evolução do projeto.

### Vite

Escolhido como ferramenta de build e desenvolvimento por ser adequado para SPAs modernas e por oferecer uma estrutura inicial simples.

### Vue Router

Escolhido para organizar as rotas principais previstas no MVP:

- Página inicial.
- Página de listagem de atendimentos.
- Página de novo atendimento.

### Pinia

Escolhido como solução de gerenciamento de estado para uso futuro dentro da SPA, mantendo compatibilidade com Vue 3 e permitindo evolução gradual.

## Consequências

- O projeto será desenvolvido como uma SPA baseada em Vue 3.
- As telas principais serão organizadas por rotas.
- O código deverá usar TypeScript sempre que aplicável.
- O estado da aplicação poderá ser centralizado com Pinia quando houver necessidade real.
- A stack favorece uma evolução incremental sem exigir backend na versão inicial.

## Restrições

- Não adicionar bibliotecas externas sem aprovação.
- Não antecipar backend, autenticação, banco de dados ou permissões na versão inicial.
- Não implementar persistência local no MVP inicial.
- Manter componentes pequenos e código simples.
- Evitar decisões técnicas que aumentem a complexidade antes da validação do MVP.

## Escopo relacionado ao MVP

A stack deve suportar inicialmente:

- Estrutura base do projeto.
- Layout principal.
- Rotas principais.
- Página inicial.
- Página de listagem de atendimentos.
- Página de novo atendimento.

## Fora desta decisão

Esta decisão não define:

- Arquitetura detalhada de pastas.
- Design system.
- Bibliotecas de UI.
- Integração com backend.
- Estratégia de autenticação.
- Banco de dados.
- Persistência local.
- Estratégia de deploy.
