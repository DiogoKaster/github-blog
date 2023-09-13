import { PostContent, PostResumeContainer, PostResumeHeader } from './styles'

export function PostResume() {
  return (
    <PostResumeContainer>
      <PostResumeHeader>
        <h2>JavaScript data types and data structures</h2>
        <span>Há 1 dia</span>
      </PostResumeHeader>
      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in
        </p>
      </PostContent>
    </PostResumeContainer>
  )
}
