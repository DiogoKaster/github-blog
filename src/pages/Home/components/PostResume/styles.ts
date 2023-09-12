import styled from 'styled-components'

export const PostResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  max-width: 26rem;
  height: 16.25rem;
  flex-shrink: 0;
  padding: 2rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 0.5rem;
`
