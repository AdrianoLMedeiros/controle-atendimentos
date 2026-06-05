# Workflow de Desenvolvimento Assistido por Agentes de IA

## 1. Objetivo

Este documento descreve o fluxo de trabalho adotado para desenvolvimento assistido por agentes de IA no projeto **Controle de Atendimentos SPA**.

O objetivo do workflow é organizar o uso de agentes especializados, documentos de contexto, tarefas, revisões, handoffs, decisões, escalações e documentação, permitindo que o desenvolvimento evolua de forma incremental, rastreável e controlada.

Este processo busca evitar que agentes de IA implementem funcionalidades fora de ordem, ampliem escopo sem autorização, alterem arquitetura sem validação ou tomem decisões relevantes sem intervenção humana.

---

## 2. Estrutura geral da pasta `.ai`

A pasta `.ai` concentra os artefatos de governança do desenvolvimento assistido por IA.

Estrutura adotada ou prevista:

```txt
.ai/
├── agents/
├── context/
├── decisions/
├── decision-requests/
├── handoffs/
├── prompts/
├── reviews/
└── tasks/
```

Observação de nomenclatura:

A pasta `decision-requests/` está sendo usada no projeto como local de registro das solicitações de escalação. Conceitualmente, esses arquivos representam **escalações**, não apenas pedidos de decisão.

Em evolução futura, a pasta poderá ser renomeada para:

```txt
.ai/escalation-requests/
```

Enquanto a renomeação não for feita, a pasta `decision-requests/` deve ser entendida como equivalente operacional de `escalation-requests/`.

---

## 3. Finalidade de cada pasta

## 3.1. `agents/`

Contém os arquivos que definem os papéis permanentes dos agentes de IA.

Exemplos:

```txt
.ai/agents/01-product-owner.md
.ai/agents/02-frontend-architect.md
.ai/agents/03-developer.md
.ai/agents/04-code-reviewer.md
.ai/agents/05-documenter.md
```

Cada arquivo deve conter:

* papel do agente;
* responsabilidades;
* limites;
* regras de atuação;
* formato esperado de resposta;
* critérios de qualidade.

Os arquivos em `agents/` definem comportamentos especializados. Eles não representam tarefas específicas.

---

## 3.2. `context/`

Contém a memória estrutural do projeto.

Exemplos:

```txt
.ai/context/project-brief.md
.ai/context/requirements.md
.ai/context/architecture.md
.ai/context/roadmap.md
```

Esses arquivos descrevem:

* objetivo do projeto;
* requisitos;
* arquitetura aprovada;
* roadmap;
* escopo do MVP;
* restrições conhecidas;
* premissas;
* pontos pendentes.

Os agentes devem consultar esses arquivos antes de executar qualquer tarefa relevante.

---

## 3.3. `decisions/`

Contém decisões já aprovadas e consolidadas.

Exemplos:

```txt
.ai/decisions/0000-initial-stack.md
.ai/decisions/0001-local-persistence-decision.md
```

Esta pasta deve registrar decisões estáveis que orientam o projeto, como:

* stack inicial;
* estratégia de persistência;
* convenções relevantes;
* mudanças arquiteturais aprovadas;
* decisões de escopo com impacto futuro.

A pasta `decisions/` não deve ser usada para dúvidas em aberto. Ela deve conter apenas decisões aprovadas.

---

## 3.4. `decision-requests/`

Contém solicitações de escalação abertas pelos agentes quando encontram um ponto que exige atenção humana antes de prosseguir.

Exemplos:

```txt
.ai/decision-requests/0001-local-persistence-request.md
.ai/decision-requests/0002-resolver-inconsistencia-decisao-persistencia-local-request.md
```

Embora o nome atual da pasta seja `decision-requests/`, sua função no workflow é mais ampla: ela registra **escalações**.

Uma escalação pode ocorrer quando houver dúvida ou conflito envolvendo:

* escopo;
* arquitetura;
* stack;
* bibliotecas;
* persistência;
* dados;
* segurança;
* autenticação;
* regras de negócio;
* roadmap;
* experiência principal do usuário;
* alteração relevante de comportamento funcional;
* necessidade de quebrar ou replanejar uma task;
* inconsistência entre documentos.

A escalação não é necessariamente uma decisão final. Ela é o mecanismo formal para interromper o fluxo, apresentar o problema e solicitar orientação humana.

Após a avaliação humana, a escalação pode resultar em:

* decisão registrada em `decisions/`;
* atualização de uma task;
* atualização do roadmap;
* ajuste de arquitetura;
* correção documental;
* autorização para prosseguir sem mudança;
* cancelamento ou divisão da tarefa.

---

## 3.5. `handoffs/`

Contém passagens formais de contexto entre agentes.

Exemplo:

```txt
.ai/handoffs/0006-po-to-architect-evaluate-local-persistence.md
```

O handoff é usado quando um agente conclui sua análise e orienta o próximo agente do fluxo.

Exemplo típico:

```txt
Product Owner → Frontend Architect
```

O handoff deve conter:

* contexto da última etapa;
* estado atual do produto;
* próxima prioridade recomendada;
* justificativa da prioridade;
* restrições de produto;
* critérios esperados;
* orientação objetiva para o próximo agente;
* pontos pendentes.

O handoff não deve conter implementação de código.

---

## 3.6. `prompts/`

Contém os prompts operacionais usados para acionar os agentes em cada fase do processo.

Convenção sugerida:

```txt
NNletra-descricao.md
```

Exemplos:

```txt
01a-product-owner-initial.md
01b-product-owner-review-current-state.md
02a-frontend-architect-initial.md
02b-frontend-architect-plan-next-task.md
03a-developer-run-task.md
03b-developer-fix-review-items.md
04a-reviewer-run-review.md
04b-reviewer-validate-fixes.md
05a-documenter-update-docs.md
```

A numeração indica o agente ou fase principal.

A letra indica a variação do uso:

```txt
a = execução inicial da fase
b = ajuste, revisão, refinamento ou continuidade
c = uso complementar ou excepcional
```

---

## 3.7. `tasks/`

Contém tarefas específicas, pequenas e executáveis.

Exemplos:

```txt
.ai/tasks/0001-setup-project.md
.ai/tasks/0006-evaluate-local-persistence.md
.ai/tasks/0007-implement-local-persistence.md
```

Convenção:

```txt
NNNN-verbo-objeto.md
```

Cada task deve conter:

* objetivo;
* contexto;
* escopo;
* fora do escopo;
* arquivos esperados ou impactados;
* critérios de aceite;
* resultado esperado.

O Developer só deve implementar uma task se ela estiver formalmente registrada em `tasks/`.

---

## 3.8. `reviews/`

Contém revisões técnicas associadas às tasks.

Exemplo:

```txt
.ai/reviews/0001-setup-project-review.md
```

Convenção:

```txt
NNNN-verbo-objeto-review.md
```

O review deve sempre derivar do nome da task correspondente.

Cada review deve conter:

* parecer geral;
* itens aprovados;
* problemas encontrados;
* prioridade dos problemas;
* impacto;
* correção recomendada;
* pendências obrigatórias;
* indicação se a task pode avançar.

---

## 4. Agentes do workflow

## 4.1. Product Owner

Responsável por:

* revisar o estado do produto;
* definir ou validar requisitos;
* controlar escopo;
* orientar prioridades;
* preparar handoffs para o Frontend Architect;
* identificar inconsistências entre produto, roadmap e documentação;
* abrir escalações quando houver dúvida de produto, escopo, prioridade ou regra de negócio.

Principais arquivos usados:

```txt
.ai/agents/01-product-owner.md
.ai/context/project-brief.md
.ai/context/requirements.md
.ai/context/roadmap.md
.ai/decisions/
.ai/reviews/
README.md
CHANGELOG.md
```

Saídas típicas:

```txt
.ai/context/requirements.md
.ai/context/roadmap.md
.ai/handoffs/
.ai/decision-requests/
.ai/decisions/
```

---

## 4.2. Frontend Architect

Responsável por:

* transformar requisitos em planejamento técnico;
* manter arquitetura coerente;
* planejar a próxima task;
* definir arquivos impactados;
* estabelecer critérios técnicos de aceite;
* evitar complexidade prematura;
* abrir escalação quando encontrar decisão técnica relevante.

Principais arquivos usados:

```txt
.ai/agents/02-frontend-architect.md
.ai/context/project-brief.md
.ai/context/requirements.md
.ai/context/architecture.md
.ai/context/roadmap.md
.ai/decisions/
.ai/handoffs/
```

Saídas típicas:

```txt
.ai/context/architecture.md
.ai/context/roadmap.md
.ai/tasks/
.ai/decision-requests/
```

---

## 4.3. Developer

Responsável por:

* implementar somente a task atual;
* respeitar requisitos, arquitetura, roadmap e decisões aprovadas;
* não expandir escopo;
* não adicionar bibliotecas sem autorização;
* não antecipar funcionalidades futuras;
* registrar no resumo final o que foi feito;
* interromper a implementação se encontrar necessidade de escalação.

Principais arquivos usados:

```txt
.ai/agents/03-developer.md
.ai/context/
.ai/decisions/
.ai/tasks/
```

Saídas típicas:

```txt
código de produção
resumo de implementação
```

O Developer não deve alterar a pasta `.ai`, salvo quando a task ou o fluxo autorizarem expressamente.

---

## 4.4. Code Reviewer

Responsável por:

* revisar a implementação da task;
* verificar aderência ao escopo;
* identificar bugs, riscos e problemas de manutenção;
* apontar violações de arquitetura;
* registrar achados em arquivo de review;
* abrir escalação quando encontrar conflito, ambiguidade ou risco que não seja apenas correção técnica objetiva.

Principais arquivos usados:

```txt
.ai/agents/04-code-reviewer.md
.ai/context/
.ai/decisions/
.ai/tasks/
```

Saídas típicas:

```txt
.ai/reviews/NNNN-verbo-objeto-review.md
.ai/decision-requests/
```

---

## 4.5. Documenter

Responsável por:

* atualizar documentação do projeto;
* manter README e CHANGELOG coerentes;
* registrar apenas o que foi realmente implementado;
* não inventar funcionalidades futuras como se estivessem prontas;
* apontar inconsistências documentais;
* abrir escalação quando houver conflito entre documentação, decisão, task, review ou estado real do código.

Principais arquivos usados:

```txt
.ai/agents/05-documenter.md
.ai/context/
.ai/decisions/
.ai/tasks/
.ai/reviews/
README.md
CHANGELOG.md
```

Saídas típicas:

```txt
README.md
CHANGELOG.md
.ai/decision-requests/
```

---

## 5. Fluxo principal do ciclo de desenvolvimento

O ciclo padrão de uma nova fase ou task deve seguir a ordem abaixo.

## 5.1. Revisão de produto pelo PO

O Product Owner revisa o estado atual do produto, documentação, roadmap e última entrega.

Saídas possíveis:

```txt
.ai/context/requirements.md
.ai/context/roadmap.md
.ai/handoffs/NNNN-po-to-architect-*.md
.ai/decision-requests/
```

---

## 5.2. Planejamento técnico pelo Frontend Architect

O Frontend Architect lê o handoff do PO e planeja a próxima task técnica.

Saídas possíveis:

```txt
.ai/tasks/NNNN-verbo-objeto.md
.ai/context/architecture.md
.ai/context/roadmap.md
.ai/decision-requests/
```

---

## 5.3. Implementação pelo Developer

O Developer executa somente a task atual.

Entrada principal:

```txt
.ai/tasks/NNNN-verbo-objeto.md
```

Saída principal:

```txt
código implementado
```

---

## 5.4. Revisão pelo Code Reviewer

O Reviewer avalia a implementação e registra achados.

Saída principal:

```txt
.ai/reviews/NNNN-verbo-objeto-review.md
```

---

## 5.5. Correções pelo Developer

Se o review apontar pendências obrigatórias, o Developer corrige apenas os pontos indicados.

Entrada principal:

```txt
.ai/reviews/NNNN-verbo-objeto-review.md
```

Saída principal:

```txt
código corrigido
```

---

## 5.6. Validação de correções pelo Reviewer

Quando necessário, o Reviewer valida se as correções resolveram as pendências.

Saída possível:

```txt
atualização do arquivo de review
```

---

## 5.7. Atualização documental pelo Documenter

O Documenter atualiza README, CHANGELOG e demais registros documentais aplicáveis.

Saídas principais:

```txt
README.md
CHANGELOG.md
```

---

## 5.8. Teste final e commit

Após aprovação da task, o usuário executa validação final e realiza commit.

Exemplo:

```bash
npm run build
npm run dev
git status
git add .
git commit -m "feat: implement local persistence"
```

---

## 6. Protocolo de Escalação

## 6.1. Objetivo

O Protocolo de Escalação define quando um agente deve interromper o fluxo automatizado e solicitar orientação humana.

Ele existe para impedir que agentes tomem decisões relevantes sem validação, principalmente quando houver impacto em escopo, arquitetura, roadmap, regras de negócio, documentação decisória ou funcionamento aprovado.

---

## 6.2. Quando escalar

O agente deve escalar quando identificar necessidade de orientação relacionada a:

* alteração de escopo;
* alteração de arquitetura;
* alteração de stack;
* inclusão de biblioteca;
* mudança de persistência;
* criação ou alteração de entidade de dados;
* regra de negócio não definida;
* mudança relevante de UX;
* divergência entre documentos;
* conflito entre task e roadmap;
* necessidade de quebrar uma task em partes menores;
* risco técnico relevante;
* antecipação de funcionalidade futura;
* inconsistência entre solicitação de escalação e decisão aprovada;
* inconsistência entre README, CHANGELOG, task, review ou código;
* dúvida que possa gerar retrabalho relevante.

---

## 6.3. Quando não escalar

O agente não deve escalar por questões simples, como:

* nome de variável;
* ajuste pequeno de CSS;
* correção de import;
* correção de erro de digitação;
* pequena reorganização interna sem impacto externo;
* correção objetiva de bug dentro do escopo;
* ajustes necessários para compilar a task atual.

---

## 6.4. Como escalar

Ao escalar, o agente deve:

1. Interromper a execução da tarefa.
2. Criar ou atualizar um arquivo em:

```txt
.ai/decision-requests/
```

3. Usar o padrão atual do projeto:

```txt
NNNN-tema-request.md
```

4. Registrar:

   * contexto;
   * motivo da escalação;
   * decisão ou orientação necessária;
   * opções possíveis;
   * vantagens;
   * desvantagens;
   * impacto;
   * risco;
   * recomendação do agente;
   * próximo passo após orientação humana.

5. Apresentar um resumo da escalação ao usuário.

6. Aguardar orientação explícita antes de continuar.

Observação:

Embora a pasta se chame `decision-requests/`, estes arquivos devem ser tratados como solicitações de escalação. Nem toda escalação gerará uma decisão formal em `decisions/`.

---

## 6.5. Resultado possível de uma escalação

Uma escalação pode resultar em:

* decisão aprovada registrada em `decisions/`;
* atualização do roadmap;
* atualização da arquitetura;
* alteração da task;
* divisão da task;
* cancelamento da task;
* autorização para prosseguir sem alteração;
* solicitação de nova análise por outro agente;
* correção documental.

---

## 7. Convenções de nomes

## 7.1. Tasks

```txt
.ai/tasks/NNNN-verbo-objeto.md
```

Exemplo:

```txt
.ai/tasks/0007-implement-local-persistence.md
```

---

## 7.2. Reviews

```txt
.ai/reviews/NNNN-verbo-objeto-review.md
```

Exemplo:

```txt
.ai/reviews/0007-implement-local-persistence-review.md
```

---

## 7.3. Handoffs

```txt
.ai/handoffs/NNNN-agente-origem-to-agente-destino-tema.md
```

Exemplo:

```txt
.ai/handoffs/0007-po-to-architect-implement-local-persistence.md
```

---

## 7.4. Escalações

Padrão atualmente usado pelo projeto:

```txt
.ai/decision-requests/NNNN-tema-request.md
```

Exemplo:

```txt
.ai/decision-requests/0001-local-persistence-request.md
```

Padrão conceitual recomendado para evolução futura:

```txt
.ai/escalation-requests/NNNN-tema-escalation.md
```

Exemplo:

```txt
.ai/escalation-requests/0001-local-persistence-escalation.md
```

---

## 7.5. Decisões

```txt
.ai/decisions/NNNN-tema-decision.md
```

Exemplo:

```txt
.ai/decisions/0001-local-persistence-decision.md
```

Exceção histórica:

```txt
.ai/decisions/0000-initial-stack.md
```

A decisão de stack inicial foi registrada como `0000` por representar uma restrição de base anterior às demais decisões do fluxo.

---

## 8. Regras gerais do processo

1. Nenhum agente deve implementar fora da task atual.
2. Nenhum agente deve alterar stack sem escalação.
3. Nenhum agente deve antecipar backend, banco de dados, autenticação ou permissões sem autorização.
4. O Developer só deve codar após existir uma task formal.
5. O Reviewer deve registrar seus achados em arquivo `.md`.
6. O Documenter deve documentar apenas o que foi implementado.
7. O PO deve validar prioridade e escopo antes de nova fase relevante.
8. O Architect deve planejar a task antes do Developer executar.
9. Toda task deve ter review correspondente.
10. Toda decisão relevante deve ser registrada ou referenciada.
11. Em caso de dúvida relevante, o agente deve aplicar o Protocolo de Escalação.
12. Enquanto a pasta `decision-requests/` existir, ela será usada como repositório operacional das escalações.
13. A eventual renomeação de `decision-requests/` para `escalation-requests/` deve ser feita em task documental própria, para evitar quebra de referências.

---

## 9. Fluxo resumido

```txt
PO revisa estado atual
↓
PO gera handoff para Architect
↓
Architect planeja próxima task
↓
Developer implementa task
↓
Reviewer registra review
↓
Developer corrige pendências
↓
Reviewer valida correções, se necessário
↓
Documenter atualiza documentação
↓
Usuário testa
↓
Usuário faz commit
```

---

## 10. Estado atual do processo

O workflow está em consolidação.

O projeto já validou um ciclo com:

* definição de stack;
* requisitos;
* arquitetura;
* roadmap;
* tasks incrementais;
* reviews por task;
* documentação em README e CHANGELOG;
* escalação sobre persistência local;
* decisão formal sobre persistência local;
* implementação de persistência local limitada ao navegador.

As próximas execuções devem servir para validar:

* se o handoff do PO continua útil para o Architect;
* se as tasks permanecem pequenas o suficiente;
* se os reviews estão acionáveis;
* se o protocolo de escalação está claro;
* se `decision-requests/` deve permanecer com esse nome ou ser renomeada futuramente para `escalation-requests/`;
* se a documentação acompanha o código sem gerar burocracia excessiva.

Este documento deve ser atualizado sempre que o workflow for ajustado.
