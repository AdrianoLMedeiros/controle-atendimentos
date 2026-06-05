# Handoff 0009 — PO para Frontend Architect — Implementar filtros simples

## 1. Contexto da última task concluída

A última task concluída foi a tarefa 0008, responsável por refinar a persistência local.

O produto agora possui:

- Cadastro local de atendimentos no navegador.
- Listagem baseada nos registros locais.
- Store de atendimentos com Pinia.
- Serviço de `localStorage` isolado dos componentes visuais.
- Textos principais coerentes com salvamento local.
- Validação de leitura do storage restrita aos status previstos.

A revisão da tarefa 0008 aprovou a entrega e não identificou impedimentos para avanço. A única pendência de baixa prioridade é a mensagem de erro do formulário ainda usar o termo `validar`.

## 2. Estado atual do produto

O produto permanece aderente ao briefing, requisitos, roadmap e decisões registradas.

A aplicação permite registrar e listar atendimentos locais no navegador. Ainda não há backend, autenticação, banco de dados, sincronização, permissões, edição, exclusão, detalhamento, relatórios, exportação ou upload.

## 3. Próxima prioridade recomendada

A próxima prioridade recomendada é a versão 0.6.0 do roadmap: filtros simples e melhorias de uso.

## 4. Justificativa da prioridade

Com cadastro e listagem local funcionando, o próximo ganho funcional é facilitar a consulta e acompanhamento dos registros criados.

Filtros simples por status e busca textual ajudam o usuário administrativo a localizar atendimentos sem transformar a funcionalidade em relatório avançado.

## 5. Restrições de produto

- Não implementar backend.
- Não implementar autenticação.
- Não implementar banco de dados.
- Não implementar sincronização entre usuários, dispositivos ou navegadores.
- Não implementar controle de permissões.
- Não implementar edição de atendimento.
- Não implementar exclusão de atendimento.
- Não implementar detalhamento de atendimento.
- Não implementar relatórios.
- Não implementar exportação.
- Não implementar upload de arquivos.
- Não adicionar biblioteca externa.
- Não alterar a stack definida.

## 6. Critérios esperados para a próxima entrega

- A listagem deve permitir filtro simples por status.
- A listagem deve permitir busca textual simples, se isso couber de forma pequena.
- Os filtros devem operar apenas sobre os atendimentos locais disponíveis no navegador.
- A interface deve continuar informando que os dados ficam apenas neste navegador.
- Estado vazio deve diferenciar ausência de registros de ausência de resultados filtrados, se aplicável.
- A mensagem de erro do formulário deve deixar de usar o termo `validar` e ficar coerente com salvamento local.
- A entrega não deve incluir edição, exclusão, detalhamento, relatórios ou exportação.

## 7. Orientação objetiva para o Frontend Architect

Planejar uma task focada em filtros simples na página de atendimentos.

O planejamento deve priorizar um filtro por status e uma busca textual simples sobre protocolo, solicitante ou assunto. A solução deve permanecer local, pequena e compatível com os dados já mantidos na store de atendimentos.

Não planejar filtros avançados, múltiplos critérios complexos, relatórios, exportação ou mudanças no modelo de dados sem nova decisão de produto.

## 8. Pontos pendentes

- Validar futuramente se os filtros por status e busca textual atendem ao uso real.
- Monitorar o crescimento de `src/style.css`.
- Avaliar em etapa futura se edição, exclusão ou detalhamento devem entrar no roadmap.
