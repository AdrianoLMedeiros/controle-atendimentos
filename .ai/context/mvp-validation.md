# Validacao interna do MVP

## Objetivo

Orientar a validacao interna do MVP do Controle de Atendimentos SPA, confirmando se os fluxos principais atendem ao uso administrativo basico sem solicitar ou implementar novas funcionalidades durante a avaliacao.

## Escopo da validacao

Validar apenas:

- navegacao principal entre inicio, atendimentos e novo atendimento;
- cadastro local de atendimento com solicitante, assunto e status;
- mensagens sobre dados salvos apenas neste navegador;
- listagem de atendimentos locais;
- persistencia local apos recarregar a aplicacao no mesmo navegador;
- filtro por status;
- busca textual por protocolo, solicitante ou assunto;
- estado vazio sem atendimentos cadastrados neste navegador;
- estado vazio sem resultados para filtros aplicados.

Fora da validacao funcional desta etapa:

- backend;
- autenticacao;
- banco de dados;
- sincronizacao entre usuarios, dispositivos ou navegadores;
- permissoes;
- edicao, exclusao ou detalhamento de atendimento;
- relatorios;
- exportacao;
- upload de arquivos;
- filtros avancados, periodo, ordenacao avancada ou paginacao.

## Dados da sessao de validacao

Registrar antes de iniciar:

- Data da validacao:
- Pessoa avaliadora:
- Perfil ou papel:
- Navegador usado:
- Sistema operacional:
- URL acessada:
- Observacoes iniciais:

## Checklist de validacao

### 1. Navegacao principal

Passos:

1. Acessar a pagina inicial.
2. Navegar para a listagem de atendimentos.
3. Navegar para novo atendimento.
4. Retornar para a listagem.
5. Retornar para a pagina inicial pela navegacao principal.

Resultado esperado:

- As tres paginas principais ficam acessiveis.
- A navegacao e simples e consistente.
- Nao existe solicitacao de login, permissao ou configuracao externa.

Resultado observado:

- 

### 2. Estado vazio sem registros locais

Preparação recomendada:

- usar um navegador ou perfil sem atendimentos cadastrados anteriormente; ou
- limpar os dados do site antes de iniciar a validação, quando a pessoa avaliadora souber fazer isso.

Passos:

1. Usar um navegador sem atendimentos locais cadastrados ou limpar os dados locais antes da validacao.
2. Acessar a pagina de atendimentos.

Resultado esperado:

- A listagem informa que nao ha atendimento local cadastrado neste navegador.
- A tela orienta a criar o primeiro registro local.
- A interface nao sugere backend, sincronizacao ou dados compartilhados.

Resultado observado:

- 

### 3. Cadastro local de atendimento

Passos:

1. Acessar novo atendimento.
2. Confirmar que a pagina informa salvamento local neste navegador.
3. Preencher solicitante.
4. Preencher assunto.
5. Selecionar status.
6. Acionar salvar localmente.

Resultado esperado:

- O formulario aceita apenas os campos essenciais.
- O atendimento e salvo localmente neste navegador.
- A mensagem de sucesso informa salvamento local.
- Nao existe upload, anexo, aprovacao, permissao ou integracao externa.

Resultado observado:

- 

### 4. Validacao de campos essenciais

Passos:

1. Acessar novo atendimento.
2. Tentar salvar sem solicitante.
3. Tentar salvar sem assunto.

Resultado esperado:

- O formulario nao confirma o cadastro quando solicitante ou assunto estiverem vazios.
- A mensagem orienta preencher solicitante e assunto para salvar localmente.

Resultado observado:

- 

### 5. Listagem de atendimentos locais

Passos:

1. Criar ao menos um atendimento local.
2. Acessar a pagina de atendimentos.
3. Verificar os dados exibidos na lista.

Resultado esperado:

- O atendimento criado aparece na listagem.
- A lista exibe informacoes suficientes para diferenciar registros: protocolo, solicitante, assunto, status e data.
- A pagina informa que os atendimentos exibidos ficam salvos apenas neste navegador.

Resultado observado:

- 

### 6. Persistencia local no mesmo navegador

Passos:

1. Criar ao menos um atendimento local.
2. Recarregar a aplicacao no mesmo navegador.
3. Acessar a listagem de atendimentos.

Resultado esperado:

- O atendimento permanece disponivel apos recarregar a aplicacao no mesmo navegador.
- A interface continua deixando claro que os dados sao locais deste navegador.
- Nao ha indicacao de sincronizacao com outros usuarios, dispositivos ou navegadores.

Resultado observado:

- 

### 7. Filtro por status

Passos:

1. Criar ou manter atendimentos locais com status diferentes, quando possivel.
2. Acessar a listagem.
3. Alterar o filtro de status para Novo, Em andamento e Concluido.
4. Retornar o filtro para Todos.

Resultado esperado:

- A lista exibe apenas registros compativeis com o status selecionado.
- A opcao Todos volta a exibir os registros locais disponiveis.
- O filtro opera apenas sobre dados locais ja carregados no navegador.

Resultado observado:

- 

### 8. Busca textual simples

Passos:

1. Acessar a listagem com atendimentos locais cadastrados.
2. Buscar por parte do protocolo.
3. Buscar por parte do solicitante.
4. Buscar por parte do assunto.
5. Limpar a busca.

Resultado esperado:

- A busca encontra registros por protocolo, solicitante ou assunto.
- A busca nao diferencia maiusculas e minusculas.
- Ao limpar a busca, a listagem volta ao estado coerente com os filtros ativos.

Resultado observado:

- 

### 9. Estado vazio para filtros sem resultado

Passos:

1. Manter ao menos um atendimento local cadastrado.
2. Aplicar um status ou termo de busca que nao corresponda a nenhum atendimento.

Resultado esperado:

- A tela informa que nenhum atendimento foi encontrado para os filtros aplicados.
- A mensagem orienta ajustar o status ou o termo de busca.
- A mensagem e diferente do estado vazio de ausencia total de registros locais.

Resultado observado:

- 

## Registro de feedback

Use um registro por item observado.

```txt
Data:
Pessoa avaliadora:
Perfil ou papel:
Navegador:
Fluxo avaliado:
Passos executados:
Resultado esperado:
Resultado observado:
Classificacao: Bloqueante | Ajuste pequeno | Sugestao futura | Duvida de produto
Severidade: Alta | Media | Baixa | Nao se aplica
Observacoes de clareza ou uso:
Decisao pendente:
Encaminhamento recomendado:
```

## Classificacao do feedback

### Problema bloqueante

Usar quando o MVP nao permite validar um fluxo principal, como acessar paginas principais, cadastrar atendimento local, listar registros, manter dados apos recarregar ou usar filtros simples.

Encaminhamento:

- registrar como impedimento para correcao prioritaria;
- nao transformar automaticamente em nova funcionalidade;
- abrir nova tarefa especifica apos triagem.

### Ajuste pequeno

Usar para textos confusos, estados vazios pouco claros, pequenos problemas visuais ou comportamento simples que dificulte a validacao sem alterar o escopo do MVP.

Encaminhamento:

- registrar no backlog ou em tarefa de refinamento;
- manter separado de sugestoes futuras.

### Sugestao futura

Usar para ideias fora do MVP atual, como edicao, exclusao, detalhamento, relatorios, exportacao, backend, autenticacao, permissoes, filtros avancados ou sincronizacao.

Encaminhamento:

- registrar como evolucao futura;
- nao implementar nesta etapa.

### Duvida de produto

Usar quando a avaliacao levantar decisao sobre escopo, regras de negocio, roadmap ou comportamento aprovado.

Encaminhamento:

- registrar a duvida com contexto e impacto;
- criar solicitacao em `.ai/decision-requests/` se a duvida bloquear uma proxima implementacao;
- aguardar decisao humana antes de alterar produto, arquitetura ou roadmap.

## Encerramento da validacao

Ao final, consolidar:

- total de fluxos avaliados;
- problemas bloqueantes encontrados;
- ajustes pequenos sugeridos;
- sugestoes futuras;
- duvidas de produto;
- recomendacao objetiva: aprovado para validacao seguinte, aprovado com ajustes pequenos ou bloqueado por problema critico.
