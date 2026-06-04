# Controle de Atendimentos SPA

## Descrição breve

SPA inicial para controle de atendimentos administrativos, com base técnica, rotas principais, layout compartilhado, listagem visual simples e formulário inicial validado visualmente, sem persistência.

## Objetivo

Permitir, nas próximas etapas, registrar, listar, filtrar e acompanhar atendimentos administrativos em uma aplicação web simples. No estado atual, o projeto entrega a base técnica, a navegação principal, o layout base, páginas iniciais, uma listagem visual simples com dados demonstrativos e um formulário inicial de cadastro com validação visual, sem persistência de dados.

## Stack utilizada

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- CSS simples, sem biblioteca visual externa

## Funcionalidades implementadas até agora

- Projeto Vite configurado com Vue 3 e TypeScript.
- Vue Router configurado com as rotas iniciais:
  - `/`
  - `/atendimentos`
  - `/atendimentos/novo`
- Pinia instalado e configurado na entrada da aplicação.
- Store geral simples em `src/stores/app.ts` para o nome do sistema.
- Layout base compartilhado com cabeçalho, menu lateral e área principal de conteúdo.
- Navegação visual entre as páginas principais.
- Container de conteúdo e ajustes responsivos básicos no CSS global.
- Página inicial com acesso para atendimentos e novo atendimento.
- Página de atendimentos com listagem visual simples.
- Componentes próprios para lista, item de atendimento e estado vazio.
- Tipo TypeScript inicial para atendimento administrativo.
- Dados demonstrativos isolados em `src/data/atendimentos.mock.ts`.
- Representação visual de protocolo, solicitante, assunto, status e data de criação em formato legível.
- Página de novo atendimento com formulário visual inicial.
- Formulário com campos editáveis para solicitante, assunto e status.
- Validação visual para evitar confirmação quando solicitante ou assunto estiverem vazios.
- Ação de confirmação visual com mensagem informando que nenhum dado foi salvo.
- Acesso de retorno da página de novo atendimento para a listagem.
- Remoção de assets de template sem uso claro em `src/assets/`.
- `.gitignore` configurado com `node_modules/` e `dist/`.

## Funcionalidades fora do escopo atual

- Backend.
- Autenticação.
- Banco de dados.
- Persistência local.
- CRUD completo de atendimentos.
- Cadastro real persistido.
- Criação de registros na listagem a partir do formulário.
- Listagem com dados reais ou persistidos.
- Filtros funcionais ou avançados.
- Edição ou exclusão de atendimentos.
- Detalhamento de atendimento.
- Upload de arquivos.
- Relatórios avançados.
- Controle de permissões.
- Exportação de dados.
- Integrações externas.
- Bibliotecas visuais externas.

## Estrutura básica de pastas

```txt
src/
  main.ts
  App.vue
  style.css
  router/
    index.ts
  stores/
    app.ts
  pages/
    HomePage.vue
    AtendimentosPage.vue
    NovoAtendimentoPage.vue
  components/
    atendimentos/
      AtendimentoEmptyState.vue
      AtendimentoForm.vue
      AtendimentoList.vue
      AtendimentoListItem.vue
    layout/
      MainLayout.vue
      AppHeader.vue
      AppSidebar.vue
  data/
    atendimentos.mock.ts
  types/
    atendimento.types.ts
public/
```

## Como instalar dependências

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Para gerar build de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Scripts disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento do Vite.
- `npm run build`: executa validação TypeScript com `vue-tsc` e gera o build com Vite.
- `npm run preview`: disponibiliza localmente o build gerado.

## Decisões técnicas iniciais

- A aplicação será uma SPA em Vue 3.
- TypeScript deve ser usado sempre que aplicável.
- Vite foi adotado como ferramenta de desenvolvimento e build.
- Vue Router foi configurado desde o início para suportar as páginas principais do MVP.
- Pinia foi configurado como infraestrutura de estado, com uso inicial limitado a estado geral simples.
- Persistência, backend, autenticação, banco de dados e permissões permanecem fora do MVP inicial.
- A interface deve permanecer simples, com CSS próprio e sem biblioteca visual externa nesta etapa.

## Próximos passos

- Avaliar persistência local apenas após aprovação explícita.
- Monitorar o crescimento do CSS global e separar estilos quando houver estilos específicos de domínio.

## Pendências conhecidas

- A evolução para persistência local ainda depende de aprovação explícita.
- Os reviews das tarefas 0002, 0003 e 0004 apontaram que `src/style.css` ainda está simples, mas deve ser monitorado para evitar acúmulo de estilos globais, layout e domínio nas próximas etapas.
