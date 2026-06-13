# Backlog do Processo de Agentes

## Pendências documentais

### Task 0012 — Renomear pasta decision-requests para escalation-requests

Tarefa documental criada para formalizar a renomeação prevista no WORKFLOW.md (seção 2 e regra 13 da seção 8).

Arquivo: `.ai/tasks/0012-rename-decision-requests-folder.md`

Escopo: renomear `.ai/decision-requests/` para `.ai/escalation-requests/` e atualizar todas as referências nos agentes, prompts, contexto e WORKFLOW.md.

Esta task é priorizavel no próximo ciclo documental.

---

## Ideias futuras

### Organização futura do CSS global

Limite objetivo: `src/style.css` não deve ultrapassar **400 linhas**.

Estado atual (task 0012, junho 2026): **422 linhas**. O arquivo já excede o limite definido.

Criterio de ação: quando o arquivo ultrapassar 400 linhas (critério já atingido), a separação de estilos por componente ou domínio torna-se obrigatória na próxima task documental ou de refatoração aprovada. A separação não é mais apenas uma recomendação.

Pendência explícita: registrar task de reorganização do CSS global como próxima pendência de manutenção quando o escopo permitir.

Histórico: este item foi registrado desde a task 0002 como "monitorar crescimento", sem ação concreta. A partir desta task (0012), o gatilho passa a ser verificável e obrigatório.

### Agente 06 — Versioning Manager

Responsável por apoiar versionamento, commits, changelog, tags e preparação de releases.

### Agente 07 — Orchestrator

Responsável por verificar o estado atual do fluxo e indicar a próxima etapa correta do processo.

Critério de ativação: o fluxo básico deveria rodar com sucesso por pelo menos duas ou três tasks completas antes da criação deste agente.

Estado atual (task 0012, junho 2026): **critério atingido**. O projeto completou 11 tasks com o ciclo PO -> Architect -> Developer -> Reviewer -> Documenter funcionando de forma estável.

Pendência: a criação do Agente 07 depende de decisão humana. Solicitação de escalação criada em `.ai/decision-requests/0003-ativar-agente-07-orchestrator-request.md`. Aguardando resposta.

---

## Ajustes de processo aplicados

### Critério de aceite "build validado" (aplicado na task 0012)

O Developer passa a incluir obrigatoriamente no resumo final de toda task o resultado de `npm run build` (se foi executado e qual o resultado).

O Documenter passa a registrar essa informação no CHANGELOG de forma padrão, a partir do resumo do Developer.

O Reviewer não deve mais apontar como problema a ausência desse registro, pois a responsabilidade foi redistribuída para Developer e Documenter.

Impacto: elimina a recorrência de pendências de baixa prioridade relacionadas a "registro de build no CHANGELOG", identificadas nos reviews 0009, 0010 e 0011.

## Critério para implementação dos agentes

Os agentes 06 e 07 só devem ser criados após decisão humana explícita. O critério de ciclos mínimos foi atingido, mas a criação formal depende de aprovação do usuário.
