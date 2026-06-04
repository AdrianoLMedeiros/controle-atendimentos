# Changelog

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
