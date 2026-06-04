# Solicitação de Decisão 0000 — Modelo

## 1. Status

Pendente de decisão humana.

## 2. Contexto

Durante o planejamento da próxima task, foi identificada a necessidade de decidir algo referente a escopo, arquitetura, persistência, stack, custo, segurança, UX relevante ou roadmap.

## 3. Decisão necessária

Definir se a próxima etapa deve usar:

1. opção A.
2. opção B.
...
N. opção N (máximo 6).

## 4. Opções

### Opção A — Título A

Descrição:
Descrição da opção.

Vantagens:
- Mais simples.
- Menor risco.
- Boa para validar layout e fluxo visual.

Desvantagens:
- Dados desaparecem ao recarregar.
- Não valida persistência.

Impacto:
Baixo.

### Opção B — Título B

Descrição:
Descrição da opção.

Vantagens:
- Mantém dados após recarregar.
- Simula persistência sem backend.
- Útil para MVP frontend.

Desvantagens:
- Não é multiusuário.
- Não substitui banco real.
- Pode exigir serviço dedicado.

Impacto:
Médio.

### Opção N — Título N

Descrição:
Descrição da Opção.

Vantagens:
- Mais próximo de sistema real.

Desvantagens:
- Aumenta muito o escopo.
- Contraria o MVP inicial.
- Exige novas decisões técnicas.

Impacto:
Alto.

## 5. Recomendação do agente

Exemplo: Recomenda-se a Opção A para a próxima task e a Opção B para etapa posterior, mantendo o backend fora do escopo inicial.

## 6. Riscos se decidir sem validação humana

- Aumentar escopo sem autorização.
- Criar complexidade prematura.
- Desviar do roadmap aprovado.

## 7. Decisão humana

Aguardando decisão.

## 8. Próximo passo após decisão

Registrar a decisão aprovada em `.ai/decisions/` e atualizar roadmap/task se necessário.