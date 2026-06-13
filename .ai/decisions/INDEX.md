# Índice de Decisões

## Nota sobre numeração independente

A numeração de `.ai/decisions/` é independente da numeração de `.ai/decision-requests/`. Ambas as séries partem de `0000` e não precisam coincidir. Um arquivo `decisions/0001-*` e um arquivo `decision-requests/0001-*` podem existir simultaneamente, referindo-se a temas distintos.

## Nota sobre a exceção histórica

O arquivo `0000-initial-stack.md` representa uma exceção ao fluxo padrão de decisão: foi criado antes do processo de agentes ser formalizado, como registro da restrição de stack inicial definida pelo dono do projeto. Não deriva de uma escalação formal registrada em `decision-requests/`.

## Lista de decisões

| # | Título | Status | Arquivo | Resumo |
|---|--------|--------|---------|--------|
| 0000 | Stack inicial do projeto | Aceita | `0000-initial-stack.md` | Define Vue 3, TypeScript, Vite, Vue Router e Pinia como stack obrigatória; exceção histórica criada antes do fluxo formal de escalação. |
| 0001 | Persistência local de atendimentos | Aceita | `0001-local-persistence-decision.md` | Aprova persistência local limitada ao navegador com Pinia e localStorage, derivada da escalação `decision-requests/0001-local-persistence-request.md`. |

## Próximo número disponível

**0002**

A próxima decisão formal deve ser registrada como `0002-tema-decision.md`.
