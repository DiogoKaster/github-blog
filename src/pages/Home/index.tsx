import { Profile } from '../../components/Profile'
import { SearchPost } from '../../components/SearchPost'
import { PostResume } from './components/PostResume'
import { HomeContainer, PostListContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchPost />
      <PostListContainer>
        <PostResume />
        <PostResume />
        <PostResume />
      </PostListContainer>
    </HomeContainer>
  )
}
