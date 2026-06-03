# Revisão da Tarefa 0002 - Criar layout base do SPA

## 1. Parecer geral

A implementação atual cumpre a tarefa 0002.

O projeto possui layout base compartilhado, cabeçalho simples, menu de navegação, área principal de conteúdo e páginas principais renderizadas por rota. A estrutura está coerente com o brief, requisitos, arquitetura, roadmap e decisão de stack inicial.

O build de produção foi validado com `npm run build` e passou sem erros, indicando que o projeto continua apto ao fluxo de execução do Vite. Não foram identificadas bibliotecas visuais externas nem funcionalidades fora do escopo da tarefa.

## 2. Problemas encontrados

### Problema

Ainda existem assets sem uso claro em `src/assets/`, como `vue.svg`, `vite.svg` e `hero.png`.

### Impacto

Esses arquivos não afetam o funcionamento do layout, mas deixam a estrutura inicial menos limpa e podem gerar dúvida sobre o que pertence ao produto e o que veio do template ou de experimentos anteriores.

Como a tarefa 0002 trata layout base e CSS simples, esse ponto não bloqueia a entrega, mas continua sendo uma pendência de organização.

### Correção recomendada

Remover os assets que não forem utilizados pela aplicação atual, ou registrar claramente seu uso quando forem integrados a alguma tela.

### Prioridade

Baixa

---

### Problema

O CSS global em `src/style.css` já concentra estilos de layout, navegação, painéis, botões e responsividade.

### Impacto

Para a etapa atual, o arquivo ainda é simples e legível. Porém, conforme listagem, formulário e filtros forem adicionados, esse arquivo pode crescer e misturar estilos globais, layout e domínio.

O risco é futuro, não atual.

### Correção recomendada

Manter o CSS global apenas enquanto ele permanecer pequeno. Nas próximas tarefas, se surgirem estilos específicos de atendimentos, considerar separar estilos por componente ou por blocos claramente organizados, sem adicionar framework CSS externo.

### Prioridade

Baixa

## 3. Itens aprovados

- A tarefa 0002 foi cumprida.
- O layout principal está implementado em `MainLayout.vue`.
- O cabeçalho está separado em `AppHeader.vue`.
- A navegação está separada em `AppSidebar.vue`.
- A área principal de conteúdo renderiza `RouterView`.
- As páginas principais compartilham o layout comum.
- A navegação visual permite acessar:
  - página inicial;
  - listagem de atendimentos;
  - novo atendimento.
- A página inicial oferece acesso direto para listagem e criação de atendimento.
- A página de atendimentos oferece acesso para novo atendimento.
- A página de novo atendimento oferece retorno para a listagem.
- O layout está coerente com a arquitetura proposta para o MVP.
- Os componentes de layout têm responsabilidades claras e pequenas.
- O uso do Pinia permanece restrito a estado geral simples.
- Não foi criada store de atendimentos antes da necessidade real.
- Não há CRUD de atendimentos.
- Não há formulário funcional.
- Não há persistência em `localStorage`.
- Não há backend, login, banco de dados, dashboard avançado ou controle de permissões.
- Nenhuma biblioteca visual externa ou framework CSS externo foi adicionado.
- O CSS permanece simples e compatível com a etapa atual.
- O projeto foi validado com `npm run build` sem erros.

## 4. Itens que impedem avanço

Nenhum item impede avanço.

Os achados são recomendações de baixa prioridade e não bloqueiam a continuidade para a próxima tarefa.

## 5. Conclusão

A tarefa 0002 pode avançar.

O layout base está adequado para o MVP, mantém separação razoável de responsabilidades e respeita as restrições de escopo. Recomenda-se apenas limpar assets sem uso claro e monitorar o crescimento do CSS nas próximas etapas.
