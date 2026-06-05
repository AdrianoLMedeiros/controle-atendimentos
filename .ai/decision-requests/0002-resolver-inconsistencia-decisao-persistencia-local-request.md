# Solicitação de Decisão 0002 — Resolver inconsistência da decisão de persistência local

## 1. Status

Decidida em `.ai/decisions/0001-local-persistence-decision.md`.

## 2. Contexto

Durante a execução da tarefa documental, foi identificada uma inconsistência no fluxo decisório da persistência local.

A tarefa `0006-evaluate-local-persistence.md` previa apenas avaliação e registro de recomendação antes de qualquer implementação. O review `0006-evaluate-local-persistence-review.md` informa que:

- a avaliação foi registrada em `.ai/decision-requests/0001-local-persistence-request.md`;
- não houve implementação de persistência local;
- existe `.ai/decisions/0001-local-persistence-decision.md` registrando a Opção A;
- o pedido de decisão original ainda está com status "Pendente de decisão humana";
- o arquivo de decisão existente está resumido e usa título de solicitação, não de decisão formal;
- há impedimento documental para avançar diretamente para implementação de persistência local.

Essa inconsistência afeta escopo, roadmap e comportamento funcional aprovado, pois a persistência local muda o produto de fluxo visual sem salvamento para criação real de registros no navegador.

## 3. Decisão necessária

Definir como o projeto deve tratar o estado decisório da persistência local antes de atualizar a documentação geral ou planejar implementação:

1. confirmar a aprovação da persistência local e formalizar a decisão existente;
2. considerar a decisão ainda pendente e manter a persistência local bloqueada;
3. substituir a decisão atual por adiamento ou rejeição da persistência local nesta fase.

## 4. Opções

### Opção A — Confirmar aprovação e formalizar decisão

Descrição:
Confirmar que `.ai/decisions/0001-local-persistence-decision.md` representa uma decisão humana válida pela persistência local limitada ao navegador, reescrevendo-a como decisão formal com status, contexto, justificativa, escopo permitido, restrições e consequências. Atualizar também `.ai/decision-requests/0001-local-persistence-request.md` para indicar que foi decidido.

Vantagens:
- Remove ambiguidade documental.
- Permite planejar uma próxima task de implementação local com limites claros.
- Mantém rastreabilidade entre pedido de decisão e decisão aprovada.

Desvantagens:
- Confirma uma mudança de comportamento funcional do MVP.
- Exige cuidado para não interpretar a aprovação como autorização para CRUD completo, backend ou dados compartilhados.

Impacto:
Médio.

### Opção B — Manter decisão como pendente

Descrição:
Considerar que o arquivo `.ai/decisions/0001-local-persistence-decision.md` ainda não é suficiente para aprovar persistência local. Manter a persistência bloqueada até o Product Owner registrar uma decisão formal completa.

Vantagens:
- Evita avançar com uma mudança de escopo sem confirmação inequívoca.
- Preserva o comportamento atual do MVP sem persistência.
- Reduz risco de implementação prematura de estado e storage.

Desvantagens:
- Atrasa a validação do fluxo completo de cadastro e listagem local.
- Mantém a tarefa 0006 com pendência documental.

Impacto:
Baixo a médio.

### Opção C — Adiar ou rejeitar persistência local

Descrição:
Registrar decisão humana substituindo a opção atual por adiamento ou rejeição da persistência local nesta fase, direcionando o roadmap para filtros simples, refinamentos ou outra prioridade aprovada.

Vantagens:
- Mantém o MVP simples e sem dados persistidos.
- Evita expectativa de dados salvos localmente.
- Permite avançar para melhorias de consulta sem implementar storage.

Desvantagens:
- O formulário continua sem criação real de registros.
- O fluxo completo local de cadastro e listagem segue sem validação prática.

Impacto:
Baixo a médio.

## 5. Recomendação do agente

Recomenda-se a Opção A somente se a decisão humana já tiver sido tomada e o arquivo `.ai/decisions/0001-local-persistence-decision.md` for a fonte oficial dessa aprovação.

Nesse caso, a decisão deve ser formalizada antes de qualquer implementação, deixando explícito que o escopo permitido é limitado ao navegador, com Pinia e `localStorage`, sem backend, autenticação, banco de dados, permissões, edição, exclusão, detalhamento ou CRUD completo.

Se essa confirmação humana não existir, recomenda-se a Opção B.

## 6. Riscos se decidir sem validação humana

- Registrar persistência local como aprovada sem autorização clara.
- Implementar criação real de registros antes de decisão de produto.
- Confundir persistência local no navegador com armazenamento definitivo.
- Ampliar escopo para CRUD, backend ou dados compartilhados.
- Quebrar a rastreabilidade entre pedido de decisão, decisão formal, roadmap e changelog.

## 7. Decisão humana

Opção A aprovada: confirmar a aprovação da persistência local e formalizar a decisão existente.

A decisão formal está registrada em `.ai/decisions/0001-local-persistence-decision.md`.

## 8. Próximo passo após decisão

Após decisão humana:

- formalizar `.ai/decisions/0001-local-persistence-decision.md`;
- atualizar o pedido `0001-local-persistence-request.md` como decidido;
- atualizar README/CHANGELOG com a avaliação da tarefa 0006;
- planejar a próxima task de implementação local limitada ao navegador.
