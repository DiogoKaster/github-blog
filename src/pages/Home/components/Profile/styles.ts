import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;

  width: 100%;
  max-width: 54rem;
  height: 13.5rem;

  border-radius: 0.5rem;
  margin-top: -7rem;
  background: ${(props) => props.theme['base-profile']};

  img {
    width: 9.25rem;
    height: 9.25rem;
    flex-shrink: 0;
    border-radius: 0.5rem;
  }
`

export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`

export const ProfileContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    display: inline-flex;
    text-decoration: none;
    gap: 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }
`

export const ProfileDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
