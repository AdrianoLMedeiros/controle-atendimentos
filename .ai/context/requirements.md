# Requisitos — Controle de Atendimentos SPA

## 1. Visão geral

O Controle de Atendimentos SPA tem como propósito funcional permitir que usuários administrativos registrem, consultem, filtrem e acompanhem atendimentos administrativos em uma aplicação web simples.

Na versão inicial, o produto deve estabelecer a base funcional da aplicação, com navegação principal, página inicial, listagem de atendimentos e tela para criação de novo atendimento. O MVP não deve depender de backend, autenticação, banco de dados ou controle de permissões.

## 2. Usuários previstos

- Usuário administrativo: pessoa responsável por registrar, consultar e acompanhar atendimentos administrativos.
- Usuário avaliador interno: pessoa que acessa a versão inicial para validar fluxo, organização das telas e aderência ao objetivo do produto.

Nesta fase, não haverá separação entre perfis, permissões ou níveis de acesso.

## 3. Escopo do MVP

A primeira versão funcional deve conter:

- Estrutura base da SPA.
- Layout principal da aplicação.
- Rotas principais.
- Página inicial.
- Página de listagem de atendimentos.
- Página de novo atendimento.
- Representação inicial dos dados essenciais de um atendimento.
- Preparação visual e funcional simples para consulta e acompanhamento de atendimentos.

## 4. Fora do escopo inicial

Não fazem parte da versão inicial:

- Backend.
- Autenticação.
- Banco de dados.
- Upload de arquivos.
- Relatórios avançados.
- Controle de permissões.
- Persistência local de dados.
- Integrações externas.
- Fluxos de aprovação.
- Histórico detalhado de alterações.
- Notificações.
- Exportação de dados.
- Edição de atendimento.
- Exclusão de atendimento.
- Cadastro de usuários.
- Perfis de acesso.

## 5. Requisitos funcionais

### RF001 — Acessar página inicial

Descrição:
O sistema deve possuir uma página inicial que funcione como ponto de entrada da aplicação e apresente acesso às principais áreas do MVP.

Critérios de aceite:

- A página inicial deve estar acessível por uma rota principal.
- A página inicial deve permitir ao usuário identificar que está no sistema Controle de Atendimentos.
- A página inicial deve oferecer acesso à listagem de atendimentos.
- A página inicial deve oferecer acesso à criação de novo atendimento.

### RF002 — Navegar entre páginas principais

Descrição:
O sistema deve permitir navegação entre a página inicial, a página de listagem de atendimentos e a página de novo atendimento.

Critérios de aceite:

- O usuário deve conseguir acessar a página inicial.
- O usuário deve conseguir acessar a listagem de atendimentos.
- O usuário deve conseguir acessar a página de novo atendimento.
- A navegação deve ser simples e consistente entre as páginas previstas no MVP.

### RF003 — Visualizar layout principal

Descrição:
O sistema deve possuir um layout principal comum para organizar a navegação e o conteúdo das páginas.

Critérios de aceite:

- As páginas principais devem compartilhar uma estrutura visual comum.
- O layout deve conter área de navegação ou acesso às rotas principais.
- O conteúdo de cada página deve ser apresentado de forma clara.
- O layout não deve incluir áreas ou funcionalidades fora do escopo inicial.

### RF004 — Listar atendimentos

Descrição:
O sistema deve possuir uma página para listagem de atendimentos administrativos.

Critérios de aceite:

- A página de listagem deve estar acessível por rota própria.
- A página deve apresentar uma área destinada à exibição dos atendimentos.
- A página deve prever a apresentação de informações básicas de cada atendimento.
- Quando não houver dados persistidos, a tela deve continuar compreensível para validação do MVP.

### RF005 — Registrar novo atendimento

Descrição:
O sistema deve possuir uma página para registro de novo atendimento administrativo.

Critérios de aceite:

- A página de novo atendimento deve estar acessível por rota própria.
- A tela deve apresentar um formulário ou estrutura equivalente para registrar um atendimento.
- O formulário deve conter apenas campos essenciais para a fase inicial.
- A tela não deve depender de backend, banco de dados ou autenticação para ser acessada.

### RF006 — Preparar filtragem simples de atendimentos

Descrição:
O sistema deve considerar a necessidade de filtrar atendimentos administrativos, mantendo a implementação inicial simples e compatível com a ausência de persistência local.

Critérios de aceite:

- A listagem deve prever espaço ou organização compatível com filtros simples.
- A filtragem avançada não deve ser implementada no MVP.
- Qualquer filtro inicial deve ser limitado e não deve exigir backend ou banco de dados.

### RF007 — Acompanhar atendimentos

Descrição:
O sistema deve permitir que a listagem sirva como base para acompanhamento dos atendimentos administrativos.

Critérios de aceite:

- A listagem deve apresentar informações suficientes para diferenciar atendimentos.
- A interface deve permitir reconhecer o estado ou situação de acompanhamento quando essa informação estiver disponível.
- O acompanhamento deve permanecer simples, sem histórico, workflow ou controle de permissões.

## 6. Requisitos não funcionais

### RNF001 — Simplicidade do MVP

Descrição:
O produto deve priorizar uma experiência simples, direta e adequada à primeira versão funcional.

Critérios de aceite:

- O MVP deve conter apenas as telas e fluxos previstos no escopo inicial.
- Funcionalidades futuras não devem bloquear a entrega da versão 0.1.
- A interface deve evitar complexidade desnecessária.

### RNF002 — Clareza de uso

Descrição:
As telas devem ser claras para um usuário administrativo entender onde está e quais ações principais pode realizar.

Critérios de aceite:

- Os nomes das páginas e ações devem ser objetivos.
- A navegação entre páginas principais deve ser evidente.
- A aplicação deve evitar termos técnicos voltados à implementação.

### RNF003 — Organização para evolução

Descrição:
A definição do produto deve permitir evolução posterior sem antecipar funcionalidades fora do MVP.

Critérios de aceite:

- O MVP deve separar claramente o que está dentro e fora do escopo.
- Requisitos futuros devem ser tratados como pontos de evolução, não como obrigatórios para a versão inicial.
- O produto não deve assumir backend, autenticação ou banco de dados na fase atual.

### RNF004 — Consistência visual básica

Descrição:
As páginas principais devem manter consistência visual suficiente para parecerem parte do mesmo sistema.

Critérios de aceite:

- Layout, navegação e organização de conteúdo devem seguir um padrão comum.
- A experiência não deve variar de forma injustificada entre páginas do MVP.
- A aplicação deve ser adequada para validação inicial por usuários internos.

### RNF005 — Restrições de dependências

Descrição:
O projeto não deve introduzir bibliotecas externas sem aprovação.

Critérios de aceite:

- Qualquer necessidade de biblioteca externa deve ser registrada e validada antes de adoção.
- O MVP deve preferir soluções simples e compatíveis com as diretrizes do briefing.

## 7. Regras de negócio

### RN001 — Atendimento como registro administrativo

Descrição:
Um atendimento representa um registro administrativo que pode ser listado, consultado e acompanhado dentro da aplicação.

### RN002 — Ausência de autenticação no MVP

Descrição:
A versão inicial não deve exigir login, cadastro de usuário ou qualquer mecanismo de autenticação.

### RN003 — Ausência de persistência no MVP

Descrição:
A versão inicial não deve depender de backend, banco de dados ou persistência local para funcionamento.

### RN004 — Escopo restrito da criação de atendimento

Descrição:
O registro de novo atendimento no MVP deve se limitar aos dados essenciais e à validação do fluxo inicial, sem anexos, integrações ou processos complexos.

### RN005 — Sem controle de permissões

Descrição:
Todos os usuários da versão inicial terão a mesma experiência de acesso, sem diferenciação por papel, perfil ou permissão.

### RN006 — Evolução incremental

Descrição:
Funcionalidades como persistência local, backend, autenticação, relatórios, permissões e upload de arquivos devem ser tratadas como evolução futura, não como requisito da versão 0.1.

## 8. Premissas

- A versão inicial será usada para validar estrutura, navegação e fluxo básico do produto.
- O usuário principal é uma pessoa administrativa que registra e acompanha atendimentos.
- Os dados essenciais de um atendimento ainda precisam ser detalhados.
- A listagem pode funcionar inicialmente com dados estáticos, vazios ou simulados, desde que não seja tratada como persistência definitiva.
- A filtragem citada no objetivo do briefing deve ser mantida simples nesta fase.
- A persistência local será avaliada apenas em etapa posterior.
- A versão 0.1 deve evitar funcionalidades que dependam de backend, autenticação, banco de dados ou permissões.

## 9. Dúvidas e pontos pendentes

- Quais campos são obrigatórios para um atendimento administrativo?
- Quais informações mínimas devem aparecer na listagem de atendimentos?
- Quais status ou situações um atendimento pode possuir?
- A página inicial deve exibir algum resumo ou apenas atalhos de navegação?
- O formulário de novo atendimento deve permitir submissão visual sem persistência ou apenas estruturar os campos?
- Haverá necessidade de dados demonstrativos para validação do MVP?
- Quais filtros simples devem ser priorizados quando a filtragem for implementada?

## 10. Critérios gerais de aceite do MVP

- A aplicação deve possuir página inicial, listagem de atendimentos e página de novo atendimento.
- O usuário deve conseguir navegar entre as páginas principais.
- O layout principal deve ser consistente entre as páginas.
- A listagem deve representar claramente a área de acompanhamento dos atendimentos.
- A página de novo atendimento deve representar claramente o fluxo de cadastro inicial.
- O MVP não deve exigir backend, autenticação, banco de dados ou permissões.
- O MVP não deve incluir upload de arquivos ou relatórios avançados.
- O escopo atual e o escopo futuro devem permanecer claramente separados.
- A experiência deve ser simples o suficiente para validação inicial do produto.
