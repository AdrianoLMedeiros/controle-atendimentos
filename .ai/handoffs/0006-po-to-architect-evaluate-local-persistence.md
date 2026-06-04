# Handoff 0006 — PO para Frontend Architect — Avaliar persistência local

## 1. Contexto da última task concluída

A última task concluída foi a tarefa 0005, responsável por refinar o MVP antes de qualquer decisão sobre persistência.

O produto agora possui:

- Formulário de novo atendimento com validação visual para solicitante e assunto.
- Mensagem de confirmação indicando claramente que nenhum dado foi salvo.
- Listagem com data de criação em formato amigável ao usuário.
- Valor original da data preservado semanticamente.
- Assets de template sem uso claro removidos.

A revisão da tarefa 0005 aprovou a entrega e não identificou impedimentos para avanço. A pendência documental sobre o `CHANGELOG.md` já está sanada no estado atual, com registro da versão 0.4.1.

## 2. Estado atual do produto

O produto permanece aderente ao briefing, requisitos, roadmap, README, CHANGELOG e decisão de stack.

As etapas de setup, layout/navegação, listagem simples, formulário inicial e refinamento do MVP visual foram concluídas. O sistema já permite validar os fluxos visuais principais sem depender de backend, login, banco de dados ou permissões.

Ainda não há persistência local, store de atendimentos, criação real de registros na listagem, CRUD completo, edição, exclusão, filtros ou integrações externas.

## 3. Próxima prioridade recomendada

A próxima prioridade recomendada é a versão 0.5.0 do roadmap: avaliação de estado e persistência local.

Esta etapa deve ser uma avaliação e recomendação, não uma implementação.

## 4. Justificativa da prioridade

O MVP visual já está suficientemente claro para discutir se a aplicação deve evoluir para cadastro real local no navegador.

Como persistência local muda o comportamento do produto, cria expectativa de dados salvos e pode influenciar futuras decisões de backend, ela precisa de aprovação explícita antes de ser implementada.

## 5. Restrições de produto

- Não implementar persistência local nesta próxima task.
- Não criar store de atendimentos no Pinia nesta próxima task.
- Não criar registros reais na listagem a partir do formulário.
- Não implementar backend.
- Não implementar autenticação.
- Não implementar banco de dados.
- Não implementar CRUD completo.
- Não implementar edição, exclusão ou detalhamento.
- Não implementar filtros nesta etapa.
- Não adicionar biblioteca externa.
- Não alterar a stack definida.

## 6. Critérios esperados para a próxima entrega

- A próxima entrega deve registrar uma recomendação clara sobre persistência local.
- A recomendação deve indicar se a persistência local deve ser aprovada, adiada ou rejeitada nesta fase.
- A recomendação deve apontar benefícios, riscos e limites da persistência local.
- A recomendação deve indicar o comportamento esperado caso a persistência seja aprovada.
- A recomendação deve manter backend, autenticação, banco de dados e permissões fora do escopo.
- Nenhuma implementação de localStorage, store de atendimentos ou criação real de registros deve ocorrer antes da decisão.

## 7. Orientação objetiva para o Frontend Architect

Planejar uma task de avaliação técnica e funcional da persistência local, mantendo o foco no impacto para o MVP.

O Arquiteto deve indicar o menor escopo possível para uma futura implementação, caso seja aprovada: quais dados seriam persistidos, como o formulário passaria a afetar a listagem e quais limites precisam ficar claros para o usuário.

Não antecipar implementação. A saída esperada deve orientar a decisão do Product Owner e preparar, no máximo, uma proposta para a versão 0.5.1.

## 8. Pontos pendentes

- Decidir se persistência local será aprovada, adiada ou rejeitada.
- Validar se cadastro local no navegador é suficiente para a próxima evolução do MVP.
- Confirmar se os campos atuais do atendimento continuam suficientes para salvar registros locais.
- Definir se filtros simples devem vir antes ou depois da persistência local, caso a persistência seja adiada.
- Monitorar o crescimento de `src/style.css` nas próximas etapas.
