<script setup lang="ts">
import { storeToRefs } from 'pinia'
import AtendimentoList from '../components/atendimentos/AtendimentoList.vue'
import { useAtendimentosStore } from '../stores/atendimentos'

const atendimentosStore = useAtendimentosStore()
const { atendimentos } = storeToRefs(atendimentosStore)
</script>

<template>
  <section class="page-section">
    <div class="page-actions">
      <div class="page-title">
        <span>Atendimentos</span>
        <h1>Listagem de atendimentos</h1>
        <p>Acompanhe registros administrativos por protocolo, solicitante, assunto e situação.</p>
      </div>

      <RouterLink class="button-primary" to="/atendimentos/novo">Novo atendimento</RouterLink>
    </div>

    <div class="panel">
      <p class="local-data-note">Os atendimentos exibidos ficam salvos apenas neste navegador.</p>
      <AtendimentoList :atendimentos="atendimentos" />
    </div>
  </section>
</template>
