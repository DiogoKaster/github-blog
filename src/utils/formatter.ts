import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const dateFormatter = (date: string) => {
  return formatDistanceToNow(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  })
}
