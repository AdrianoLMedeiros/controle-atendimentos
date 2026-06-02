<script setup lang="ts">
import { useAppStore } from '../stores/app'

const appStore = useAppStore()
</script>

<template>
  <section class="page-section">
    <div class="page-title">
      <span>Início</span>
      <h1>{{ appStore.nomeSistema }}</h1>
      <p>Base inicial para registrar, listar e acompanhar atendimentos administrativos.</p>
    </div>

    <div class="panel">
      <p>Use a navegação principal para acessar as páginas do SPA.</p>
      <div class="action-row">
        <RouterLink class="button-primary" to="/atendimentos">Ver atendimentos</RouterLink>
        <RouterLink class="button-secondary" to="/atendimentos/novo">Novo atendimento</RouterLink>
      </div>
    </div>
  </section>
</template>
