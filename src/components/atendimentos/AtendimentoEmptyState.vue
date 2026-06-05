<script setup lang="ts">
defineProps<{
  title?: string
  message?: string
}>()
</script>

<template>
  <div class="attendance-empty">
    <strong>{{ title ?? 'Nenhum atendimento local cadastrado neste navegador.' }}</strong>
    <p>{{ message ?? 'Use a página de novo atendimento para criar o primeiro registro local.' }}</p>
  </div>
</template>
