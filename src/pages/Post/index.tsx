/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContentContainer } from './styles'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface Post {
  title: string
  created_at: string
  body: string
  githubUrl: string
  comments: string
  name: string
}

export function Post() {
  const postParams = useParams<{ id: string }>()
  const [post, setPost] = useState<Post>({} as Post)

  async function fetchPostData() {
    const username = 'DiogoKaster'
    const repo = 'github-blog'

    const response = await api.get(
      `/repos/${username}/${repo}/issues/${postParams.id}`,
    )

    setPost({
      title: response.data.title,
      created_at: response.data.created_at,
      body: response.data.body,
      githubUrl: response.data.html_url,
      comments: response.data.comments,
      name: response.data.user.login,
    })
  }

  useEffect(() => {
    fetchPostData()
  }, [])

  return (
    <PostContainer>
      <PostInfo
        title={post.title}
        createdAt={post.created_at}
        githubUrl={post.githubUrl}
        name={post.name}
        comments={post.comments}
      />
      <PostContentContainer>
        <p>{post.body}</p>
      </PostContentContainer>
    </PostContainer>
  )
}
