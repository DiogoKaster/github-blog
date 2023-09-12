import { SearchPostContainer, SearchPostHeader } from './styles'

export function SearchPost() {
  return (
    <SearchPostContainer>
      <SearchPostHeader>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </SearchPostHeader>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchPostContainer>
  )
}
