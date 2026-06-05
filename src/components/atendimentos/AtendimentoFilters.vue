<script setup lang="ts">
import type { AtendimentoStatusFiltro } from '../../types/atendimento.types'

defineProps<{
  status: AtendimentoStatusFiltro
  busca: string
}>()

defineEmits<{
  'update:status': [status: AtendimentoStatusFiltro]
  'update:busca': [busca: string]
}>()
</script>

<template>
  <div class="attendance-filters">
    <label class="form-field">
      <span>Status</span>
      <select
        :value="status"
        @change="
          $emit('update:status', ($event.target as HTMLSelectElement).value as AtendimentoStatusFiltro)
        "
      >
        <option value="todos">Todos</option>
        <option value="novo">Novo</option>
        <option value="em_andamento">Em andamento</option>
        <option value="concluido">Concluído</option>
      </select>
    </label>

    <label class="form-field">
      <span>Busca</span>
      <input
        :value="busca"
        type="search"
        placeholder="Protocolo, solicitante ou assunto"
        @input="$emit('update:busca', ($event.target as HTMLInputElement).value)"
      />
    </label>
  </div>
</template>
