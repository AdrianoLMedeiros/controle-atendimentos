<script setup lang="ts">
import { useAppStore } from '../../stores/app'

const appStore = useAppStore()
</script>

<template>
  <header class="app-header">
    <div class="app-brand">
      <strong>{{ appStore.nomeSistema }}</strong>
      <span>Administrativo</span>
    </div>
  </header>
</template>
