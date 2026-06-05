# Controle de Atendimentos SPA

## Descrição breve

SPA inicial para controle de atendimentos administrativos, com base técnica, rotas principais, layout compartilhado, listagem simples e persistência local limitada ao navegador.

## Objetivo

Permitir registrar, listar, filtrar e acompanhar atendimentos administrativos em uma aplicação web simples. No estado atual, o projeto entrega a base técnica, a navegação principal, o layout base, páginas iniciais, listagem simples e cadastro local limitado ao navegador.

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
- Página de atendimentos com listagem simples de registros locais.
- Filtro simples por status na listagem.
- Busca textual simples por protocolo, solicitante ou assunto.
- Estado vazio específico quando filtros não retornam resultados.
- Contrato compartilhado para o filtro de status.
- Componentes próprios para filtros, lista, item de atendimento e estado vazio.
- Tipo TypeScript inicial para atendimento administrativo.
- Dados demonstrativos isolados em `src/data/atendimentos.mock.ts`, sem uso como fonte persistida.
- Representação visual de protocolo, solicitante, assunto, status e data de criação em formato legível.
- Página de novo atendimento com formulário inicial.
- Formulário com campos editáveis para solicitante, assunto e status.
- Validação visual para evitar confirmação quando solicitante ou assunto estiverem vazios.
- Ação de cadastro local com mensagem informando que o atendimento foi salvo neste navegador.
- Acesso de retorno da página de novo atendimento para a listagem.
- Store de atendimentos em Pinia para centralizar registros locais.
- Serviço simples de `localStorage` para persistência limitada ao navegador.
- Geração local de `id`, `protocolo` e `dataCriacao`.
- Remoção de assets de template sem uso claro em `src/assets/`.
- `.gitignore` configurado com `node_modules/` e `dist/`.

## Funcionalidades fora do escopo atual

- Backend.
- Autenticação.
- Banco de dados.
- CRUD completo de atendimentos.
- Persistência compartilhada, sincronizada ou definitiva.
- Filtros avançados.
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
    atendimentos.ts
  pages/
    HomePage.vue
    AtendimentosPage.vue
    NovoAtendimentoPage.vue
  components/
    atendimentos/
      AtendimentoEmptyState.vue
      AtendimentoFilters.vue
      AtendimentoForm.vue
      AtendimentoList.vue
      AtendimentoListItem.vue
    layout/
      MainLayout.vue
      AppHeader.vue
      AppSidebar.vue
  data/
    atendimentos.mock.ts
  services/
    atendimentosStorage.ts
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
- Pinia foi configurado como infraestrutura de estado e usado para centralizar atendimentos locais.
- Persistência local limitada ao navegador foi aprovada em `.ai/decisions/0001-local-persistence-decision.md`.
- Backend, autenticação, banco de dados e permissões permanecem fora do MVP inicial.
- A interface deve permanecer simples, com CSS próprio e sem biblioteca visual externa nesta etapa.
- A interface deve informar que os dados persistidos ficam apenas neste navegador.

## Próximos passos

- Monitorar o crescimento do CSS global e separar estilos quando houver estilos específicos de domínio.

## Pendências conhecidas

- A persistência local implementada fica limitada ao navegador do usuário.
- Os reviews das tarefas 0002, 0003 e 0004 apontaram que `src/style.css` ainda está simples, mas deve ser monitorado para evitar acúmulo de estilos globais, layout e domínio nas próximas etapas.
