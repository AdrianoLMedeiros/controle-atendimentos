Use o agente:

.ai/agents/05-documenter.md

Use os contextos:

.ai/context/project-brief.md
.ai/context/requirements.md
.ai/context/architecture.md
.ai/context/roadmap.md
.ai/decisions/0001-initial-stack.md

Use a tarefa:

.ai/tasks/0001-setup-project.md

Use o review:

.ai/reviews/0001-setup-project-review.md

Sua função é atualizar a documentação do projeto com base no estado atual da implementação.

Tarefas obrigatórias:

1. Criar ou atualizar o arquivo README.md na raiz do projeto.
2. Criar ou atualizar o arquivo CHANGELOG.md na raiz do projeto.
3. Registrar no README apenas funcionalidades realmente implementadas.
4. Registrar no CHANGELOG a entrega correspondente à tarefa 0001.
5. Não inventar funcionalidades futuras como se já estivessem prontas.
6. Não alterar código de produção.
7. Não implementar novas funcionalidades.
8. Não modificar arquivos fora do escopo documental, salvo se estritamente necessário.

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

## [0.1.0] - AAAA-MM-DD

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

Ao final, apresente um resumo com:

1. Arquivos documentais criados ou alterados.
2. Principais informações registradas.
3. Pendências documentais identificadas.
4. Próxima documentação recomendada.
