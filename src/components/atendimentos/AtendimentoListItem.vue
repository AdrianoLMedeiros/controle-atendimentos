<script setup lang="ts">
import type { Atendimento, AtendimentoStatus } from '../../types/atendimento.types'

defineProps<{
  atendimento: Atendimento
}>()

const statusLabels: Record<AtendimentoStatus, string> = {
  novo: 'Novo',
  em_andamento: 'Em andamento',
  concluido: 'Concluído',
}

function formatarData(data: string): string {
  const [ano, mes, dia] = data.split('-')

  if (!ano || !mes || !dia) {
    return data
  }

  return `${dia}/${mes}/${ano}`
}
</script>

<template>
  <article class="attendance-item">
    <div class="attendance-main">
      <span class="attendance-protocol">{{ atendimento.protocolo }}</span>
      <strong>{{ atendimento.assunto }}</strong>
      <span>{{ atendimento.solicitante }}</span>
    </div>

    <div class="attendance-meta">
      <span class="status-badge" :class="`status-${atendimento.status}`">
        {{ statusLabels[atendimento.status] }}
      </span>
      <time :datetime="atendimento.dataCriacao">{{ formatarData(atendimento.dataCriacao) }}</time>
    </div>
  </article>
</template>
