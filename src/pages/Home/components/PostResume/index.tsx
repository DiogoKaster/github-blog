import { PostContent, PostResumeContainer, PostResumeHeader } from './styles'

interface PostResumeProps {
  title: string
  createdAt: string
  body: string
}

export function PostResume({ title, createdAt, body }: PostResumeProps) {
  return (
    <PostResumeContainer>
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
