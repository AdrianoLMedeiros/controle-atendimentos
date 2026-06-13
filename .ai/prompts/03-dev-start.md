# Prompt — Etapa 03: Developer

Use o agente:

.ai/agents/03-developer.md

Use os contextos:

.ai/context/project-brief.md
.ai/context/requirements.md
.ai/context/architecture.md
.ai/context/roadmap.md
.ai/decisions/0001-initial-stack.md

Use a tarefa:

.ai/tasks/0001-setup-project.md

Sua função é atuar como Desenvolvedor Frontend do projeto.

## Objetivo

Implementar somente a tarefa indicada em:

.ai/tasks/0001-setup-project.md

A implementação deve respeitar integralmente os requisitos, a arquitetura, o roadmap e a decisão inicial de stack já registrados nos arquivos de contexto.

## Tarefas obrigatórias

1. Ler o agente Developer em:

.ai/agents/03-developer.md

2. Ler todos os arquivos de contexto indicados neste prompt.
3. Ler a tarefa atual em:

.ai/tasks/0001-setup-project.md

4. Implementar apenas o que estiver definido no escopo da tarefa atual.
5. Não implementar funcionalidades fora da tarefa.
6. Não alterar requisitos, arquitetura, roadmap ou decisão de stack sem autorização.
7. Não alterar arquivos da pasta `.ai`, salvo se a tarefa pedir expressamente.
8. Ao final, apresentar um resumo objetivo do que foi feito.

## Regras de implementação

* Use Vue 3.
* Use TypeScript.
* Use Vite.
* Use Vue Router se estiver previsto na tarefa.
* Use Pinia somente se estiver previsto na tarefa ou na arquitetura para esta etapa.
* Use CSS simples organizado.
* Não instale bibliotecas visuais externas.
* Não implemente backend.
* Não implemente banco de dados.
* Não implemente autenticação.
* Não implemente controle de permissões.
* Não implemente dashboard avançado.
* Não implemente funcionalidades futuras do roadmap.
* Não faça refatorações fora do escopo.
* Não altere nomes de arquivos ou pastas definidos na arquitetura sem necessidade clara.
* Preserve simplicidade e legibilidade.

## Antes de implementar

Verifique se a tarefa atual contém:

* Objetivo.
* Escopo.
* Fora do escopo.
* Critérios de aceite.
* Arquivos esperados ou impactados.

Se alguma dessas informações estiver ausente, prossiga com a melhor interpretação possível com base nos arquivos de contexto, mas registre a limitação no resumo final.

## Durante a implementação

Implemente de forma incremental e controlada.

Priorize:

* Código funcional.
* Organização simples.
* Componentes pequenos.
* Nomes claros.
* TypeScript sem complexidade desnecessária.
* Aderência ao escopo da tarefa.
* Facilidade de revisão pelo Agente Code Reviewer.

## Validações obrigatórias

Ao final da implementação, verifique:

1. O projeto continua executando com:

npm run dev

2. O código compila sem erros evidentes.
3. A tarefa atual foi cumprida.
4. Nenhuma funcionalidade fora do escopo foi adicionada.
5. Nenhuma biblioteca externa não autorizada foi instalada.
6. A estrutura de arquivos permanece coerente com a arquitetura definida.
7. Os critérios de aceite da tarefa foram atendidos.

## Política de escalação para decisão humana

Siga integralmente a política definida em `.ai/agents/00-escalation-policy.md`.

## Saída esperada

Ao final, apresente um resumo contendo:

1. O que foi implementado.
2. Arquivos criados.
3. Arquivos alterados.
4. Comandos executados.
5. Como testar manualmente.
6. Critérios de aceite atendidos.
7. Pontos que ficaram pendentes, se houver.
8. Próximo passo recomendado.

## Regra principal

Implemente somente a tarefa atual:

.ai/tasks/0001-setup-project.md

Não antecipe etapas futuras do roadmap.
