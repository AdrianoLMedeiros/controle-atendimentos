<script setup lang="ts">
import type { Atendimento } from '../../types/atendimento.types'
import AtendimentoEmptyState from './AtendimentoEmptyState.vue'
import AtendimentoListItem from './AtendimentoListItem.vue'

defineProps<{
  atendimentos: Atendimento[]
}>()
</script>

<template>
  <div class="attendance-list">
    <AtendimentoEmptyState v-if="atendimentos.length === 0" />

    <div v-else class="attendance-list-items">
      <AtendimentoListItem
        v-for="atendimento in atendimentos"
        :key="atendimento.id"
        :atendimento="atendimento"
      />
    </div>
  </div>
</template>
