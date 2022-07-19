import styled from 'styled-components'

export const SidebarContainer = styled.div`
  /* @media (min-width: 768px) {
    position: sticky;
    left: 0;
    right: 0;
    top: 7.5rem;
  } */
`
export const SidebarContent = styled.aside`
  background: var(--bg-gray-800);

  border-radius: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 4.5rem;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -2.25rem;

    img {
      width: 5rem;
      height: 5rem;
    }

    strong {
      margin-top: 1rem;
      color: var(--purple-100);
      line-height: 1.6;
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6rem;
      color: var(--purple-200);
    }
  }

  footer {
    border-top: 1px solid var(--purple-300);
    margin: 1.5rem 0;
    padding: 1.5rem 2rem 2rem 2rem;

    a {
      background: transparent;

      color: var(--purple-100);

      border: 1px solid var(--purple-300);
      border-radius: 0.5rem;

      height: 3.125rem;
      padding: 0 1.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const SearchBar = styled.div`
  background: var(--gray-800);

  margin-top: 1rem;

  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-top: 5px solid var(--white);

  padding-right: 0.75rem;

  color: var(--purple-800);

  input {
    width: 100%;

    border: none;
    border-radius: 0.75rem;
    padding: 1.25rem;

    background: transparent;

    outline: none;
    color: var(--purple-100);
  }
`
