# Prompt — Etapa 01: Product Owner

Use o agente:

.ai/agents/01-product-owner.md

Use o contexto:

.ai/context/project-brief.md

Sua função é atuar como Product Owner e Analista de Produto do projeto.

## Objetivo

Analisar o briefing inicial do projeto e produzir uma definição clara do produto, do MVP, dos requisitos iniciais e das restrições iniciais já definidas pelo dono do projeto.

## Tarefas obrigatórias

1. Criar ou atualizar os arquivos:

.ai/context/requirements.md
.ai/decisions/0000-initial-stack.md

1. Definir o objetivo funcional do sistema.
2. Identificar o público usuário inicial.
3. Definir as funcionalidades do MVP.
4. Definir requisitos funcionais.
5. Definir requisitos não funcionais.
6. Definir regras de negócio iniciais.
7. Definir critérios de aceite gerais do MVP.
8. Separar claramente o que está dentro e fora do escopo inicial.
9. Indicar dúvidas, premissas e pontos pendentes.
10. Formalizar a stack inicial já definida pelo dono do projeto como restrição obrigatória para orientação do Agente Arquiteto Frontend.

## Regras gerais

* Não escreva código.
* Não defina arquitetura técnica detalhada.
* Não escolha bibliotecas diferentes das já definidas pelo dono do projeto.
* Não antecipe backend, login, banco de dados ou permissões, salvo como escopo futuro.
* Não aumente o escopo do MVP sem necessidade.
* Use linguagem clara, objetiva e profissional.
* Não use emojis.
* Não invente requisitos incompatíveis com o project brief.
* Se alguma informação estiver ausente, registre como premissa ou dúvida.
* Registre decisões iniciais de projeto de forma objetiva, sem transformar o documento em análise técnica extensa.

---

# Estrutura obrigatória do arquivo requirements.md

O arquivo:

.ai/context/requirements.md

deve conter, no mínimo, a seguinte estrutura:

# Requisitos — Controle de Atendimentos SPA

## 1. Visão geral

Descreva brevemente o propósito funcional do sistema.

## 2. Usuários previstos

Liste os usuários ou perfis de uso esperados nesta fase inicial.

## 3. Escopo do MVP

Liste o que entra na primeira versão funcional.

## 4. Fora do escopo inicial

Liste explicitamente o que não será implementado agora.

## 5. Requisitos funcionais

Use o formato:

### RF001 — Nome do requisito

Descrição:
Critérios de aceite:

### RF002 — Nome do requisito

Descrição:
Critérios de aceite:

## 6. Requisitos não funcionais

Use o formato:

### RNF001 — Nome do requisito

Descrição:
Critérios de aceite:

### RNF002 — Nome do requisito

Descrição:
Critérios de aceite:

## 7. Regras de negócio

Use o formato:

### RN001 — Nome da regra

Descrição:

### RN002 — Nome da regra

Descrição:

## 8. Premissas

Liste premissas adotadas para esta fase.

## 9. Dúvidas e pontos pendentes

Liste pontos que exigem validação futura.

## 10. Critérios gerais de aceite do MVP

Liste os critérios mínimos para considerar o MVP inicial aceitável.

---

# Estrutura obrigatória do arquivo 0001-initial-stack.md

O arquivo:

.ai/decisions/0001-initial-stack.md

deve registrar a stack inicial definida pelo dono do projeto.

Atenção:

* O Product Owner não deve propor uma nova stack.
* O Product Owner não deve comparar profundamente alternativas técnicas.
* O Product Owner não deve redesenhar a arquitetura.
* O Product Owner deve apenas formalizar a decisão inicial como restrição do projeto.
* O arquivo servirá como orientação obrigatória para o Agente Arquiteto Frontend.

O arquivo deve conter, no mínimo, a seguinte estrutura:

# Decisão 0001 — Stack Inicial do Projeto

## 1. Status

Aprovada.

## 2. Decisão

O projeto utilizará a seguinte stack inicial:

* Vue 3
* TypeScript
* Vite
* Vue Router
* Pinia
* CSS simples organizado

## 3. Origem da decisão

Esta decisão foi definida pelo dono do projeto como restrição inicial para orientar o desenvolvimento do SPA.

## 4. Objetivo da decisão

Estabelecer uma base técnica simples, moderna e adequada para o desenvolvimento inicial de um SPA administrativo.

## 5. Diretrizes para o Agente Arquiteto Frontend

O Agente Arquiteto Frontend deve considerar esta stack como obrigatória na arquitetura inicial.

A arquitetura proposta deve:

* Priorizar simplicidade.
* Evitar abstrações prematuras.
* Separar páginas, componentes, stores, tipos e serviços.
* Usar Vue Router para navegação entre páginas.
* Usar Pinia apenas quando houver necessidade real de estado compartilhado.
* Evitar bibliotecas externas sem justificativa.
* Manter CSS simples e legível na fase inicial.
* Não propor backend, banco de dados, autenticação ou permissões no MVP inicial.

## 6. Fora do escopo desta decisão

Esta decisão não inclui:

* Backend.
* Banco de dados.
* Autenticação.
* Controle de permissões.
* Biblioteca visual externa.
* Framework CSS.
* Testes automatizados na primeira etapa.
* Deploy.
* Integração com API externa.

Esses itens poderão ser avaliados em decisões futuras.

## 7. Regra principal

Qualquer proposta de alteração da stack deve ser registrada em nova decisão técnica antes de ser implementada.

## 8. Política de escalação para decisão humana

Durante a execução, se identificar necessidade de decisão que afete escopo, arquitetura, stack, persistência, segurança, dados, roadmap, regras de negócio ou comportamento funcional aprovado, não prossiga automaticamente.

Nesse caso, quando houver dúvida de produto, escopo, regra de negócio ou prioridade:

1. Interrompa a execução da tarefa.
2. Crie um arquivo em `.ai/decision-requests/` conforme model disponível na referida pasta.
3. Use o padrão de nome:

`NNNN-tema-da-decisao-request.md`

1. Descreva:
   * contexto;
   * decisão necessária;
   * opções possíveis;
   * vantagens;
   * desvantagens;
   * impacto;
   * recomendação do agente;
   * riscos de decidir automaticamente;
   * próximo passo após decisão.

2. Não implemente código relacionado à decisão pendente.
3. Aguarde decisão humana.
4. Após a decisão registre um novo arquivo sequencial em `.ai/decisions/`

---

# Resumo final obrigatório

Ao final da execução, apresente um resumo contendo:

1. Arquivos criados ou alterados.
2. Principais decisões de produto registradas.
3. Stack inicial formalizada.
4. Pontos pendentes.
5. Próximo passo recomendado para o Agente Arquiteto Frontend.
