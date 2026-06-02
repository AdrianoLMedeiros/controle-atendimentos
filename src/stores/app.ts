import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    nomeSistema: 'Controle de Atendimentos',
  }),
})
