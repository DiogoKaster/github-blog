import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PostResumeContainer = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 26rem;
  height: 16.25rem;
  flex-shrink: 0;
  padding: 2rem;
  text-decoration: none;

  background: ${(props) => props.theme['base-post']};
  border-radius: 0.5rem;

  &:hover {
    outline: 2px solid ${(props) => props.theme['base-border']};
  }
`

export const PostResumeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    min-width: 4rem;
    text-align: right;
  }
`

export const PostContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  color: ${(props) => props.theme['base-text']};
`
