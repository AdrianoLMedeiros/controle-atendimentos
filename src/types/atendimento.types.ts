export type AtendimentoStatus = 'novo' | 'em_andamento' | 'concluido'

export type AtendimentoStatusFiltro = AtendimentoStatus | 'todos'

export interface Atendimento {
  id: number
  protocolo: string
  solicitante: string
  assunto: string
  status: AtendimentoStatus
  dataCriacao: string
}

export interface NovoAtendimentoInput {
  solicitante: string
  assunto: string
  status: AtendimentoStatus
}
