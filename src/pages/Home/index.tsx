import { Profile } from './components/Profile'
import { SearchPost } from './components/SearchPost'
import { PostResume } from './components/PostResume'
import { HomeContainer, PostListContainer } from './styles'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'
import { dateFormatter } from '../../utils/formatter'

interface Post {
  number: string
  title: string
  created_at: string
  body: string
}

export function Home() {
  const [posts, setPosts] = useState([] as Post[])

  async function fetchPosts(query?: string) {
    const username = 'DiogoKaster'
    const repo = 'github-blog'
    const searchText = query ? `${query} ` : ''

    const response = await api.get(`https://api.github.com/search/issues`, {
      params: {
        q: `${searchText}repo:${username}/${repo}`,
      },
    })

    const posts = response.data.items.map((post: Post) => {
      return {
        number: post.number,
        title: post.title,
        created_at: post.created_at,
        body: post.body,
      }
    })

    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <Profile />
      <SearchPost onSearch={fetchPosts} />
      <PostListContainer>
        {posts.map((post) => {
          return (
            <PostResume
              id={post.number}
              key={post.number}
              title={post.title}
              createdAt={dateFormatter(post.created_at)}
              body={post.body}
            />
          )
        })}
      </PostListContainer>
    </HomeContainer>
  )
}
