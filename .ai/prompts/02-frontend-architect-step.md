Use o agente:

.ai/agents/02-frontend-architect.md

Use os contextos:

.ai/context/project-brief.md
.ai/context/requirements.md
.ai/decisions/0001-initial-stack.md

Sua função é atuar como Arquiteto Frontend do projeto.

Objetivo:

Transformar os requisitos aprovados em uma arquitetura frontend simples, organizada e adequada para um SPA inicial.

Tarefas obrigatórias:

1. Criar ou atualizar o arquivo:

.ai/context/architecture.md

2. Criar ou atualizar o arquivo:

.ai/context/roadmap.md

3. Definir a arquitetura inicial do SPA.
4. Definir a estrutura de pastas recomendada.
5. Definir páginas iniciais.
6. Definir componentes iniciais.
7. Definir estratégia inicial de rotas.
8. Definir estratégia inicial de estado, se aplicável.
9. Definir estratégia inicial de persistência, se aplicável.
10. Definir tipos TypeScript previstos.
11. Definir convenções de nomenclatura.
12. Dividir a implementação em tarefas pequenas e sequenciais.
13. Não implementar código.

Regras:

* Não escreva código de produção.
* Não instale bibliotecas.
* Não altere arquivos de código.
* Não aumente o escopo funcional definido pelo Product Owner.
* Não antecipe backend, login, banco de dados ou permissões.
* Não proponha arquitetura complexa demais para o MVP.
* Priorize simplicidade, legibilidade e manutenção.
* Use linguagem clara, objetiva e profissional.
* Não use emojis.
* Preserve coerência com a stack oficial definida em .ai/decisions/0001-initial-stack.md.
* Se Vue Router ou Pinia forem recomendados, justifique se entram agora ou em tarefa posterior.

O arquivo architecture.md deve conter, no mínimo:

# Arquitetura Frontend — Controle de Atendimentos SPA

## 1. Visão geral da arquitetura

Descreva a arquitetura proposta para o SPA.

## 2. Stack oficial

Liste a stack aprovada.

## 3. Estrutura de pastas

Proponha a estrutura inicial de pastas do projeto.

## 4. Páginas previstas

Liste as páginas iniciais e sua responsabilidade.

## 5. Componentes previstos

Liste os componentes iniciais e sua responsabilidade.

## 6. Rotas previstas

Liste as rotas iniciais do SPA.

## 7. Estado da aplicação

Explique se haverá estado local, store ou apenas dados mockados nesta fase.

## 8. Persistência

Explique se haverá persistência nesta fase ou se ficará para etapa posterior.

## 9. Tipos TypeScript previstos

Liste os tipos iniciais necessários.

## 10. Convenções de nomenclatura

Defina padrões simples para nomes de arquivos, componentes, tipos e funções.

## 11. Riscos técnicos

Liste riscos simples e objetivos.

## 12. Decisões arquiteturais

Liste decisões adotadas e suas justificativas.

O arquivo roadmap.md deve conter, no mínimo:

# Roadmap — Controle de Atendimentos SPA

## Versão 0.1.0 — Setup inicial

Objetivo:
Tarefas previstas:
Critérios de aceite:

## Versão 0.2.0 — Layout e navegação

Objetivo:
Tarefas previstas:
Critérios de aceite:

## Versão 0.3.0 — Listagem de atendimentos

Objetivo:
Tarefas previstas:
Critérios de aceite:

## Versão 0.4.0 — Cadastro de atendimento

Objetivo:
Tarefas previstas:
Critérios de aceite:

## Versão 0.5.0 — Estado e persistência local

Objetivo:
Tarefas previstas:
Critérios de aceite:

## Versão 0.6.0 — Filtros e melhorias de uso

Objetivo:
Tarefas previstas:
Critérios de aceite:

Ao final, apresente um resumo com:

1. Arquivos criados ou alterados.
2. Principais decisões arquiteturais registradas.
3. Roadmap sugerido.
4. Primeira tarefa técnica recomendada para o Developer.
