# Roadmap — Controle de Atendimentos SPA

## Versão 0.1.0 — Setup inicial

Objetivo:

Estabelecer a base técnica inicial da SPA com a stack oficial aprovada, deixando o projeto pronto para receber layout, rotas e páginas do MVP.

Tarefas previstas:

- criar projeto com Vue 3, TypeScript e Vite;
- configurar Vue Router;
- configurar Pinia como infraestrutura inicial;
- criar estrutura base de `src/`;
- validar arquivos principais da aplicação;
- manter CSS simples organizado;
- não adicionar bibliotecas externas sem aprovação.

Critérios de aceite:

- projeto executa como SPA Vue 3;
- TypeScript está configurado;
- Vite está configurado;
- Vue Router está disponível;
- Pinia está disponível;
- build inicial pode ser executado sem erros;
- nenhuma funcionalidade fora do escopo foi adicionada.

## Versão 0.2.0 — Layout e navegação

Objetivo:

Criar a estrutura visual comum da aplicação e permitir navegação simples entre as páginas principais do MVP.

Tarefas previstas:

- criar ou revisar `MainLayout.vue`;
- criar ou revisar `AppHeader.vue`;
- criar ou revisar `AppSidebar.vue`;
- definir navegação principal;
- criar rotas iniciais;
- criar páginas base: inicial, atendimentos e novo atendimento;
- garantir consistência visual básica entre as páginas.

Critérios de aceite:

- usuário consegue acessar a página inicial;
- usuário consegue acessar a listagem de atendimentos;
- usuário consegue acessar a página de novo atendimento;
- páginas compartilham layout comum;
- navegação é simples e evidente;
- não há login, permissões ou rotas protegidas.

## Versão 0.3.0 — Listagem de atendimentos

Objetivo:

Criar a base visual e estrutural para consulta e acompanhamento simples de atendimentos administrativos.

Tarefas previstas:

- definir tipo TypeScript inicial de atendimento;
- criar componentes de listagem;
- criar item de atendimento;
- criar estado vazio compreensível;
- avaliar necessidade de dados mockados para validação visual;
- atualizar a página de atendimentos para usar os componentes previstos.

Critérios de aceite:

- listagem possui área clara na interface;
- cada atendimento pode ser diferenciado visualmente quando houver dados;
- estado vazio é compreensível;
- página oferece acesso para criar novo atendimento;
- dados mockados, se usados, não são tratados como persistência;
- não há edição, exclusão ou detalhamento avançado.

## Versão 0.4.0 — Cadastro de atendimento

Objetivo:

Criar a tela inicial de cadastro de atendimento administrativo, limitada aos campos essenciais e sem persistência.

Tarefas previstas:

- definir campos essenciais do formulário;
- criar componente `AtendimentoForm.vue`;
- atualizar `NovoAtendimentoPage.vue`;
- incluir validação visual simples, se necessário;
- apresentar retorno simples ao usuário sem salvar dados;
- manter acesso de retorno para a listagem.

Critérios de aceite:

- página de novo atendimento está acessível por rota própria;
- formulário apresenta apenas campos essenciais;
- usuário entende o objetivo da tela;
- submissão não depende de backend, banco de dados ou localStorage;
- não há upload de arquivos;
- não há fluxo de aprovação ou histórico.

## Versão 0.4.1 — Refinamentos antes de persistência

Objetivo:

Sanar pendências simples identificadas nos reviews antes de avaliar persistência local, mantendo o MVP claro para validação por usuários administrativos.

Tarefas previstas:

- adicionar validação visual simples para campos mínimos do formulário, se aprovada;
- ajustar a mensagem de confirmação visual para não sugerir salvamento real;
- formatar a data de criação da listagem em padrão mais amigável ao usuário;
- avaliar limpeza de assets sem uso claro em `src/assets/`;
- manter estilos simples e monitorar o crescimento de `src/style.css`.

Critérios de aceite:

- formulário não indica sucesso pleno quando campos essenciais estiverem vazios;
- mensagem de confirmação deixa claro que nenhum dado foi salvo;
- data de criação é exibida em formato legível para o usuário;
- pendências de baixa complexidade são resolvidas ou registradas no backlog;
- não há backend, login, banco de dados, localStorage, store de atendimentos ou CRUD completo.

## Versão 0.5.0 — Avaliação de estado e persistência local

Objetivo:

Avaliar a necessidade real de estado compartilhado e persistência local após validação do MVP visual, produzindo recomendação objetiva antes de qualquer implementação.

Tarefas previstas:

- revisar necessidade real de estado compartilhado;
- avaliar impacto de permitir criação real de atendimentos no navegador;
- definir benefícios, riscos e limites de persistência local;
- recomendar aprovação, adiamento ou rejeição da persistência local;
- registrar decisão de produto antes de implementação;
- preservar ausência de backend, autenticação e banco de dados.

Critérios de aceite:

- recomendação sobre persistência local está registrada;
- decisão de produto está clara antes de qualquer implementação;
- escopo aprovado, se houver, está limitado ao navegador;
- não há implementação de store de atendimentos, localStorage ou criação real de registros nesta etapa;
- aplicação continua sem backend, login, banco de dados ou permissões.

## Versão 0.5.1 — Implementação de persistência local aprovada

Objetivo:

Implementar estado compartilhado e persistência local limitada ao navegador, conforme decisão aprovada em `.ai/decisions/0001-local-persistence-decision.md`.

Tarefas previstas:

- criar store de atendimentos com Pinia;
- criar serviço simples para localStorage;
- definir contratos de leitura e gravação;
- permitir cadastro real local no navegador;
- comunicar ao usuário que os dados ficam apenas no navegador;
- manter persistência limitada ao navegador;
- preservar ausência de backend, autenticação e banco de dados.

Critérios de aceite:

- decisão de persistência local foi aprovada antes da implementação;
- atendimentos podem ser mantidos localmente no navegador;
- store de atendimentos possui responsabilidade clara;
- serviço de localStorage fica separado da camada visual;
- interface não sugere sincronização, compartilhamento ou persistência definitiva;
- aplicação continua sem backend, login, banco de dados ou permissões.

## Versão 0.6.0 — Filtros e melhorias de uso

Objetivo:

Adicionar filtros simples e melhorias de usabilidade para facilitar consulta e acompanhamento dos atendimentos, sem transformar a funcionalidade em relatório avançado.

Tarefas previstas:

- definir filtros simples prioritários;
- implementar filtro por status, se aprovado;
- implementar busca textual simples, se aprovado;
- revisar mensagens de estado vazio;
- revisar clareza dos textos de interface;
- melhorar organização visual da listagem.

Critérios de aceite:

- filtros são simples e compatíveis com dados disponíveis;
- não há relatórios avançados;
- não há exportação de dados;
- não há integração externa;
- melhorias mantêm a aplicação simples e adequada ao usuário administrativo;
- navegação e layout permanecem consistentes.

## Ordem recomendada de execução

1. Concluir setup inicial.
2. Consolidar layout e navegação.
3. Implementar listagem simples.
4. Implementar cadastro inicial.
5. Sanar refinamentos simples antes de persistência.
6. Avaliar estado e persistência local.
7. Implementar persistência local aprovada, limitada ao navegador.
8. Implementar filtros simples e melhorias de uso.

## Observações de escopo

Backend, autenticação, banco de dados, permissões, upload de arquivos, relatórios avançados, exportação, integrações externas, edição e exclusão de atendimento permanecem fora das versões iniciais descritas neste roadmap, salvo nova decisão aprovada pelo Product Owner.
