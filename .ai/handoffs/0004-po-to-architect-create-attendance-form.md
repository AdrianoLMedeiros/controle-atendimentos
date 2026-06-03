# Handoff 0004 — PO para Frontend Architect — Criar cadastro inicial de atendimento

## 1. Contexto da última task concluída

A última task concluída foi a tarefa 0003, responsável por criar a listagem simples de atendimentos.

O produto agora possui:

- Listagem visual simples na página de atendimentos.
- Componentes próprios para lista, item de atendimento e estado vazio.
- Tipo inicial de atendimento.
- Dados demonstrativos isolados.
- Representação visual de protocolo, solicitante, assunto, status e data de criação.

A revisão da tarefa 0003 aprovou a entrega e não identificou impedimentos para avanço. As pendências registradas são de baixa prioridade: formatação da data para padrão mais amigável, assets sem uso claro em `src/assets/` e monitoramento do crescimento do CSS global.

## 2. Estado atual do produto

O produto permanece aderente ao escopo definido no briefing, requisitos, roadmap, README, CHANGELOG e decisão de stack.

As etapas de setup, layout/navegação e listagem simples estão concluídas. A página de novo atendimento ainda existe apenas como base visual e não possui formulário funcional.

Não há backend, autenticação, banco de dados, persistência local, store de atendimentos, CRUD completo, edição, exclusão, detalhamento, permissões ou biblioteca visual externa.

## 3. Próxima prioridade recomendada

A próxima prioridade recomendada é a versão 0.4.0 do roadmap: criar a tela inicial de cadastro de atendimento.

## 4. Justificativa da prioridade

Após a listagem simples, o próximo fluxo essencial do MVP é permitir validar a estrutura de registro de um novo atendimento.

Essa etapa deve confirmar se os campos iniciais fazem sentido para o usuário administrativo, sem ainda salvar dados, integrar backend ou criar persistência local.

## 5. Restrições de produto

- Não implementar backend.
- Não implementar autenticação.
- Não implementar banco de dados.
- Não implementar persistência local.
- Não criar store de atendimentos no Pinia para esta etapa.
- Não adicionar edição, exclusão ou detalhamento de atendimento.
- Não implementar upload de arquivos.
- Não implementar relatórios ou exportação.
- Não implementar controle de permissões.
- Não adicionar biblioteca visual externa.
- Não alterar a stack definida.
- Não transformar a submissão do formulário em cadastro real persistido.

## 6. Critérios esperados para a próxima entrega

- A página de novo atendimento deve apresentar um formulário inicial claro.
- O formulário deve conter apenas campos essenciais para validação do MVP.
- Os campos editáveis mínimos recomendados são: solicitante, assunto e status.
- Protocolo e data de criação não devem exigir entrada manual nesta etapa.
- O usuário deve entender que está registrando um novo atendimento.
- Deve haver ação visual de envio ou confirmação, sem salvar dados de forma persistente.
- Deve haver acesso de retorno para a listagem de atendimentos.
- A entrega deve preservar o layout comum e a navegação existente.
- A entrega não deve depender de backend, banco de dados, localStorage, login ou permissões.

## 7. Orientação objetiva para o Frontend Architect

Planejar a próxima task com foco exclusivo no formulário inicial de novo atendimento.

O planejamento deve definir a organização visual do formulário, os campos mínimos, mensagens de orientação ou validação visual simples e o comportamento após uma tentativa de envio sem persistência.

O Arquiteto deve evitar antecipar estado compartilhado de domínio, persistência local, cadastro real, CRUD completo ou filtros. Caso seja necessário reaproveitar o tipo de atendimento já criado, isso deve continuar limitado ao contexto visual e estrutural do MVP.

## 8. Pontos pendentes

- Validar com o Product Owner se os campos editáveis mínimos serão apenas solicitante, assunto e status.
- Validar se os status novo, em andamento e concluído são suficientes para o fluxo administrativo real.
- Definir se a submissão visual deve exibir mensagem temporária, estado de sucesso ou apenas manter o formulário estruturado.
- Refinar futuramente a apresentação da data de criação para formato mais amigável.
- Avaliar limpeza de assets sem uso claro em `src/assets/`.
- Monitorar o crescimento de `src/style.css` nas próximas etapas.
