<script setup lang="ts">
import AtendimentoList from '../components/atendimentos/AtendimentoList.vue'
import { atendimentosMock } from '../data/atendimentos.mock'
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
      <AtendimentoList :atendimentos="atendimentosMock" />
    </div>
  </section>
</template>
