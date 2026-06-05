# Decisão 0001 — Persistência local de atendimentos

## Status

Aceita

## Contexto

O MVP visual do Controle de Atendimentos SPA já possui layout, navegação, listagem demonstrativa, formulário inicial de atendimento, validação visual de campos essenciais e mensagens explícitas de que nenhum dado é salvo.

A tarefa `0006-evaluate-local-persistence.md` avaliou a adoção de persistência local antes de qualquer implementação, pois essa evolução muda o comportamento do produto: o formulário deixa de ser apenas uma validação visual e passa a criar registros locais no navegador.

Backend, autenticação, banco de dados, permissões e persistência compartilhada continuam fora do escopo atual.

## Decisão

Foi aprovada a Opção A da solicitação `.ai/decision-requests/0001-local-persistence-request.md`: adotar persistência local limitada ao navegador em etapa posterior.

A implementação futura poderá permitir que o formulário crie atendimentos reais no navegador, usando:

- store de atendimentos com Pinia;
- serviço simples de `localStorage`;
- dados limitados ao navegador e ao perfil local do usuário.

## Justificativa

A persistência local permite validar o fluxo completo de cadastro e listagem sem introduzir backend, autenticação ou banco de dados.

Ela também aproveita Pinia, que já faz parte da stack oficial, e permite validar os campos atuais de atendimento antes de uma evolução mais ampla de dados.

## Escopo permitido

A próxima implementação de persistência local pode incluir:

- criação de store de atendimentos com Pinia;
- serviço simples para leitura e gravação em `localStorage`;
- criação local de registros a partir do formulário;
- geração local de `id`, `protocolo` e `dataCriacao`;
- exibição dos registros locais na listagem;
- comunicação clara de que os dados ficam apenas no navegador.

## Restrições

Mesmo com a persistência local aprovada, continuam fora do escopo:

- backend;
- autenticação;
- banco de dados;
- sincronização entre usuários, dispositivos ou navegadores;
- controle de permissões;
- CRUD completo;
- edição de atendimento;
- exclusão de atendimento;
- detalhamento de atendimento;
- filtros avançados;
- relatórios;
- exportação de dados;
- upload de arquivos;
- bibliotecas externas não aprovadas.

## Consequências

- A aplicação poderá evoluir de fluxo visual para cadastro local real no navegador.
- Os dados salvos serão temporários no sentido de produto, limitados ao ambiente local do usuário.
- A documentação e a interface devem evitar sugerir que os dados são compartilhados ou definitivos.
- A próxima tarefa de implementação deve manter a solução pequena, isolando storage fora dos componentes visuais.

## Itens fora desta decisão

Esta decisão não define:

- estratégia de backend;
- modelo definitivo de banco de dados;
- autenticação;
- permissões;
- regras de edição ou exclusão;
- relatórios;
- exportação;
- deploy;
- migração futura de dados locais para backend.
