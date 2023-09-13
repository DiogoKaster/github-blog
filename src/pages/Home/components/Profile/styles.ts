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
`
