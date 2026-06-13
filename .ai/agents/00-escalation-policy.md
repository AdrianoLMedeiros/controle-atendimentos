# Política de Escalação para Decisão Humana

## 1. Objetivo

Esta política define quando e como um agente deve interromper o fluxo automatizado e solicitar orientação humana antes de prosseguir.

Ela existe para impedir que agentes tomem decisões relevantes sem validação, principalmente quando houver impacto em escopo, arquitetura, roadmap, regras de negócio, documentação decisória ou funcionamento aprovado.

## 2. Quando escalar

O agente deve escalar quando identificar necessidade de orientação relacionada a:

- alteração de escopo;
- alteração de arquitetura;
- alteração de stack;
- inclusão de biblioteca;
- mudança de persistência;
- criação ou alteração de entidade de dados;
- regra de negócio não definida;
- mudança relevante de UX;
- divergência entre documentos;
- conflito entre task e roadmap;
- necessidade de quebrar uma task em partes menores;
- risco técnico relevante;
- antecipação de funcionalidade futura;
- inconsistência entre solicitação de escalação e decisão aprovada;
- inconsistência entre README, CHANGELOG, task, review ou código;
- dúvida que possa gerar retrabalho relevante.

## 3. Quando não escalar

O agente não deve escalar por questões simples, como:

- nome de variável;
- ajuste pequeno de CSS;
- correção de import;
- correção de erro de digitação;
- pequena reorganização interna sem impacto externo;
- correção objetiva de bug dentro do escopo;
- ajustes necessários para compilar a task atual.

## 4. Como escalar

Ao escalar, o agente deve:

1. Interromper a execução da tarefa.
2. Criar um arquivo em `.ai/decision-requests/` usando o model disponível nessa pasta.
3. Usar o padrão de nome:

`NNNN-tema-request.md`

4. Registrar no arquivo:
   - contexto;
   - motivo da escalação;
   - decisão ou orientação necessária;
   - opções possíveis;
   - vantagens de cada opção;
   - desvantagens de cada opção;
   - impacto de cada opção;
   - risco de decidir sem validação humana;
   - recomendação do agente;
   - próximo passo após orientação humana.

5. Não implementar código relacionado ao ponto escalado.
6. Aguardar orientação humana explícita antes de continuar.
7. Após a decisão, registrar um novo arquivo sequencial em `.ai/decisions/` se a decisão for formal.

## 5. Resultado possível de uma escalação

Uma escalação pode resultar em:

- decisão aprovada registrada em `decisions/`;
- atualização do roadmap;
- atualização da arquitetura;
- alteração da task;
- divisão da task;
- cancelamento da task;
- autorização para prosseguir sem alteração;
- solicitação de nova análise por outro agente;
- correção documental.

## 6. Referência

O fluxo completo de escalação está descrito em `.ai/WORKFLOW.md`, seção 6.
