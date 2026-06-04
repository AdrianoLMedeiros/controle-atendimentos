Use o agente:

.ai/agents/04-code-reviewer.md

Use o contexto:

.ai/context/project-brief.md
.ai/context/architecture.md

Use a tarefa:

.ai/tasks/0001-setup-project.md

## Objetivo
Revise a implementação atual do projeto.

Sua saída deve ser registrada no arquivo:

.ai/reviews/0001-setup-project-review.md

## Regras
Não altere código de produção.
Não implemente novas funcionalidades.
Não refatore.
Apenas revise e registre os achados no arquivo indicado.

## Política de escalação para decisão humana

Durante a execução, se identificar necessidade de decisão que afete escopo, arquitetura, stack, persistência, segurança, dados, roadmap, regras de negócio ou comportamento funcional aprovado, não prossiga automaticamente.

Nesse caso, quando encontrar risco ou divergência que não seja apenas correção objetiva:

1. Interrompa a execução da tarefa.
2. Crie um arquivo em `.ai/decision-requests/` conforme model disponível na referida pasta.
3. Use o padrão de nome:

`NNNN-tema-da-decisao-request.md`

4. Descreva:
   - contexto;
   - decisão necessária;
   - opções possíveis;
   - vantagens;
   - desvantagens;
   - impacto;
   - recomendação do agente;
   - riscos de decidir automaticamente;
   - próximo passo após decisão.

5. Não implemente código relacionado à decisão pendente.
6. Aguarde decisão humana.
7. Após a decisão registre um novo arquivo sequencial em `.ai/decisions/`