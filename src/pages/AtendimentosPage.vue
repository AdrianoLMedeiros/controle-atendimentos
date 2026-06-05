<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import AtendimentoFilters from '../components/atendimentos/AtendimentoFilters.vue'
import AtendimentoList from '../components/atendimentos/AtendimentoList.vue'
import { useAtendimentosStore } from '../stores/atendimentos'
import type { AtendimentoStatus } from '../types/atendimento.types'

const atendimentosStore = useAtendimentosStore()
const { atendimentos } = storeToRefs(atendimentosStore)
const statusFiltro = ref<AtendimentoStatus | 'todos'>('todos')
const busca = ref('')

const atendimentosFiltrados = computed(() => {
  const termoBusca = busca.value.trim().toLocaleLowerCase()

  return atendimentos.value.filter((atendimento) => {
    const correspondeStatus =
      statusFiltro.value === 'todos' || atendimento.status === statusFiltro.value

    const correspondeBusca =
      !termoBusca ||
      atendimento.protocolo.toLocaleLowerCase().includes(termoBusca) ||
      atendimento.solicitante.toLocaleLowerCase().includes(termoBusca) ||
      atendimento.assunto.toLocaleLowerCase().includes(termoBusca)

    return correspondeStatus && correspondeBusca
  })
})

const semRegistrosLocais = computed(() => atendimentos.value.length === 0)
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
      <AtendimentoFilters v-model:status="statusFiltro" v-model:busca="busca" />
      <AtendimentoList
        :atendimentos="atendimentosFiltrados"
        :empty-title="
          semRegistrosLocais
            ? 'Nenhum atendimento local cadastrado neste navegador.'
            : 'Nenhum atendimento encontrado para os filtros aplicados.'
        "
        :empty-message="
          semRegistrosLocais
            ? 'Use a página de novo atendimento para criar o primeiro registro local.'
            : 'Ajuste o status ou o termo de busca para consultar outros registros locais.'
        "
      />
    </div>
  </section>
</template>
