import { SearchPostContainer, SearchPostHeader } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const searchPostSchema = z.object({
  query: z.string().nonempty('Campo obrigatório'),
})

type SearchPostForm = z.infer<typeof searchPostSchema>

interface SearchPostProps {
  onSearch: (query: string) => void
}

export function SearchPost({ onSearch }: SearchPostProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchPostForm>({
    resolver: zodResolver(searchPostSchema),
  })

  async function handleSeachPosts(data: SearchPostForm) {
    onSearch(data.query)
  }

  return (
    <SearchPostContainer>
      <SearchPostHeader>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </SearchPostHeader>
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit(handleSeachPosts)()
          }
        }}
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
        disabled={isSubmitting}
      />
    </SearchPostContainer>
  )
}
