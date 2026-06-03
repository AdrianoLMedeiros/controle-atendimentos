<script setup lang="ts">
import AtendimentoForm from '../components/atendimentos/AtendimentoForm.vue'
</script>

<template>
  <section class="page-section">
    <div class="page-title">
      <span>Novo atendimento</span>
      <h1>Cadastro de atendimento</h1>
      <p>Preencha os dados essenciais para validar o fluxo visual de cadastro.</p>
    </div>

    <div class="panel">
      <AtendimentoForm />
    </div>
  </section>
</template>
