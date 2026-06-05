# Handoff 0007 — PO para Frontend Architect — Implementar persistência local aprovada

## 1. Contexto da última task concluída

A última task concluída foi a tarefa 0006, responsável por avaliar a persistência local antes de implementação.

O produto agora possui:

- MVP visual refinado.
- Avaliação técnica e funcional da persistência local.
- Solicitação de decisão humana registrada e decidida.
- Decisão formal aprovando persistência local limitada ao navegador em `.ai/decisions/0001-local-persistence-decision.md`.

O review da tarefa 0006 apontou inconsistências documentais, mas o estado atual já corrige os pontos principais: o pedido de decisão está marcado como decidido, a decisão formal foi detalhada e a documentação pública registra que a persistência local foi aprovada para etapa posterior.

## 2. Estado atual do produto

O produto permanece aderente ao briefing, requisitos, roadmap, README, CHANGELOG e decisões registradas.

Até o momento, não há implementação de persistência local, store de atendimentos, criação real de registros na listagem, backend, autenticação, banco de dados, permissões, edição, exclusão, detalhamento ou filtros.

A persistência local foi aprovada como próxima evolução, mas deve permanecer limitada ao navegador.

## 3. Próxima prioridade recomendada

A próxima prioridade recomendada é a versão 0.5.1 do roadmap: implementar persistência local aprovada.

## 4. Justificativa da prioridade

A decisão de produto aprovou a Opção A: persistência local limitada ao navegador.

Essa evolução permite validar o fluxo completo de cadastro e listagem sem introduzir backend, autenticação ou banco de dados. O objetivo é transformar o formulário de validação visual em criação local de registros, mantendo o escopo pequeno.

## 5. Restrições de produto

- Não implementar backend.
- Não implementar autenticação.
- Não implementar banco de dados.
- Não implementar sincronização entre usuários, dispositivos ou navegadores.
- Não implementar controle de permissões.
- Não implementar CRUD completo.
- Não implementar edição de atendimento.
- Não implementar exclusão de atendimento.
- Não implementar detalhamento de atendimento.
- Não implementar filtros nesta task.
- Não implementar relatórios, exportação ou upload.
- Não adicionar biblioteca externa.
- Não alterar a stack definida.

## 6. Critérios esperados para a próxima entrega

- O formulário deve criar registros locais no navegador.
- A listagem deve exibir registros locais criados pelo usuário.
- A persistência deve sobreviver a recarregamento da página no mesmo navegador.
- Os dados persistidos devem ficar limitados ao navegador local.
- A interface deve comunicar que os dados ficam apenas neste navegador.
- Os dados mínimos persistidos devem ser: id, protocolo, solicitante, assunto, status e data de criação.
- Protocolo, id e data de criação podem ser gerados localmente pela aplicação.
- A solução deve usar a stack já aprovada, incluindo Pinia se necessário.
- Nenhum dado deve ser enviado para backend ou serviço externo.
- A entrega deve preservar layout, navegação e simplicidade do MVP.

## 7. Orientação objetiva para o Frontend Architect

Planejar uma task de implementação pequena e limitada da persistência local.

O Arquiteto deve definir como o estado de atendimentos será centralizado e como a leitura/gravação local será isolada da camada visual, sem entrar em arquitetura ampla ou preparar backend. A implementação futura deve permitir apenas criar e listar registros locais.

Não planejar edição, exclusão, detalhamento, filtros, relatórios ou permissões nesta task. Caso algum desses itens pareça necessário, deve ser registrado como escopo futuro, não incluído na implementação.

## 8. Pontos pendentes

- Definir texto de interface para informar que os dados são locais ao navegador.
- Confirmar se os dados demonstrativos devem continuar aparecendo junto dos dados locais ou se serão substituídos pela lista local.
- Monitorar o crescimento de `src/style.css`.
- Validar futuramente se os campos atuais são suficientes para uso real.
- Definir filtros simples prioritários após a persistência local.
