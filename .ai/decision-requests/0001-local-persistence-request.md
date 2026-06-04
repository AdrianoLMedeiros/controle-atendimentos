# Solicitação de Decisão 0001 — Persistência local de atendimentos

## 1. Status

Pendente de decisão humana.

## 2. Contexto

O MVP visual do Controle de Atendimentos SPA já possui:

- layout e navegação principais;
- listagem visual simples de atendimentos;
- formulário inicial de novo atendimento;
- validação visual para campos essenciais;
- mensagem explícita de que nenhum dado foi salvo;
- ausência de backend, autenticação, banco de dados, permissões e persistência local.

O handoff `0006-po-to-architect-evaluate-local-persistence.md` indica que a próxima etapa deve avaliar estado e persistência local, sem implementar automaticamente.

Persistência local altera o comportamento do produto porque deixa de ser apenas uma validação visual e passa a criar expectativa de dados salvos no navegador.

## 3. Decisão necessária

Definir se a próxima evolução do MVP deve:

1. aprovar persistência local com `localStorage` e store de atendimentos;
2. adiar persistência local e avançar para filtros simples ou outro refinamento visual;
3. rejeitar persistência local nesta fase e manter o MVP apenas demonstrativo.

## 4. Opções

### Opção A — Aprovar persistência local limitada ao navegador

Descrição:
Permitir que o formulário crie atendimentos reais no navegador, usando uma store de atendimentos com Pinia e um serviço simples de `localStorage`.

Vantagens:

- Permite validar fluxo completo local: cadastrar e listar.
- Continua sem backend, autenticação ou banco de dados.
- Dá mais utilidade ao MVP para validação interna.
- Aproveita Pinia, que já faz parte da stack oficial.

Desvantagens:

- Dados ficam restritos ao navegador do usuário.
- Pode criar expectativa de sistema real com dados permanentes.
- Exige explicar limites da persistência local.
- Introduz mais responsabilidade de estado e storage.

Impacto:
Médio.

### Opção B — Adiar persistência local e avançar para filtros simples

Descrição:
Manter a aplicação sem dados salvos e priorizar melhorias simples de consulta sobre dados demonstrativos, como preparação visual ou filtro simples por status.

Vantagens:

- Mantém o MVP mais simples.
- Evita criar expectativa de dados salvos.
- Permite validar melhor a experiência de acompanhamento antes de salvar registros.
- Reduz risco de complexidade prematura.

Desvantagens:

- O cadastro continua sem efeito real na listagem.
- A validação do fluxo completo fica incompleta.
- Pode limitar testes internos de uso contínuo.

Impacto:
Baixo.

### Opção C — Rejeitar persistência local nesta fase

Descrição:
Manter o MVP como protótipo funcional visual sem persistência, aguardando decisão futura sobre backend ou outra estratégia de dados.

Vantagens:

- Evita solução temporária que pode ser descartada.
- Mantém comportamento do produto muito claro.
- Reduz manutenção de estado local.

Desvantagens:

- O produto segue sem cadastro real.
- O MVP fica menos útil para acompanhamento prático.
- Pode atrasar validação do fluxo de criação e listagem.

Impacto:
Baixo a médio.

## 5. Avaliação técnica e funcional

### Benefícios da persistência local

- Permite validar o fluxo completo de criação e acompanhamento no navegador.
- Torna o formulário mais útil para testes internos, pois os registros criados aparecem na listagem.
- Mantém o MVP sem backend, autenticação ou banco de dados.
- Aproveita Pinia dentro do limite previsto pela stack oficial.
- Ajuda a validar se os campos atuais de atendimento são suficientes antes de evoluir para backend.

### Riscos e limitações

- Os dados ficam salvos apenas no navegador e no perfil do usuário local.
- Não há compartilhamento entre usuários, dispositivos ou ambientes.
- Pode gerar expectativa de persistência definitiva, mesmo sendo uma solução temporária.
- Exige comunicação clara de que os dados são locais e podem ser perdidos.
- Introduz responsabilidade adicional de estado e armazenamento antes de uma decisão de backend.

### Comportamento esperado se aprovado

- O formulário de novo atendimento deve criar um registro local no navegador.
- A listagem deve exibir registros locais junto dos registros demonstrativos ou substituir os demonstrativos, conforme decisão de produto.
- O protocolo e a data de criação devem ser gerados pela aplicação.
- O usuário deve entender que os dados são locais ao navegador.
- Não deve haver edição, exclusão, detalhamento, filtros avançados, autenticação ou backend nesta evolução.

### Dados mínimos para persistência futura

- `id`: identificador técnico local.
- `protocolo`: identificador visível ao usuário.
- `solicitante`: pessoa ou área solicitante.
- `assunto`: resumo do atendimento.
- `status`: situação do atendimento.
- `dataCriacao`: data de criação do registro.

### Suficiência dos campos atuais

Os campos atuais são suficientes para uma primeira persistência local limitada:

- o formulário já coleta `solicitante`, `assunto` e `status`;
- `protocolo` e `dataCriacao` podem ser gerados automaticamente;
- `id` pode ser gerado localmente.

Antes de backend ou uso operacional real, esses campos ainda devem ser validados pelo Product Owner.

### Estado com Pinia e serviço de storage

Se a Opção A for aprovada, recomenda-se:

- criar uma store de atendimentos com Pinia para centralizar a lista e a criação local;
- criar um serviço simples para leitura e gravação em `localStorage`;
- manter a serialização isolada fora dos componentes visuais;
- não persistir dados sensíveis;
- manter a implementação limitada ao navegador.

## 6. Recomendação do agente

Recomenda-se a Opção A somente se o Product Owner quiser validar o fluxo completo local de cadastro e listagem antes de backend.

Caso a prioridade continue sendo apenas clareza visual e baixo risco de escopo, recomenda-se a Opção B.

Em caso de aprovação da Opção A, a implementação deve ser pequena e limitada:

- criar store de atendimentos com Pinia;
- criar serviço simples de `localStorage`;
- permitir que o formulário adicione registros locais;
- carregar registros locais na listagem;
- manter backend, login, banco de dados, permissões, edição, exclusão e filtros avançados fora do escopo.

Recomendação objetiva: aprovar a Opção A para a próxima etapa apenas se a validação interna precisar de criação real local. Caso contrário, adiar pela Opção B.

## 7. Riscos se decidir sem validação humana

- Aumentar o escopo funcional sem aprovação.
- Criar expectativa de persistência definitiva.
- Confundir dados locais com dados reais compartilhados.
- Antecipar arquitetura de estado sem necessidade validada.
- Desviar do roadmap aprovado pelo Product Owner.

## 8. Decisão humana

Aguardando decisão.

## 9. Próximo passo após decisão

Após decisão humana:

- registrar a decisão aprovada em `.ai/decisions/`;
- se a persistência for aprovada, planejar task específica de implementação local;
- se for adiada ou rejeitada, planejar a próxima task de filtros simples, refinamento ou documentação conforme prioridade aprovada.
