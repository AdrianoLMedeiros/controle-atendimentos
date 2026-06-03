<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <div class="app-shell">
    <AppHeader />

    <div class="app-body">
      <AppSidebar />

      <main class="app-content" aria-label="Conteúdo principal">
        <div class="content-container">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
