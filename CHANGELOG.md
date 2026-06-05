# Changelog

## [0.5.1] - 2026-06-04

### Adicionado

* Store de atendimentos com Pinia em `src/stores/atendimentos.ts`.
* Serviço de persistência local em `src/services/atendimentosStorage.ts`.
* Criação local de atendimentos a partir do formulário.
* Geração local de `id`, `protocolo` e `dataCriacao`.
* Carregamento de atendimentos persistidos no navegador.
* Exibição dos registros locais na página de atendimentos.
* Mensagens de interface indicando que os dados ficam salvos apenas neste navegador.

### Alterado

* A página de atendimentos passou a usar a store como fonte da listagem.
* A página de novo atendimento passou a criar registros locais pela store.
* O formulário passou a emitir os dados de cadastro para criação local.
* Atualizada a documentação do `README.md` para refletir a persistência local implementada.

### Corrigido

* A listagem deixou de usar dados demonstrativos como fonte da tela de atendimentos.

### Observações

* O build de produção foi registrado no review da tarefa 0007 como validado com `npm run build`.
* A persistência implementada é limitada ao navegador e usa a chave `controle-atendimentos:atendimentos`.
* Não foram implementados backend, autenticação, banco de dados, sincronização, permissões, edição, exclusão, detalhamento, filtros, relatórios, exportação, upload ou biblioteca externa.
* Permanecem pendências de baixa prioridade: ajustar textos que ainda sugerem validação visual e reforçar a validação de `status` ao ler dados do `localStorage`.

## [0.5.0] - 2026-06-04

### Adicionado

* Avaliação técnica e funcional da persistência local para o MVP.
* Solicitação de decisão humana sobre persistência local em `.ai/decision-requests/0001-local-persistence-request.md`.
* Decisão formal aprovando persistência local limitada ao navegador em `.ai/decisions/0001-local-persistence-decision.md`.
* Solicitação de decisão para resolver inconsistência documental em `.ai/decision-requests/0002-resolver-inconsistencia-decisao-persistencia-local-request.md`.

### Alterado

* Atualizado o pedido de decisão de persistência local para indicar que a Opção A foi aprovada.
* Formalizada a decisão de persistência local com status, contexto, escopo permitido, restrições e consequências.
* Corrigida a referência da arquitetura para a decisão de stack em `.ai/decisions/0000-initial-stack.md`.
* Atualizada a documentação do `README.md` para refletir que a persistência local foi aprovada para etapa posterior, mas ainda não implementada.

### Corrigido

* Corrigida a ambiguidade entre pedido de decisão pendente e decisão aprovada para persistência local.

### Observações

* O build de produção foi registrado no review da tarefa 0006 como validado com `npm run build`.
* Esta entrega é documental e decisória; não implementa `localStorage`, store de atendimentos ou criação real de registros.
* Persistência local aprovada permanece limitada ao navegador.
* Backend, autenticação, banco de dados, permissões, CRUD completo, edição, exclusão, detalhamento, filtros avançados, relatórios, exportação e upload continuam fora do escopo.

## [0.4.1] - 2026-06-03

### Adicionado

* Validação visual para impedir confirmação do formulário quando solicitante ou assunto estiverem vazios.
* Mensagem de erro orientando o preenchimento dos campos essenciais.
* Exibição da data de criação da listagem em formato `dd/mm/aaaa`.
* Preservação do valor original da data no atributo `datetime`.

### Alterado

* Ajustada a mensagem de sucesso do formulário para reforçar que nenhum dado foi salvo.
* Atualizada a documentação do `README.md` para refletir os refinamentos da tarefa 0005.

### Corrigido

* Removidos assets sem uso claro em `src/assets/`.
* Corrigida a pendência documental do `CHANGELOG.md` apontada no review da tarefa 0005.

### Observações

* O build de produção foi registrado no review da tarefa 0005 como validado com `npm run build`.
* Não foram implementados backend, autenticação, banco de dados, persistência local, store de atendimentos, CRUD completo, criação real de registros, edição, exclusão, detalhamento, filtros, relatórios, exportação, upload, controle de permissões ou biblioteca visual externa.
* Permanece como pendência de baixa prioridade o monitoramento do crescimento de `src/style.css`.

## [0.4.0] - 2026-06-03

### Adicionado

* Componente `AtendimentoForm.vue` para o formulário inicial de novo atendimento.
* Campos editáveis de solicitante, assunto e status.
* Opções de status usando os valores previstos: novo, em andamento e concluído.
* Ação de confirmação visual sem persistir dados.
* Mensagem após tentativa de envio informando que nenhum dado foi salvo.
* Acesso de retorno para a listagem de atendimentos.

### Alterado

* Atualizada a página `NovoAtendimentoPage.vue` para usar o formulário inicial.
* Atualizada a documentação do `README.md` para refletir a entrega da tarefa 0004.

### Corrigido

* Corrigida a documentação que ainda indicava a página de novo atendimento como sem formulário.

### Observações

* O build de produção foi registrado no review da tarefa 0004 como validado com `npm run build`.
* A confirmação do formulário é apenas visual e não cria registros na listagem.
* Não foram implementados backend, autenticação, banco de dados, persistência local, store de atendimentos, CRUD completo, edição, exclusão, detalhamento, filtros, relatórios, exportação, upload, controle de permissões ou biblioteca visual externa.
* Permanecem como pendências de baixa prioridade a validação visual de campos vazios, a limpeza de assets sem uso claro em `src/assets/` e o monitoramento do crescimento de `src/style.css`.

## [0.3.0] - 2026-06-03

### Adicionado

* Tipo `AtendimentoStatus` e interface `Atendimento` em `src/types/atendimento.types.ts`.
* Dados demonstrativos de atendimentos em `src/data/atendimentos.mock.ts`.
* Componente `AtendimentoList.vue` para renderizar lista ou estado vazio.
* Componente `AtendimentoListItem.vue` para exibir protocolo, solicitante, assunto, status e data de criação.
* Componente `AtendimentoEmptyState.vue` para ausência de registros.
* Listagem visual simples na página `AtendimentosPage.vue`.

### Alterado

* Atualizada a documentação do `README.md` para refletir a entrega da tarefa 0003.

### Corrigido

* Não houve correções funcionais nesta entrega.

### Observações

* O build de produção foi registrado no review da tarefa 0003 como validado com `npm run build`.
* Os dados demonstrativos não representam persistência definitiva.
* Não foram implementados backend, autenticação, banco de dados, persistência local, store de atendimentos, CRUD completo, filtros funcionais, edição, exclusão, detalhamento, relatórios, exportação, upload, controle de permissões ou biblioteca visual externa.
* Permanecem como pendências de baixa prioridade a formatação da data de criação para padrão mais amigável, a limpeza de assets sem uso claro em `src/assets/` e o monitoramento do crescimento de `src/style.css`.

## [0.2.0] - 2026-06-03

### Adicionado

* Layout base compartilhado em `MainLayout.vue`.
* Cabeçalho simples separado em `AppHeader.vue`.
* Menu de navegação separado em `AppSidebar.vue`.
* Área principal de conteúdo com renderização das páginas via `RouterView`.
* Navegação visual para página inicial, atendimentos e novo atendimento.
* Ajustes básicos de CSS para layout, navegação, painéis, botões e responsividade.

### Alterado

* Atualizada a documentação do `README.md` para refletir a entrega da tarefa 0002.

### Corrigido

* Não houve correções funcionais nesta entrega.

### Observações

* O build de produção foi registrado no review da tarefa 0002 como validado com `npm run build`.
* Não foram implementados CRUD, formulário funcional, persistência local, backend, login, banco de dados, dashboard avançado, controle de permissões ou biblioteca visual externa.
* Permanecem como pendências de baixa prioridade a limpeza de assets sem uso claro em `src/assets/` e o monitoramento do crescimento de `src/style.css`.

## [0.1.0] - 2026-06-03

### Adicionado

* Projeto inicial com Vue 3, TypeScript e Vite.
* Configuração inicial do Vue Router.
* Configuração inicial do Pinia.
* Rotas principais para início, atendimentos e novo atendimento.
* Layout base com cabeçalho, menu lateral e área de conteúdo.
* Páginas base `HomePage.vue`, `AtendimentosPage.vue` e `NovoAtendimentoPage.vue`.
* Store geral simples para o nome do sistema.
* Estrutura inicial de pastas em `src/`.
* Arquivo `.gitignore` com exclusão de `node_modules/` e `dist/`.
* Documentação inicial do projeto no `README.md`.

### Alterado

* Substituído o conteúdo padrão do template Vue no `README.md` por documentação específica do projeto.

### Corrigido

* Corrigida a lacuna documental apontada no review da tarefa 0001 sobre ausência de README aderente ao projeto.

### Observações

* O build de produção foi registrado no review da tarefa 0001 como validado com `npm run build`.
* Não foram implementados backend, autenticação, banco de dados, persistência local, CRUD completo ou bibliotecas visuais externas.
* O review apontou assets sem uso claro em `src/assets/`; essa pendência permanece registrada e não foi alterada nesta tarefa documental.
