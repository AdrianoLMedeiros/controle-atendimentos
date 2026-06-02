# Changelog

## [0.1.0] - 2026-06-02

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
