# Handoff 0005 — PO para Frontend Architect — Refinar MVP antes de persistência

## 1. Contexto da última task concluída

A última task concluída foi a tarefa 0004, responsável por criar o formulário inicial de atendimento.

O produto agora possui:

- Página de novo atendimento com formulário visual inicial.
- Campos editáveis para solicitante, assunto e status.
- Ação de confirmação visual.
- Mensagem informando que nenhum dado foi salvo.
- Acesso de retorno para a listagem de atendimentos.

A revisão da tarefa 0004 aprovou a entrega e não identificou impedimentos para avanço. Foram registradas pendências de baixa prioridade: confirmação visual com campos vazios, data da listagem em formato técnico, assets sem uso claro e crescimento do CSS global.

## 2. Estado atual do produto

O produto permanece aderente ao briefing, requisitos, roadmap, README, CHANGELOG e decisão de stack.

As etapas de setup, layout/navegação, listagem simples e formulário inicial foram concluídas. O MVP visual já permite validar os dois fluxos principais: consultar atendimentos demonstrativos e acessar o cadastro inicial.

Ainda não há backend, autenticação, banco de dados, persistência local, store de atendimentos, criação real de registros, CRUD completo, edição, exclusão, filtros, permissões ou biblioteca visual externa.

## 3. Próxima prioridade recomendada

A próxima prioridade recomendada é a versão 0.4.1 do roadmap: refinamentos antes de persistência.

## 4. Justificativa da prioridade

A versão 0.5.0 prevê estado e persistência local, mas essa etapa depende de aprovação explícita. Antes disso, faz sentido sanar pendências simples que afetam clareza do MVP visual e podem gerar confusão na validação por usuários administrativos.

Esses refinamentos reduzem ambiguidade sem ampliar o escopo funcional do produto.

## 5. Restrições de produto

- Não implementar backend.
- Não implementar autenticação.
- Não implementar banco de dados.
- Não implementar persistência local.
- Não criar store de atendimentos no Pinia.
- Não criar registros reais na listagem a partir do formulário.
- Não implementar CRUD completo.
- Não implementar edição, exclusão ou detalhamento.
- Não implementar filtros nesta etapa.
- Não adicionar biblioteca visual externa.
- Não alterar a stack definida.

## 6. Critérios esperados para a próxima entrega

- O formulário deve tratar campos vazios de forma clara, por validação visual simples ou mensagem menos ambígua.
- A confirmação do formulário deve continuar informando que nenhum dado foi salvo.
- A data de criação na listagem deve ser apresentada em formato mais amigável ao usuário.
- Assets sem uso claro devem ser removidos ou mantidos apenas se houver justificativa registrada.
- O CSS global deve permanecer simples e compreensível.
- A entrega não deve criar persistência, store de domínio, backend, login, banco de dados ou permissões.
- A navegação e o layout comum devem ser preservados.

## 7. Orientação objetiva para o Frontend Architect

Planejar uma task curta de refinamento, sem introduzir nova funcionalidade de produto.

O foco deve ser remover ambiguidades do MVP atual: evitar que o formulário pareça aceitar dados essenciais vazios, melhorar a leitura da data na listagem e tratar pendências de organização simples. A próxima task não deve iniciar persistência local sem decisão explícita do Product Owner.

Caso o Arquiteto entenda que alguma pendência é estruturalmente desnecessária para a rodada, ela deve ser registrada como backlog, não ignorada.

## 8. Pontos pendentes

- Aprovar ou não a evolução para persistência local na versão 0.5.0.
- Validar se os campos solicitante, assunto e status são suficientes para o cadastro inicial.
- Validar se os status novo, em andamento e concluído são adequados para o uso real.
- Definir filtros simples prioritários para etapa futura.
- Monitorar o crescimento de `src/style.css` conforme novas telas evoluírem.
