# Revisão da Tarefa 0005 - Refinar MVP antes de persistência

## 1. Parecer geral

A implementação atual cumpre a tarefa 0005.

Os refinamentos principais foram realizados: o formulário não confirma visualmente quando solicitante ou assunto estão vazios, a mensagem de sucesso deixa claro que nenhum dado foi salvo, a data da listagem é exibida em formato mais amigável e o valor original permanece no atributo `datetime`. Os assets sem uso claro em `src/assets/` foram removidos.

Não foram identificadas implementações fora do escopo, como backend, autenticação, banco de dados, `localStorage`, store de atendimentos, CRUD completo, filtros, edição, exclusão ou biblioteca visual externa.

O projeto foi validado com `npm run build` e passou sem erros. O script `npm run dev` continua disponível no `package.json`, usando Vite.

## 2. Problemas encontrados

### Problema

O `CHANGELOG.md` ainda não possui registro da entrega 0.4.1 / tarefa 0005.

### Impacto

O projeto mantém changelog para as entregas anteriores, e a tarefa 0005 alterou comportamento visível do MVP: validação visual do formulário, mensagem de confirmação, formatação de data e remoção de assets. Sem registro, a rastreabilidade documental fica incompleta.

Isso não afeta o funcionamento da aplicação, mas reduz clareza histórica para revisões futuras.

### Correção recomendada

Adicionar uma seção da versão 0.4.1 ao `CHANGELOG.md`, registrando:

- validação visual dos campos solicitante e assunto;
- mensagem informando que nenhum dado foi salvo;
- exibição da data em formato `dd/mm/aaaa`;
- remoção de assets sem uso claro;
- manutenção da ausência de persistência, store de atendimentos e backend.

### Prioridade

Baixa

---

### Problema

Os estilos de layout, listagem e formulário continuam concentrados em `src/style.css`.

### Impacto

O CSS ainda está simples e compreensível, e a tarefa explicitamente proibiu refatoração ampla. Porém, o arquivo já reúne estilos globais, layout, componentes de atendimento, formulário, botões e responsividade. Nas próximas etapas, isso pode reduzir coesão e dificultar manutenção.

### Correção recomendada

Manter como está nesta etapa. Se novas funcionalidades de domínio forem adicionadas, separar estilos por componente ou por blocos mais explícitos, sem adotar framework CSS externo.

### Prioridade

Baixa

## 3. Itens aprovados

- A tarefa 0005 foi cumprida.
- O formulário bloqueia confirmação visual quando `solicitante` ou `assunto` estão vazios.
- A mensagem de erro orienta o preenchimento dos campos essenciais.
- A mensagem de sucesso informa claramente que nenhum dado foi salvo.
- A submissão continua local ao componente e sem persistência.
- A data de criação da listagem é exibida em formato amigável ao usuário.
- O valor original da data é preservado no atributo `datetime`.
- Os dados mockados continuam isolados em `src/data/atendimentos.mock.ts`.
- Os assets sem uso claro foram removidos de `src/assets/`.
- O `README.md` foi atualizado para refletir melhor o estado atual do MVP.
- Nenhuma store de atendimentos foi criada.
- Não foi implementado `localStorage`.
- Não há backend, autenticação, banco de dados ou controle de permissões.
- Não há CRUD completo, cadastro persistido, edição, exclusão, filtros, relatórios, exportação ou upload.
- Nenhuma biblioteca externa ou framework CSS foi adicionado.
- O layout comum e a navegação existente foram preservados.
- O CSS permanece simples para o tamanho atual do projeto.
- O projeto foi validado com `npm run build` sem erros.

## 4. Itens que impedem avanço

Nenhum item impede avanço.

Os achados são de baixa prioridade e não bloqueiam a continuidade para avaliação futura de persistência local, desde que essa evolução seja aprovada explicitamente.

## 5. Conclusão

A tarefa 0005 pode avançar.

O MVP visual ficou mais claro para validação interna e continua respeitando as restrições de escopo. Recomenda-se apenas atualizar o `CHANGELOG.md` para registrar a entrega 0.4.1 e continuar monitorando o crescimento do CSS nas próximas tarefas.
