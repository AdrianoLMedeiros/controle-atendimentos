# Tarefa 0004 — Criar formulário inicial de atendimento

## Objetivo

Criar a estrutura inicial do formulário de novo atendimento, permitindo validar o fluxo visual de cadastro administrativo no MVP sem salvar dados de forma persistente.

## Contexto

A tarefa 0003 criou e validou a listagem simples de atendimentos. O produto agora possui uma página de atendimentos com componentes próprios de lista, item e estado vazio, além de tipo inicial de atendimento e dados demonstrativos isolados.

Esta tarefa corresponde à versão 0.4.0 do roadmap: cadastro de atendimento. A página `NovoAtendimentoPage.vue` já existe, mas ainda não possui formulário funcional. A próxima evolução deve transformar essa página em uma tela clara de registro inicial, mantendo o escopo restrito e sem antecipar persistência local, store de atendimentos, backend ou CRUD completo.

O handoff `0004-po-to-architect-create-attendance-form.md` orienta foco exclusivo no formulário inicial, com campos mínimos editáveis, ação visual de envio ou confirmação e acesso de retorno para a listagem.

## Escopo

Implementar apenas:

- componente `AtendimentoForm.vue`;
- atualização da página `NovoAtendimentoPage.vue` para usar o formulário;
- campos editáveis mínimos:
  - solicitante;
  - assunto;
  - status;
- opções simples de status já previstas:
  - novo;
  - em andamento;
  - concluído;
- ação visual de envio ou confirmação sem persistir dados;
- mensagem simples após tentativa de envio, se necessário;
- acesso de retorno para a listagem de atendimentos;
- ajustes visuais simples necessários para manter consistência com o layout atual.

Protocolo e data de criação não devem exigir entrada manual nesta etapa.

## Fora do escopo

Não implementar:

- backend;
- autenticação;
- banco de dados;
- persistência em localStorage;
- store de atendimentos no Pinia;
- cadastro real persistido;
- criação de registros na listagem;
- edição de atendimento;
- exclusão de atendimento;
- detalhamento de atendimento;
- upload de arquivos;
- relatórios;
- exportação de dados;
- filtros;
- controle de permissões;
- biblioteca visual externa;
- alteração de stack.

## Arquivos esperados ou impactados

Arquivos ou pastas provavelmente impactados:

- `src/pages/NovoAtendimentoPage.vue`;
- `src/components/atendimentos/AtendimentoForm.vue`;
- `src/types/atendimento.types.ts`, apenas se for necessário reaproveitar ou ajustar tipos já existentes sem ampliar escopo;
- `src/style.css`, apenas se forem necessários ajustes visuais simples.

Não é esperado alterar:

- `src/pages/AtendimentosPage.vue`, salvo ajuste pontual de navegação não previsto;
- `src/data/atendimentos.mock.ts`;
- `src/stores/app.ts`;
- `src/router/index.ts`, salvo correção pontual de navegação existente.

## Critérios de aceite

- A página de novo atendimento apresenta um formulário claro.
- O formulário possui os campos editáveis mínimos: solicitante, assunto e status.
- Protocolo e data de criação não exigem preenchimento manual.
- O usuário entende que está na tela de registro de novo atendimento.
- Existe ação visual de envio ou confirmação.
- A tentativa de envio não salva dados em backend, banco, localStorage ou store.
- Existe acesso de retorno para a listagem de atendimentos.
- O layout comum e a navegação existente são preservados.
- Nenhuma store de atendimentos é criada nesta tarefa.
- Nenhuma persistência local é implementada.
- Nenhuma biblioteca externa é adicionada.
- Nenhuma funcionalidade fora do escopo é implementada.
- O projeto continua validando com `npm run build`.

## Resultado esperado

Ao final da tarefa, a página de novo atendimento deve representar claramente o fluxo inicial de cadastro do MVP, com formulário simples, campos essenciais e resposta visual sem persistência.

A aplicação deve continuar sem backend, autenticação, banco de dados, permissões, persistência local ou CRUD completo.
