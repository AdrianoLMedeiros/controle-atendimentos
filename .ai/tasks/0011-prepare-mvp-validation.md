# Tarefa 0011 — Preparar validação interna do MVP

## Objetivo

Preparar um roteiro simples e verificável para validação interna do MVP atual, sem implementar nova funcionalidade de produto.

## Contexto

A tarefa 0010 estabilizou o MVP após a entrega dos filtros simples. O produto agora possui cadastro local de atendimentos no navegador, listagem de atendimentos locais, persistência local limitada ao navegador, filtro por status, busca textual simples, estados vazios claros e contrato compartilhado para o filtro de status.

O review `0010-stabilize-mvp-review.md` aprovou a entrega e não identificou impedimentos para avanço. O `CHANGELOG.md` já registra que o build da tarefa 0010 foi validado.

Esta tarefa corresponde à versão 0.7.0 do roadmap: validação interna do MVP. O foco não é alterar o produto, mas preparar uma validação objetiva para confirmar se os fluxos principais atendem ao uso administrativo básico.

## Escopo

Criar um roteiro documental de validação interna cobrindo apenas:

- navegação principal entre página inicial, listagem de atendimentos e novo atendimento;
- cadastro local de atendimento com campos essenciais;
- clareza das mensagens sobre dados salvos apenas neste navegador;
- listagem de atendimentos locais;
- persistência local após recarregar a aplicação no mesmo navegador;
- filtro simples por status;
- busca textual simples por protocolo, solicitante ou assunto;
- estado vazio quando não houver atendimentos cadastrados neste navegador;
- estado vazio quando filtros aplicados não retornarem resultados;
- registro objetivo de feedback interno;
- separação entre problemas bloqueantes, ajustes pequenos e sugestões futuras;
- registro de dúvidas de produto que exijam decisão humana.

O roteiro deve orientar a pessoa avaliadora a registrar, no mínimo:

- data da validação;
- perfil ou papel da pessoa avaliadora;
- navegador usado;
- passos executados;
- resultado observado;
- resultado esperado;
- severidade quando houver problema;
- observações de clareza ou uso;
- dúvidas ou decisões pendentes.

Artefato recomendado:

- criar `.ai/context/mvp-validation.md` com o roteiro de validação, checklist e modelo de registro de feedback.

Se surgirem dúvidas que afetem escopo, roadmap, regras de negócio ou comportamento funcional aprovado, criar solicitação em `.ai/decision-requests/` e não transformar a dúvida em implementação.

## Fora do escopo

Não implementar:

- nova funcionalidade de produto;
- backend;
- autenticação;
- banco de dados;
- sincronização entre usuários, dispositivos ou navegadores;
- controle de permissões;
- edição de atendimento;
- exclusão de atendimento;
- detalhamento de atendimento;
- relatórios;
- exportação de dados;
- upload de arquivos;
- filtros avançados;
- filtros por período;
- ordenação avançada;
- paginação;
- nova estratégia de persistência;
- biblioteca externa;
- alteração de stack;
- correções de interface ou código durante a preparação da validação.

Não alterar arquivos de produção nesta tarefa.

## Arquivos esperados ou impactados

Arquivos provavelmente impactados:

- `.ai/context/mvp-validation.md`;
- `.ai/context/process-backlog.md`, se houver pendência remanescente a registrar;
- `.ai/decision-requests/`, somente se surgir dúvida que exija decisão humana;
- `CHANGELOG.md`, somente se o fluxo documental exigir registrar a preparação da validação.

Arquivos que não devem ser alterados nesta tarefa:

- `src/`;
- `package.json`;
- `package-lock.json`;
- arquivos de configuração da stack;
- arquivos de rota, store, serviço, tipo ou componente.

## Critérios de aceite

- Existe um roteiro de validação interna em `.ai/context/mvp-validation.md`.
- O roteiro cobre navegação principal, cadastro local, listagem, persistência local, filtro por status e busca textual simples.
- O roteiro inclui verificação das mensagens sobre dados salvos apenas neste navegador.
- O roteiro inclui verificação dos dois estados vazios: ausência de registros locais e ausência de resultados filtrados.
- O roteiro possui checklist objetivo de passos e resultados esperados.
- O roteiro possui modelo para registrar feedback interno.
- O modelo separa problemas bloqueantes, ajustes pequenos e sugestões futuras.
- Dúvidas de produto ou escopo são orientadas para backlog ou solicitação de decisão, não para implementação automática.
- Nenhum arquivo de produção é alterado.
- Nenhuma nova funcionalidade é implementada.
- Nenhuma biblioteca externa é adicionada.
- Nenhum backend, login, banco de dados, sincronização, permissão, edição, exclusão, detalhamento, relatório ou exportação é implementado.

## Resultado esperado

Ao final da tarefa, o projeto deve ter um roteiro documental claro para conduzir a validação interna do MVP atual, permitindo registrar feedback de forma objetiva e separar problemas reais de sugestões futuras, sem expandir o escopo funcional da aplicação.
