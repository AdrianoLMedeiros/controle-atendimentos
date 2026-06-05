import { defineStore } from 'pinia'
import {
  carregarAtendimentosLocais,
  salvarAtendimentosLocais,
} from '../services/atendimentosStorage'
import type { Atendimento, NovoAtendimentoInput } from '../types/atendimento.types'

interface AtendimentoState {
  atendimentos: Atendimento[]
}

function gerarProximoId(atendimentos: Atendimento[]): number {
  const maiorId = atendimentos.reduce((maior, atendimento) => Math.max(maior, atendimento.id), 0)

  return maiorId + 1
}

function gerarProtocolo(id: number): string {
  return `LOCAL-${String(id).padStart(4, '0')}`
}

function gerarDataCriacao(): string {
  return new Date().toISOString().slice(0, 10)
}

export const useAtendimentosStore = defineStore('atendimentos', {
  state: (): AtendimentoState => ({
    atendimentos: carregarAtendimentosLocais(),
  }),
  actions: {
    criarAtendimento(input: NovoAtendimentoInput): Atendimento {
      const id = gerarProximoId(this.atendimentos)
      const atendimento: Atendimento = {
        id,
        protocolo: gerarProtocolo(id),
        solicitante: input.solicitante.trim(),
        assunto: input.assunto.trim(),
        status: input.status,
        dataCriacao: gerarDataCriacao(),
      }

      this.atendimentos.push(atendimento)
      salvarAtendimentosLocais(this.atendimentos)

      return atendimento
    },
  },
})
