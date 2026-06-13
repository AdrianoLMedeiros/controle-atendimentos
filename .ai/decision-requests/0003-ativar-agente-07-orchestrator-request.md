# Solicitação de Decisão 0003 — Ativar Agente 07 Orchestrator

## 1. Status

Pendente de decisão humana.

## 2. Contexto

O `.ai/context/process-backlog.md` previa a criação de um "Agente 07 — Orchestrator" após o fluxo básico de desenvolvimento assistido por IA rodar com sucesso por pelo menos duas ou três tasks completas.

O projeto completou 11 tasks com o ciclo PO -> Architect -> Developer -> Reviewer -> Documenter funcionando de forma estável e rastreável. O critério de ativação do Agente 07 foi atingido com folga.

O papel previsto para o Agente 07 é verificar o estado atual do fluxo e indicar a próxima etapa correta do processo, eliminando a necessidade de o usuário determinar manualmente qual prompt ou agente acionar a cada ciclo.

Esta solicitação foi aberta durante a task 0012 (melhorias estruturais no protocolo `.ai/`), que concluiu que o critério de ativação estava cumprido e que a decisão sobre criar ou adiar o Agente 07 deve ser tomada pelo usuário.

## 3. Decisão necessária

Definir se o Agente 07 Orchestrator deve ser:

1. criado agora, com papel, responsabilidades e limites formalizados nos mesmos moldes dos agentes 01 a 05; ou
2. adiado para uma fase posterior, mantendo a decisão manual de próxima etapa como está hoje.

## 4. Opções

### Opção A — Criar o Agente 07 Orchestrator agora

Descrição:
Criar o arquivo `.ai/agents/07-orchestrator.md` e o prompt correspondente em `.ai/prompts/`, definindo o Orchestrator como agente responsável por avaliar o estado atual do processo, identificar o próximo agente e prompt a acionar, e orientar o usuário com um único passo de ação por ciclo.

Vantagens:
- Elimina a necessidade de o usuário lembrar qual prompt acionar a cada etapa do ciclo.
- Reduz fricção operacional no uso diário do workflow.
- Formaliza uma etapa que já existe implicitamente: o usuário analisa o estado e decide o próximo passo.
- Contribui para que o processo se torne mais auditável e orientado.
- O fluxo está maduro o suficiente (11 tasks concluídas) para absorver o Orchestrator sem risco de instabilidade.

Desvantagens:
- Introduz um agente adicional com papel transversal, não especializado.
- Exige definir limites precisos para que o Orchestrator não se sobreponha às responsabilidades dos agentes existentes.
- Pode aumentar o número de chamadas de IA por ciclo se mal calibrado.
- O papel do Orchestrator ainda não foi testado em prática neste projeto.

Impacto:
Médio. Altera o ponto de entrada do fluxo, mas não afeta escopo, arquitetura, código ou decisões técnicas aprovadas.

### Opção B — Adiar a criação do Agente 07

Descrição:
Manter o fluxo atual, onde o usuário decide manualmente qual agente e prompt acionar a cada etapa do ciclo. A criação do Agente 07 permanece registrada como pendência futura no backlog do processo.

Vantagens:
- Mantém o processo mais simples e com menos agentes ativos.
- Evita introduzir um novo papel antes de ser necessário.
- Permite acumular mais ciclos de experiência antes de definir as responsabilidades do Orchestrator com mais precisão.
- Reduz risco de que o Orchestrator tome decisões além do papel previsto.

Desvantagens:
- O usuário continua precisando decidir o próximo passo a cada ciclo.
- A fricção operacional permanece, especialmente em ciclos longos ou após pausas.
- O critério de ativação já foi atingido; adiar representa postergação de uma melhoria já prevista.

Impacto:
Baixo. O fluxo atual continua funcionando sem alterações.

## 5. Recomendação do agente

Recomenda-se a Opção A.

O fluxo está estável e maduro. O critério de ativação foi atingido com folga. A função central do Orchestrator — orientar o próximo passo — é simples o suficiente para ser implementada sem risco de sobreposição, desde que seus limites sejam definidos com precisão no arquivo de agente.

Caso a Opção A seja aprovada, a implementação deve ocorrer em task documental própria, criando exclusivamente o arquivo de agente e o prompt correspondente, sem alterar os agentes existentes.

## 6. Riscos se decidir sem validação humana

- Criar um agente com papel mal definido que interfira nas responsabilidades dos agentes existentes.
- Implementar o Orchestrator antes de o usuário estar pronto para delegar a decisão de próxima etapa.
- Criar expectativa de automação maior do que o papel do Orchestrator permite.

## 7. Decisão humana

Aguardando decisão.

## 8. Próximo passo após decisão

Se Opção A aprovada:
- Criar task documental para implementação do Agente 07 Orchestrator.
- Criar `.ai/agents/07-orchestrator.md` com papel, responsabilidades, limites e formato de resposta.
- Criar prompt correspondente em `.ai/prompts/`.
- Não alterar nenhum dos agentes existentes (00 a 05).
- Registrar decisão formal em `.ai/decisions/0002-ativar-agente-07-orchestrator.md`.

Se Opção B aprovada:
- Registrar adiamento em `.ai/context/process-backlog.md`.
- Manter o fluxo atual sem alterações.
- Registrar na decisão formal as condições para revisão futura deste adiamento.
