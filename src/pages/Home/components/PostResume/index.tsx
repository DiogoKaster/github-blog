import { PostContent, PostResumeContainer, PostResumeHeader } from './styles'

interface PostResumeProps {
  id: string
  title: string
  createdAt: string
  body: string
}

export function PostResume({ id, title, createdAt, body }: PostResumeProps) {
  return (
    <PostResumeContainer to={`/post/${id}`}>
      <PostResumeHeader>
        <h2>{title}</h2>
        <span>{createdAt}</span>
      </PostResumeHeader>
      <PostContent>
        <p>{body}</p>
      </PostContent>
    </PostResumeContainer>
  )
}
