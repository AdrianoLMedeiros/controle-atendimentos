# Handoff 0003 — PO para Frontend Architect — Criar listagem de atendimentos

## 1. Contexto da última task concluída

A última task concluída foi a tarefa 0002, responsável por criar o layout base do SPA.

O produto agora possui:

- Layout principal compartilhado.
- Cabeçalho simples.
- Menu de navegação.
- Área principal de conteúdo.
- Rotas para página inicial, listagem de atendimentos e novo atendimento.
- Páginas base para os fluxos principais do MVP.

A revisão da tarefa 0002 aprovou a entrega e não identificou impedimentos para avanço. As pendências registradas são de baixa prioridade: assets sem uso claro em `src/assets/` e monitoramento do crescimento do CSS global.

## 2. Estado atual do produto

O produto está aderente ao escopo inicial definido no briefing, requisitos, roadmap e decisão de stack.

O estado atual cobre as etapas de setup inicial e layout/navegação. A página de atendimentos existe, mas ainda não possui listagem funcional. A página de novo atendimento existe apenas como base para etapa futura e não deve ser expandida nesta próxima task.

Não há backend, autenticação, banco de dados, persistência local, CRUD completo, permissões ou biblioteca visual externa.

## 3. Próxima prioridade recomendada

A próxima prioridade recomendada é a versão 0.3.0 do roadmap: criar a base visual e estrutural da listagem de atendimentos.

## 4. Justificativa da prioridade

A listagem é o próximo passo lógico após a conclusão do layout e da navegação, pois materializa o fluxo principal de consulta e acompanhamento previsto no objetivo do sistema.

Essa etapa permite validar como um atendimento será representado na interface antes de avançar para o formulário de cadastro, persistência local ou filtros.

## 5. Restrições de produto

- Não implementar backend.
- Não implementar autenticação.
- Não implementar banco de dados.
- Não implementar persistência local.
- Não criar CRUD completo.
- Não implementar edição ou exclusão de atendimento.
- Não implementar formulário funcional de cadastro nesta etapa.
- Não implementar filtros avançados.
- Não adicionar bibliotecas externas sem aprovação.
- Não transformar a listagem em relatório.
- Não criar controle de permissões.

## 6. Critérios esperados para a próxima entrega

- A página de atendimentos deve apresentar uma área clara de listagem.
- A interface deve permitir diferenciar atendimentos quando houver dados demonstrativos.
- Deve existir estado vazio compreensível quando não houver atendimentos.
- A página deve manter acesso para criar novo atendimento.
- Dados demonstrativos, se usados, não devem ser tratados como persistência.
- A entrega não deve depender de backend, banco de dados, localStorage ou login.
- A listagem deve permanecer simples e adequada ao MVP.
- A entrega deve preservar o layout comum e a navegação existente.

## 7. Orientação objetiva para o Frontend Architect

Planejar a próxima task com foco exclusivo na listagem simples de atendimentos.

O planejamento deve definir a organização visual da listagem, os elementos mínimos para representar um atendimento e o comportamento de estado vazio. Caso sejam necessários dados demonstrativos para validação visual, eles devem ser tratados claramente como mock ou exemplo temporário.

O Arquiteto deve evitar antecipar o formulário funcional, persistência local, stores de domínio ou filtros avançados. Se houver necessidade de definir um tipo inicial de atendimento, ele deve conter apenas campos essenciais e ainda deve considerar que os campos obrigatórios do atendimento permanecem pendentes de validação pelo Product Owner.

## 8. Pontos pendentes

- Definir os campos obrigatórios de um atendimento administrativo.
- Definir quais informações mínimas devem aparecer na listagem.
- Validar possíveis status ou situações de atendimento.
- Decidir se haverá dados demonstrativos na listagem para validação visual.
- Avaliar limpeza de assets sem uso claro em `src/assets/`.
- Monitorar o crescimento de `src/style.css` nas próximas etapas.
