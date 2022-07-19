import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: var(--bg-gray-800);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 0;

  position: sticky;
  top: 0;

  img {
    height: 3rem;
  }

  span {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.75rem;
    color: var(--purple-100);
  }
`
