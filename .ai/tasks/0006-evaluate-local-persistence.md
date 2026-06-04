# Tarefa 0006 — Avaliar persistência local

## Objetivo

Avaliar tecnicamente e funcionalmente se a persistência local deve ser adotada na próxima evolução do MVP, registrando recomendação clara antes de qualquer implementação.

## Contexto

A tarefa 0005 refinou o MVP visual antes de persistência. O produto agora possui os fluxos visuais principais mais claros: listagem de atendimentos demonstrativos, formulário inicial com validação visual, mensagem explícita de que nenhum dado foi salvo e data de criação em formato amigável.

Esta tarefa corresponde à versão 0.5.0 do roadmap: avaliação de estado e persistência local. O handoff `0006-po-to-architect-evaluate-local-persistence.md` orienta que esta etapa seja uma avaliação e recomendação, não uma implementação.

Persistência local muda o comportamento do produto, cria expectativa de dados salvos no navegador e afeta decisões futuras sobre store, dados e evolução para backend. Por isso, a implementação só deve ocorrer após decisão humana explícita.

## Escopo

Executar apenas atividades documentais e de avaliação:

- avaliar benefícios da persistência local para o MVP;
- avaliar riscos e limitações de persistência local no navegador;
- definir o comportamento esperado caso a persistência seja aprovada;
- indicar quais dados mínimos poderiam ser persistidos;
- avaliar se os campos atuais do atendimento são suficientes para cadastro local;
- avaliar se o formulário deve criar registros reais na listagem em etapa posterior;
- avaliar se Pinia deve centralizar o estado de atendimentos em etapa posterior;
- registrar recomendação objetiva: aprovar, adiar ou rejeitar persistência local nesta fase;
- criar ou atualizar solicitação de decisão humana em `.ai/decision-requests/`;
- manter a proposta limitada ao navegador, sem backend.

Dados mínimos a avaliar para persistência futura:

- id;
- protocolo;
- solicitante;
- assunto;
- status;
- data de criação.

## Fora do escopo

Não implementar:

- backend;
- autenticação;
- banco de dados;
- persistência em localStorage;
- store de atendimentos no Pinia;
- criação real de registros na listagem;
- cadastro real persistido;
- CRUD completo;
- edição de atendimento;
- exclusão de atendimento;
- detalhamento de atendimento;
- filtros;
- relatórios;
- exportação de dados;
- upload de arquivos;
- controle de permissões;
- biblioteca externa;
- alteração de stack.

## Arquivos esperados ou impactados

Arquivos ou pastas provavelmente impactados:

- `.ai/decision-requests/0001-local-persistence-request.md`;
- `.ai/context/roadmap.md`, apenas se for necessário registrar ajuste documental de sequência;
- `.ai/context/architecture.md`, apenas se for necessário registrar limites arquiteturais da persistência futura;
- `.ai/tasks/`, apenas para esta task ou task posterior condicionada à decisão.

Não é esperado alterar:

- `src/`;
- `README.md`;
- `CHANGELOG.md`;
- `package.json`;
- arquivos de código de produção.

## Critérios de aceite

- A avaliação registra recomendação clara sobre persistência local.
- A recomendação indica se a persistência deve ser aprovada, adiada ou rejeitada nesta fase.
- Benefícios, riscos e limitações são descritos de forma objetiva.
- O comportamento esperado em caso de aprovação está delimitado.
- A necessidade de store de atendimentos com Pinia é avaliada, mas não implementada.
- A necessidade de serviço de localStorage é avaliada, mas não implementada.
- Uma solicitação de decisão humana é criada ou atualizada em `.ai/decision-requests/`.
- Nenhuma alteração é feita em arquivos de código.
- Nenhuma persistência local é implementada.
- Backend, autenticação, banco de dados e permissões permanecem fora do escopo.

## Resultado esperado

Ao final da tarefa, o Product Owner deve ter uma recomendação técnica clara para decidir se a persistência local será aprovada, adiada ou rejeitada.

Se a persistência local for aprovada, uma próxima task específica poderá ser planejada para implementação limitada ao navegador. Se for adiada ou rejeitada, o roadmap deverá seguir para filtros simples ou outro refinamento aprovado.
