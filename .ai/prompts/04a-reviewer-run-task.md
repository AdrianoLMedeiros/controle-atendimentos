Use o agente:

.ai/agents/04-code-reviewer.md

Use os contextos:

.ai/context/project-brief.md
.ai/context/requirements.md
.ai/context/architecture.md
.ai/context/roadmap.md
.ai/decisions/

Use a última tarefa disponível em .ai/tasks/

## Objetivo

Revise a implementação atual da tarefa.

## Regras

Não altere código de produção.
Não implemente novas funcionalidades.
Não refatore.
Apenas revise e registre os achados no arquivo indicado.

Avalie especialmente:

1. Se a tarefa foi cumprida.
2. Se houve implementação fora do escopo.
3. Se o layout está coerente com a arquitetura.
4. Se os componentes foram bem separados.
5. Se o CSS permaneceu simples.
6. Se nenhuma biblioteca visual externa foi adicionada.
7. Se o projeto continua apto a executar com `npm run dev`.

## Política de escalação para decisão humana

Siga integralmente a política definida em `.ai/agents/00-escalation-policy.md`.



## Saída esperada

Sua saída deve ser registrada em um arquivo com numeração incremental e com o mesmo nome da tarefa na pasta, acrescido do termo -review, na pasta .ai/reviews/

Ao final, indique se a task pode avançar ou se exige correções.
