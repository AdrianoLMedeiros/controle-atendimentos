import type { Atendimento } from '../types/atendimento.types'

export const atendimentosMock: Atendimento[] = [
  {
    id: 1,
    protocolo: 'ATD-2026-001',
    solicitante: 'Ana Souza',
    assunto: 'Atualização cadastral',
    status: 'novo',
    dataCriacao: '2026-06-01',
  },
  {
    id: 2,
    protocolo: 'ATD-2026-002',
    solicitante: 'Bruno Lima',
    assunto: 'Consulta de protocolo administrativo',
    status: 'em_andamento',
    dataCriacao: '2026-06-02',
  },
  {
    id: 3,
    protocolo: 'ATD-2026-003',
    solicitante: 'Carla Mendes',
    assunto: 'Regularização documental',
    status: 'concluido',
    dataCriacao: '2026-06-03',
  },
]
