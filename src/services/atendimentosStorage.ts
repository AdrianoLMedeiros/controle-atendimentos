import type { Atendimento } from '../types/atendimento.types'

const STORAGE_KEY = 'controle-atendimentos:atendimentos'

function isAtendimento(value: unknown): value is Atendimento {
  if (!value || typeof value !== 'object') {
    return false
  }

  const atendimento = value as Partial<Atendimento>

  return (
    typeof atendimento.id === 'number' &&
    typeof atendimento.protocolo === 'string' &&
    typeof atendimento.solicitante === 'string' &&
    typeof atendimento.assunto === 'string' &&
    typeof atendimento.status === 'string' &&
    typeof atendimento.dataCriacao === 'string'
  )
}

export function carregarAtendimentosLocais(): Atendimento[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)

    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)

    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter(isAtendimento)
  } catch {
    return []
  }
}

export function salvarAtendimentosLocais(atendimentos: Atendimento[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(atendimentos))
}
