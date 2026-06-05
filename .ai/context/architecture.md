# Arquitetura Frontend — Controle de Atendimentos SPA

## 1. Visão geral da arquitetura

O Controle de Atendimentos SPA será uma aplicação frontend simples, organizada por páginas, componentes pequenos e rotas principais. A arquitetura inicial deve atender ao MVP sem antecipar funcionalidades fora do escopo aprovado.

A aplicação será estruturada como uma SPA em Vue 3, com Vue Router para navegação entre as telas principais e Pinia disponível para estado global simples quando houver necessidade real. Nesta fase, o foco é validar estrutura, navegação, layout e fluxo básico de atendimentos administrativos.

O MVP inicial não deve depender de backend, autenticação, banco de dados, permissões ou persistência local. A listagem poderá usar estado vazio compreensível ou dados mockados apenas para validação visual.

## 2. Stack oficial

A stack oficial aprovada em `.ai/decisions/0000-initial-stack.md` é:

- Vue 3;
- TypeScript;
- Vite;
- Vue Router;
- Pinia;
- CSS simples organizado.

Vue Router entra desde o início porque o MVP exige navegação entre página inicial, listagem de atendimentos e novo atendimento.

Pinia faz parte da stack oficial, mas seu uso inicial deve ser limitado. No MVP, ele pode manter apenas estado geral da aplicação, como nome do sistema. Uma store específica de atendimentos deve ficar para etapa posterior, quando houver necessidade real de estado compartilhado ou persistência local aprovada.

## 3. Estrutura de pastas

Estrutura inicial recomendada:

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
```

Estrutura recomendada para a evolução do MVP:

```txt
src/
  components/
    atendimentos/
      AtendimentoList.vue
      AtendimentoListItem.vue
      AtendimentoFilters.vue
      AtendimentoForm.vue
      AtendimentoEmptyState.vue
  data/
    atendimentos.mock.ts
  types/
    atendimento.types.ts
```

Essa estrutura separa entrada da aplicação, rotas, páginas, componentes de layout, componentes de domínio, tipos e dados demonstrativos.

## 4. Páginas previstas

### HomePage.vue

Responsabilidade:

- servir como ponto de entrada da aplicação;
- identificar o sistema Controle de Atendimentos;
- oferecer acesso à listagem de atendimentos;
- oferecer acesso à criação de novo atendimento.

### AtendimentosPage.vue

Responsabilidade:

- apresentar a área de listagem de atendimentos;
- permitir acompanhamento simples dos registros;
- prever espaço para filtros simples;
- exibir estado vazio ou dados demonstrativos;
- permitir acesso à página de novo atendimento.

### NovoAtendimentoPage.vue

Responsabilidade:

- apresentar o formulário inicial de cadastro de atendimento;
- conter apenas campos essenciais;
- permitir validação visual do fluxo de cadastro;
- não depender de backend, banco de dados ou persistência local.

## 5. Componentes previstos

### Componentes de layout

- `MainLayout.vue`: define a estrutura visual comum da aplicação.
- `AppHeader.vue`: apresenta o cabeçalho do sistema.
- `AppSidebar.vue`: apresenta a navegação principal.

### Componentes de atendimento

- `AtendimentoList.vue`: organiza a renderização da lista de atendimentos.
- `AtendimentoListItem.vue`: apresenta as informações básicas de um atendimento.
- `AtendimentoFilters.vue`: apresenta filtros simples, sem filtragem avançada no MVP.
- `AtendimentoForm.vue`: apresenta os campos essenciais do novo atendimento.
- `AtendimentoEmptyState.vue`: apresenta uma mensagem clara quando não houver atendimentos.

Os componentes devem permanecer pequenos e com responsabilidade única. Regras de negócio não devem ficar misturadas em componentes de layout.

## 6. Rotas previstas

Rotas iniciais do SPA:

```txt
/                  -> HomePage.vue
/atendimentos      -> AtendimentosPage.vue
/atendimentos/novo -> NovoAtendimentoPage.vue
```

Arquivo previsto:

```txt
src/router/index.ts
```

As rotas devem ser públicas e simples. Não devem ser criados guards, rotas protegidas, login ou controle de permissões no MVP.

## 7. Estado da aplicação

No MVP inicial, o estado deve ser mínimo.

Estratégia:

- manter estado local nos componentes quando for suficiente;
- usar `src/stores/app.ts` apenas para estado geral simples, como nome do sistema;
- não criar store de atendimentos nesta fase;
- usar dados mockados apenas se necessário para validação visual da listagem.

Pinia está na stack oficial, mas uma store de atendimentos deve entrar apenas em tarefa posterior, quando houver necessidade de estado compartilhado ou persistência local aprovada.

## 8. Persistência

Não haverá persistência no MVP inicial.

Não devem ser usados:

- backend;
- banco de dados;
- localStorage;
- serviços de storage;
- store persistente de atendimentos.

A persistência local fica para etapa posterior do roadmap. Quando aprovada, a evolução recomendada será criar uma store de atendimentos e um serviço simples para localStorage.

## 9. Tipos TypeScript previstos

Arquivo previsto:

```txt
src/types/atendimento.types.ts
```

Tipos previstos:

- `AtendimentoStatus`: representa a situação simples do atendimento.
- `Atendimento`: representa os dados essenciais de um atendimento administrativo.

Campos previstos para `Atendimento`:

- `id`: identificador técnico;
- `protocolo`: identificador visível para o usuário;
- `solicitante`: pessoa ou área relacionada ao atendimento;
- `assunto`: resumo do atendimento;
- `status`: situação de acompanhamento;
- `dataCriacao`: data de abertura do atendimento.

Status iniciais previstos:

- `novo`;
- `em_andamento`;
- `concluido`.

## 10. Convenções de nomenclatura

Arquivos:

- páginas devem terminar com `Page.vue`;
- componentes de atendimento devem iniciar com `Atendimento`;
- tipos devem usar sufixo `.types.ts`;
- dados mockados devem usar sufixo `.mock.ts`;
- stores devem ter nomes descritivos.

Componentes:

- usar PascalCase;
- nomear pelo papel que exercem;
- evitar nomes genéricos como `Card.vue` ou `Form.vue` fora de contexto.

Tipos:

- interfaces devem usar nomes no singular;
- tipos relacionados ao domínio devem usar o termo `Atendimento`;
- enums ou unions de status devem deixar o domínio explícito.

Funções:

- usar nomes descritivos;
- preferir verbos claros;
- evitar abreviações sem necessidade.

Rotas:

- usar caminhos simples;
- manter nomes coerentes com as páginas;
- evitar rotas aninhadas enquanto o MVP não exigir.

## 11. Riscos técnicos

- Criar store de atendimentos cedo demais pode aumentar complexidade sem ganho para o MVP.
- Implementar persistência antes da aprovação pode contrariar o escopo definido.
- Dados mockados podem ser confundidos com dados reais se não forem apresentados como demonstração.
- Formulário com submissão real pode sugerir salvamento que ainda não existe.
- Filtros avançados podem antecipar uma funcionalidade fora do MVP.
- Componentes de página podem crescer demais se listagem, filtros e formulário não forem separados.

## 12. Decisões arquiteturais

- Usar Vue 3 como base da SPA, por aderência à stack aprovada e simplicidade para componentes.
- Usar TypeScript para deixar contratos internos mais claros.
- Usar Vite como ferramenta de desenvolvimento e build, conforme decisão inicial da stack.
- Usar Vue Router desde o início, porque o MVP exige navegação entre três páginas principais.
- Manter Pinia disponível, mas com uso restrito no início, evitando store de atendimentos antes da necessidade real.
- Não implementar persistência no MVP inicial, respeitando os requisitos aprovados.
- Separar páginas de componentes para manter responsabilidades claras.
- Criar componentes específicos de atendimento quando a listagem e o formulário forem implementados.
- Manter CSS simples organizado, sem biblioteca externa de UI.
- Tratar backend, login, banco de dados e permissões apenas como evolução futura, fora da arquitetura inicial do MVP.
