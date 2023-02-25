import styled from 'styled-components'

export const PostContainer = styled.div`
  background: var(--bg-gray-800);

  padding: 3.5rem 3rem 1rem 3rem;
  margin-bottom: 1.25rem;

  border-radius: 0.5rem;
  color: var(--white);

  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0white -12px var(--tw-shadow-color);
  box-shadowwhite(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

  animation: entrance 0.5s ease-in-out;

  @keyframes entrance {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.5rem;
    }

    span {
      display: block;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const PostContent = styled.div`
  margin-top: 2rem;

  color: var(--white);
  font-weight: 700;

  animation: entrance 0.5s ease-in-out;

  @keyframes entrance {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 300;
    width: 100%;
  }

  div {
    width: 100%;
    margin: 3rem 0;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
    }

    @media (max-width: 768px) {
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: var(--white);

      text-decoration: solid underline;
      display: flex;
      align-items: end;
      gap: 0.5rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 30rem;
  }
`
