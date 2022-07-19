import styled from 'styled-components'

export const PostContainer = styled.div`
  background: var(--bg-gray-800);

  padding: 3.5rem 3rem 1rem 3rem;
  margin-bottom: 1.25rem;

  border-radius: 0.5rem;
  color: var(--purple-100);

  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
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
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;

    div:first-child {
      margin-bottom: 2.5rem;

      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      span:first-child {
        background: var(--purple-800);
        padding: 0.5rem 1.5rem;

        border-radius: 0.5rem;
      }

      span:last-child {
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1rem;
      }
    }

    div:last-child {
      display: flex;
      flex-direction: column;

      h1 {
      font-size: 1.5rem;
      line-height: 2rem;

      @media (max-width: 768px) {
      font-size: 1.5rem/* 36px */;
      line-height: 2.5rem/* 40px */;/
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        margin-top: 2rem;

        width: 15rem;

        border: 0;
        background: transparent;

        padding: .7rem;
        border-radius: 0.5rem;

        color: var(--purple-100);
        cursor: pointer;

        transition: scale 0.4s;

        &:hover {
          scale: 1.1;
        }
      }
    }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export const PostContent = styled.div`
  color: var(--purple-100);
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
      color: var(--purple-100);

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
