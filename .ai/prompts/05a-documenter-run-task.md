Use o agente:

.ai/agents/05-documenter.md

Use os contextos:

.ai/context/project-brief.md
.ai/context/requirements.md
.ai/context/architecture.md
.ai/context/roadmap.md
.ai/decisions/

Use a tarefa:

.ai/tasks/0002-create-base-layout.md

Use o review:

.ai/reviews/0002-create-base-layout-review.md

## Objetivo

Sua função é atualizar a documentação do projeto com base no estado atual da implementação.

## Tarefas obrigatórias

1. Criar ou atualizar o arquivo README.md na raiz do projeto.
2. Criar ou atualizar o arquivo CHANGELOG.md na raiz do projeto.
3. Registrar no README apenas funcionalidades realmente implementadas.
4. Registrar no CHANGELOG a entrega correspondente à última tarefa executada.
5. Não inventar funcionalidades futuras como se já estivessem prontas.
6. Não alterar código de produção.
7. Não implementar novas funcionalidades.
8. Não modificar arquivos fora do escopo documental, salvo se estritamente necessário.
9. Caso haja avanço de versionamento segundo o roadmap, registrar uma nova tag/release no Git do repositório.

O README.md deve conter, no mínimo:

* Nome do projeto
* Descrição breve
* Objetivo
* Stack utilizada
* Funcionalidades implementadas até agora
* Funcionalidades fora do escopo atual
* Estrutura básica de pastas
* Como instalar dependências
* Como executar o projeto
* Scripts disponíveis
* Decisões técnicas iniciais
* Próximos passos

O CHANGELOG.md deve seguir este formato:

# Changelog

## [N.N.N] - AAAA-MM-DD

onde:

* N: numeração incremental (exemplo: 0.0.1);
* AAAA: ano no qual o evento ocorreu;
* MM: mês no qual o evento ocorreu;
* DD: dia no qual o evento ocorreu.

### Adicionado

* Item adicionado.

### Alterado

* Item alterado, se houver.

### Corrigido

* Item corrigido, se houver.

### Observações

* Observações relevantes, se houver.

Regras de documentação:

* Use linguagem clara, objetiva e profissional.
* Não use emojis.
* Não use tom promocional.
* Não exagere na documentação.
* Documente o estado real do projeto.
* Se algum arquivo de contexto estiver vazio, ausente ou incompleto, registre isso como limitação em vez de inventar conteúdo.
* Se houver pendências no review, mencione-as como pendências, não como concluídas.
* Preserve coerência com a stack oficial: Vue 3, TypeScript e Vite.
* Caso Vue Router ou Pinia já tenham sido instalados/implementados nesta tarefa, registre isso. Caso não tenham sido, não registre como implementados.

## Política de escalação para decisão humana

Durante a execução, se identificar necessidade de decisão que afete escopo, arquitetura, stack, persistência, segurança, dados, roadmap, regras de negócio ou comportamento funcional aprovado, não prossiga automaticamente.

Nesse caso, quando houver inconsistência documental que exija decisão humana:

1. Interrompa a execução da tarefa.
2. Crie um arquivo em `.ai/decision-requests/` conforme model disponível na referida pasta.
3. Use o padrão de nome:

`NNNN-tema-da-decisao-request.md`

1. Descreva:
   * contexto;
   * decisão necessária;
   * opções possíveis;
   * vantagens;
   * desvantagens;
   * impacto;
   * recomendação do agente;
   * riscos de decidir automaticamente;
   * próximo passo após decisão.

2. Não implemente código relacionado à decisão pendente.
3. Aguarde decisão humana.
4. Após a decisão registre um novo arquivo sequencial em `.ai/decisions/`

## Saída esperada

Ao final, apresente um resumo com:

1. Arquivos documentais criados ou alterados.
2. Principais informações registradas.
3. Pendências documentais identificadas.
4. Próxima documentação recomendada.
