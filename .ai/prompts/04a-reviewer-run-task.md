Use o agente:

.ai/agents/04-code-reviewer.md

Use os contextos:

.ai/context/project-brief.md
.ai/context/requirements.md
.ai/context/architecture.md
.ai/context/roadmap.md
.ai/decisions/0001-initial-stack.md

Use a tarefa:

.ai/tasks/0002-create-base-layout.md

Revise a implementação atual da tarefa 0002.

Sua saída deve ser registrada no arquivo:

.ai/reviews/0002-create-base-layout-review.md

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

Ao final, indique se a task pode avançar ou se exige correções.
