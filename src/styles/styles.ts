import styled from 'styled-components'

export const AppContainer = styled.div`
  max-width: 70rem;
  margin: 2rem auto;

  padding: 0 1rem;

  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 320px 1fr;
  }
`

export const AppContent = styled.main``
