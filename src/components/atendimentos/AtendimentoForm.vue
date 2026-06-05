<script setup lang="ts">
import { ref } from 'vue'
import type { AtendimentoStatus, NovoAtendimentoInput } from '../../types/atendimento.types'

const emit = defineEmits<{
  salvar: [input: NovoAtendimentoInput]
}>()

const solicitante = ref('')
const assunto = ref('')
const status = ref<AtendimentoStatus>('novo')
const mensagem = ref('')
const mensagemTipo = ref<'erro' | 'sucesso'>('sucesso')

const statusOptions: Array<{ value: AtendimentoStatus; label: string }> = [
  { value: 'novo', label: 'Novo' },
  { value: 'em_andamento', label: 'Em andamento' },
  { value: 'concluido', label: 'Concluído' },
]

function confirmarEnvio() {
  if (!solicitante.value.trim() || !assunto.value.trim()) {
    mensagemTipo.value = 'erro'
    mensagem.value = 'Preencha solicitante e assunto para validar o atendimento.'
    return
  }

  emit('salvar', {
    solicitante: solicitante.value,
    assunto: assunto.value,
    status: status.value,
  })

  solicitante.value = ''
  assunto.value = ''
  status.value = 'novo'
  mensagemTipo.value = 'sucesso'
  mensagem.value = 'Atendimento salvo localmente neste navegador.'
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
      <button class="button-primary" type="submit">Salvar localmente</button>
    </div>

    <p v-if="mensagem" class="form-message" :class="`form-message-${mensagemTipo}`">
      {{ mensagem }}
    </p>
  </form>
</template>
