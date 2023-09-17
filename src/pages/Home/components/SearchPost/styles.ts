import styled from 'styled-components'

export const SearchPostContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 54rem;
  margin-top: 1.75rem;

  input {
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.blue};
    }
  }
`
export const SearchPostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
