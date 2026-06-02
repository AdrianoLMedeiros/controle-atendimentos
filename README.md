# Controle de Atendimentos SPA

## Descrição breve

SPA inicial para controle de atendimentos administrativos, criada como base técnica para evolução incremental do produto.

## Objetivo

Permitir, nas próximas etapas, registrar, listar, filtrar e acompanhar atendimentos administrativos em uma aplicação web simples. No estado atual, o projeto entrega a base técnica, a navegação principal e páginas iniciais sem persistência de dados.

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
- Layout base com cabeçalho, menu lateral e área de conteúdo.
- Página inicial com acesso para atendimentos e novo atendimento.
- Página base de listagem de atendimentos, ainda sem lista funcional.
- Página base de novo atendimento, ainda sem formulário funcional.
- `.gitignore` configurado com `node_modules/` e `dist/`.

## Funcionalidades fora do escopo atual

- Backend.
- Autenticação.
- Banco de dados.
- Persistência local.
- CRUD completo de atendimentos.
- Formulário funcional de cadastro.
- Listagem funcional com dados reais ou persistidos.
- Edição ou exclusão de atendimentos.
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
    layout/
      MainLayout.vue
      AppHeader.vue
      AppSidebar.vue
  assets/
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

- Consolidar layout e navegação da versão 0.2.0.
- Evoluir a página de atendimentos para uma listagem simples.
- Definir os campos essenciais de um atendimento.
- Criar o formulário inicial de novo atendimento em etapa posterior.
- Avaliar persistência local apenas após aprovação explícita.

## Pendências conhecidas

- O review da tarefa 0001 apontou assets sem uso claro em `src/assets/`, como possíveis sobras de template. Eles não foram removidos nesta atualização porque a tarefa atual restringe alterações ao escopo documental.
