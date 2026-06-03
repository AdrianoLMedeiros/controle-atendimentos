# Tarefa 0003 — Criar listagem simples de atendimentos

## Objetivo

Criar a base visual e estrutural da listagem de atendimentos administrativos, permitindo validar como um atendimento será apresentado para consulta e acompanhamento simples no MVP.

## Contexto

A tarefa 0002 criou e validou o layout base do SPA, com cabeçalho, navegação, área principal de conteúdo e rotas para página inicial, listagem de atendimentos e novo atendimento.

Esta tarefa corresponde à versão 0.3.0 do roadmap: listagem de atendimentos. A página `AtendimentosPage.vue` já existe, mas ainda não possui lista funcional. A próxima evolução deve transformar essa página em uma área clara de acompanhamento, sem antecipar cadastro funcional, persistência local, backend ou filtros avançados.

O handoff `0003-po-to-architect-create-attendance-list.md` orienta foco exclusivo na listagem simples, com estado vazio compreensível e dados demonstrativos apenas se forem necessários para validação visual.

## Escopo

Implementar apenas:

- tipo TypeScript inicial para representar um atendimento administrativo;
- componente para renderizar a lista de atendimentos;
- componente para renderizar um item de atendimento;
- componente para estado vazio da listagem;
- atualização da página de atendimentos para usar os componentes de listagem;
- apresentação de informações básicas de cada atendimento;
- dados demonstrativos simples, se forem necessários para validar a interface.

Informações mínimas previstas para um atendimento na listagem:

- protocolo;
- solicitante;
- assunto;
- status;
- data de criação.

Status iniciais previstos para representação visual:

- novo;
- em andamento;
- concluído.

Os campos e status ainda devem ser tratados como proposta inicial, pois a obrigatoriedade dos campos depende de validação futura pelo Product Owner.

## Fora do escopo

Não implementar:

- backend;
- autenticação;
- banco de dados;
- persistência em localStorage;
- store de atendimentos no Pinia;
- formulário funcional de cadastro;
- edição de atendimento;
- exclusão de atendimento;
- detalhamento de atendimento;
- filtros funcionais ou avançados;
- relatórios;
- exportação de dados;
- upload de arquivos;
- controle de permissões;
- biblioteca visual externa;
- alteração de stack.

## Arquivos esperados ou impactados

Arquivos ou pastas provavelmente impactados:

- `src/pages/AtendimentosPage.vue`;
- `src/components/atendimentos/AtendimentoList.vue`;
- `src/components/atendimentos/AtendimentoListItem.vue`;
- `src/components/atendimentos/AtendimentoEmptyState.vue`;
- `src/types/atendimento.types.ts`;
- `src/data/atendimentos.mock.ts`, se dados demonstrativos forem usados;
- `src/style.css`, apenas se forem necessários ajustes visuais simples.

Não é esperado alterar:

- `src/pages/NovoAtendimentoPage.vue`;
- `src/stores/app.ts`, salvo necessidade indireta não prevista;
- `src/router/index.ts`, salvo correção pontual de navegação existente.

## Critérios de aceite

- A página de atendimentos apresenta uma área clara de listagem.
- A listagem usa componentes próprios de atendimento.
- Cada atendimento exibido pode ser diferenciado por protocolo, solicitante, assunto, status e data de criação.
- Existe estado vazio compreensível quando não houver atendimentos.
- A página mantém acesso para criar novo atendimento.
- Dados demonstrativos, se usados, ficam isolados e não são tratados como persistência.
- Nenhuma store de atendimentos é criada nesta tarefa.
- Nenhuma persistência local é implementada.
- Nenhuma biblioteca externa é adicionada.
- Nenhuma funcionalidade fora do escopo é implementada.
- O layout comum e a navegação existente são preservados.
- O projeto continua validando com `npm run build`.

## Resultado esperado

Ao final da tarefa, a página de atendimentos deve representar claramente a área de acompanhamento do MVP, com uma listagem visual simples, estado vazio adequado e componentes pequenos preparados para evolução posterior.

A aplicação deve continuar sem backend, autenticação, banco de dados, permissões, persistência local ou CRUD completo.
