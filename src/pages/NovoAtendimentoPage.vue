<script setup lang="ts">
import AtendimentoForm from '../components/atendimentos/AtendimentoForm.vue'
import { useAtendimentosStore } from '../stores/atendimentos'
import type { NovoAtendimentoInput } from '../types/atendimento.types'

const atendimentosStore = useAtendimentosStore()

function salvarAtendimento(input: NovoAtendimentoInput) {
  atendimentosStore.criarAtendimento(input)
}
</script>

<template>
  <section class="page-section">
    <div class="page-title">
      <span>Novo atendimento</span>
      <h1>Cadastro de atendimento</h1>
      <p>Preencha os dados essenciais para validar o fluxo visual de cadastro.</p>
    </div>

    <div class="panel">
      <p class="local-data-note">Os atendimentos criados ficam salvos apenas neste navegador.</p>
      <AtendimentoForm @salvar="salvarAtendimento" />
    </div>
  </section>
</template>
