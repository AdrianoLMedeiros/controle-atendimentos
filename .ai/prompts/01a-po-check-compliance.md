# Prompt — Etapa 01b: Product Owner revisa estado atual

Use o agente:

.ai/agents/01-product-owner.md

Use os contextos:

.ai/context/project-brief.md
.ai/context/requirements.md
.ai/context/roadmap.md
.ai/decisions/

Use também, se existirem:

README.md
CHANGELOG.md
.ai/tasks/
.ai/reviews/

Sua função é atuar como Product Owner e Analista de Produto do projeto.

## Objetivo

Revisar o estado atual do projeto após a conclusão da *última task*, verificar se o produto continua aderente ao escopo definido e recomendar a próxima prioridade funcional.

## Tarefas obrigatórias

1. Revisar os requisitos existentes.
2. Revisar o roadmap atual.
3. Verificar se a task anterior foi concluída de forma coerente com o MVP.
4. Identificar se há divergências entre requisitos, roadmap, README, CHANGELOG e implementação descrita.
5. Confirmar qual deve ser a próxima prioridade do produto.
6. Indicar se a próxima task deve manter o roadmap atual ou se algum ajuste é necessário.
7. Registrar recomendações de produto para orientar o Agente Arquiteto Frontend.

## Regras

* Não escreva código.
* Não defina arquitetura técnica detalhada.
* Não altere a stack definida.
* Não aumente o escopo do MVP sem necessidade.
* Não crie funcionalidades novas fora do roadmap sem justificar.
* Use linguagem clara, objetiva e profissional.
* Não use emojis.
* Se houver inconsistência documental, aponte claramente.

## Handoff para o Frontend Architect

Além de revisar requisitos e roadmap, crie um arquivo de orientação para o Agente Frontend Architect em:

.ai/handoffs/

Use o padrão de nome:

NNNN-po-to-architect-nome-da-proxima-task.md

Exemplo:

.ai/handoffs/0002-po-to-architect-create-base-layout.md

Esse arquivo deve conter:

1. Contexto da última task concluída.
2. Estado atual do produto.
3. Próxima prioridade recomendada.
4. Justificativa da prioridade.
5. Restrições de produto.
6. Critérios esperados para a próxima entrega.
7. Orientação objetiva para o Frontend Architect.
8. Pontos pendentes.

O arquivo de handoff não deve conter código nem arquitetura técnica detalhada.
Ele deve orientar o Arquiteto sobre o que precisa ser planejado a seguir.

## Saída esperada

Atualize, se necessário:

.ai/context/requirements.md
.ai/context/roadmap.md

Se não houver necessidade de alteração, informe que os arquivos permanecem válidos.

Ao final, apresente um resumo contendo:

1. Estado geral do produto.
2. Requisitos ainda válidos.
3. Inconsistências encontradas, se houver.
4. Próxima prioridade funcional recomendada.
5. Justificativa da próxima prioridade.
6. Orientação para o Agente Arquiteto Frontend planejar a próxima task.
