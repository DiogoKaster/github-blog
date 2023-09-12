import { HeaderContainer } from './styles'
import Cover from '../../assets/Cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Cover} alt="Cover" />
    </HeaderContainer>
  )
}
