# Tarefa 0012 — Renomear pasta decision-requests para escalation-requests

## Objetivo

Renomear a pasta `.ai/decision-requests/` para `.ai/escalation-requests/` e atualizar todas as referências a essa pasta nos arquivos de governança do projeto.

## Contexto

O `WORKFLOW.md` já reconhece que a pasta `decision-requests/` funciona conceitualmente como repositório de escalações, não apenas de pedidos de decisão. A seção 2 do WORKFLOW prevê explicitamente a renomeação futura para `escalation-requests/`. A seção 8, regra 13, determina que essa renomeação deve ser feita em task documental própria para evitar quebra de referências.

A renomeação está alinhada com o vocabulário já adotado no WORKFLOW.md, onde esses arquivos são chamados de "escalações", e elimina a ambiguidade entre "pedido de decisão" e "solicitação de escalação".

Esta task foi planejada durante a execução das melhorias estruturais do protocolo `.ai/` (ciclo de task 0012 documental), com base na análise do estado atual após 11 tasks concluídas.

## Escopo

- Renomear a pasta `.ai/decision-requests/` para `.ai/escalation-requests/`.
- Preservar o conteúdo, o nome e a numeração de todos os arquivos já existentes nessa pasta; apenas a pasta muda de nome.
- Atualizar todas as referências ao caminho `.ai/decision-requests/` nos seguintes locais:
  - `.ai/agents/` (todos os arquivos de agente, incluindo `00-escalation-policy.md`);
  - `.ai/prompts/` (todos os prompts);
  - `.ai/context/` (todos os arquivos de contexto, incluindo `process-backlog.md`);
  - `.ai/WORKFLOW.md`;
  - `.ai/decisions/INDEX.md`, se houver referência ao caminho antigo;
  - qualquer outro arquivo dentro de `.ai/` que faça referência ao caminho antigo.

## Fora do escopo

- Alterar o conteúdo dos arquivos existentes em `decision-requests/`, além da atualização de caminhos internos.
- Alterar a numeração dos arquivos existentes.
- Alterar o arquivo `0000-decision-request-model.md` além da atualização do caminho que ele próprio mencionar.
- Alterar arquivos fora da pasta `.ai/` (README.md, CHANGELOG.md, `src/`, etc.).
- Alterar código de produção.
- Criar novos arquivos de agente ou prompt além dos já existentes.
- Implementar o Agente 07 Orchestrator (decisão separada).

## Arquivos esperados ou impactados

- `.ai/decision-requests/` → renomear para `.ai/escalation-requests/` (toda a pasta e seu conteúdo).
- `.ai/WORKFLOW.md` → atualizar todas as ocorrências de `decision-requests/` para `escalation-requests/`.
- `.ai/agents/00-escalation-policy.md` → atualizar referência ao caminho.
- `.ai/agents/01-product-owner.md` → verificar e atualizar se houver referência direta.
- `.ai/agents/02-frontend-architect.md` → verificar e atualizar se houver referência direta.
- `.ai/agents/03-developer.md` → verificar e atualizar se houver referência direta.
- `.ai/agents/04-code-reviewer.md` → verificar e atualizar se houver referência direta.
- `.ai/agents/05-documenter.md` → verificar e atualizar se houver referência direta.
- `.ai/prompts/01-product-owner-start.md` → verificar e atualizar se houver referência direta.
- `.ai/prompts/01a-po-check-compliance.md` → verificar e atualizar se houver referência direta.
- `.ai/prompts/02-frontend-architect-start.md` → verificar e atualizar se houver referência direta.
- `.ai/prompts/02a-front-arch-plan-task.md` → verificar e atualizar se houver referência direta.
- `.ai/prompts/03-dev-start.md` → verificar e atualizar se houver referência direta.
- `.ai/prompts/03a-developer-run-task.md` → verificar e atualizar se houver referência direta.
- `.ai/prompts/04-reviewer-start.md` → verificar e atualizar se houver referência direta.
- `.ai/prompts/04a-reviewer-run-task.md` → verificar e atualizar se houver referência direta.
- `.ai/prompts/05-documenter-start.md` → verificar e atualizar se houver referência direta.
- `.ai/prompts/05a-documenter-run-task.md` → verificar e atualizar se houver referência direta.
- `.ai/context/process-backlog.md` → atualizar referências, se houver.
- `.ai/decisions/INDEX.md` → atualizar referências, se houver.

## Critérios de aceite

1. A pasta `.ai/escalation-requests/` existe e contém todos os arquivos que estavam em `.ai/decision-requests/`.
2. A pasta `.ai/decision-requests/` não existe mais no projeto.
3. Nenhum arquivo em `.ai/` faz referência ao caminho `.ai/decision-requests/`.
4. O conteúdo dos arquivos de escalação permanece idêntico ao original, exceto eventuais atualizações de caminhos internos.
5. O `WORKFLOW.md` reflete o novo caminho em todas as seções relevantes (seções 2, 3.4, 4.1, 4.2, 4.3, 4.4, 4.5, 5.1, 6.4, 7.4, 8 e 10).
6. Os agentes e prompts referenciam corretamente o novo caminho, quando aplicável.

## Resultado esperado

Ao final desta task, o projeto terá a pasta de escalações com nomenclatura consistente com o vocabulário já adotado no `WORKFLOW.md`, eliminando a ambiguidade entre "pedido de decisão" e "solicitação de escalação". Nenhum comportamento funcional do processo será alterado.
