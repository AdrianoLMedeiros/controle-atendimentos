# Prompt — Etapa 02b: Frontend Architect planeja próxima task

Use o agente:

.ai/agents/02-frontend-architect.md

Use os contextos:

.ai/context/project-brief.md
.ai/context/requirements.md
.ai/context/architecture.md
.ai/context/roadmap.md
.ai/decisions/
.ai/handoffs/

Use também, se existirem:

README.md
CHANGELOG.md
.ai/tasks/
.ai/reviews/

Sua função é atuar como Arquiteto Frontend do projeto.

## Objetivo

Planejar tecnicamente a próxima task do projeto, respeitando os requisitos, a arquitetura existente, o roadmap e as restrições de stack já definidas, a partir do último handoff criado em .ai/handoff.

## Tarefas obrigatórias

1. Revisar a arquitetura atual.
2. Revisar o roadmap atual.
3. Identificar a próxima task técnica coerente com a evolução do MVP.
4. Definir o nome do arquivo da próxima task.
5. Criar ou atualizar o arquivo da próxima task em:

.ai/tasks/

6. Garantir que a task tenha escopo pequeno, claro e executável.
7. Definir critérios de aceite objetivos.
8. Indicar arquivos provavelmente impactados.
9. Separar claramente o que está dentro e fora do escopo.
10. Não implementar código.

## Regras

* Não escreva código de produção.
* Não altere arquivos fora da pasta .ai, salvo se for estritamente documental.
* Não instale bibliotecas.
* Não proponha mudança de stack.
* Não antecipe backend, autenticação, banco de dados ou permissões.
* Não crie task grande demais.
* Não misture várias funcionalidades em uma única task.
* Use linguagem clara, objetiva e profissional.
* Não use emojis.

## Política de escalação para decisão humana

Siga integralmente a política definida em `.ai/agents/00-escalation-policy.md`.

## Convenção de nome da task

Use o padrão:

NNNN-verbo-objeto.md

Exemplos:

0002-create-base-layout.md
0003-configure-routing.md
0004-create-attendance-list.md
0005-create-attendance-form.md

O review correspondente deverá usar o mesmo nome-base acrescido de -review:

0002-create-base-layout-review.md

## Estrutura obrigatória da task

O arquivo da nova task deve conter:

# Tarefa NNNN — Nome da tarefa

## Objetivo

Explique o objetivo da tarefa.

## Contexto

Explique a relação com as tarefas anteriores e com o roadmap.

## Escopo

Liste o que deve ser implementado.

## Fora do escopo

Liste o que não deve ser implementado nesta task.

## Arquivos esperados ou impactados

Liste arquivos ou pastas provavelmente afetados.

## Critérios de aceite

Liste critérios objetivos para validar a task.

## Resultado esperado

Descreva o estado esperado do projeto após a conclusão da task.

## Saída esperada

Ao final, apresente um resumo contendo:

1. Próxima task definida.
2. Arquivo de task criado ou atualizado.
3. Justificativa da escolha.
4. Principais decisões técnicas da task.
5. Riscos ou cuidados para o Developer.
6. Próximo prompt recomendado.
