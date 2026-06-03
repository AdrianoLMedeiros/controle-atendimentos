<script setup lang="ts">
import { ref } from 'vue'
import type { AtendimentoStatus } from '../../types/atendimento.types'

const solicitante = ref('')
const assunto = ref('')
const status = ref<AtendimentoStatus>('novo')
const mensagem = ref('')

const statusOptions: Array<{ value: AtendimentoStatus; label: string }> = [
  { value: 'novo', label: 'Novo' },
  { value: 'em_andamento', label: 'Em andamento' },
  { value: 'concluido', label: 'Concluído' },
]

function confirmarEnvio() {
  mensagem.value = 'Atendimento validado visualmente. Nenhum dado foi salvo nesta etapa.'
}
</script>

<template>
  <form class="attendance-form" @submit.prevent="confirmarEnvio">
    <label class="form-field">
      <span>Solicitante</span>
      <input v-model="solicitante" type="text" placeholder="Nome ou área solicitante" />
    </label>

    <label class="form-field">
      <span>Assunto</span>
      <textarea v-model="assunto" rows="4" placeholder="Resumo do atendimento"></textarea>
    </label>

    <label class="form-field">
      <span>Status</span>
      <select v-model="status">
        <option
          v-for="option in statusOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </label>

    <div class="form-actions">
      <RouterLink class="button-secondary" to="/atendimentos">Voltar para atendimentos</RouterLink>
      <button class="button-primary" type="submit">Confirmar visualmente</button>
    </div>

    <p v-if="mensagem" class="form-message">{{ mensagem }}</p>
  </form>
</template>
