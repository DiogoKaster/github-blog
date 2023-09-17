import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 54rem;
  height: 10.5rem;

  border-radius: 0.5rem;
  margin-top: -7rem;
  background: ${(props) => props.theme['base-profile']};

  gap: 0.75rem;
  padding: 2rem;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: inline-flex;
      text-decoration: none;
      gap: 0.5rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.blue};
      border-bottom: 1px solid transparent;
      border-top: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const PostInfoDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
