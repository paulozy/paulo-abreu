import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

:root {
  --bg-gray-800: #2f3542;

  --white: #fff;

  --purple-100: #FAF5FF;
  --purple-200: #AFABBF;
  --purple-300: #E9D5FF;
  --purple-800: #581C87;

}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    animation: entrance 0.5s ease-in-out;

    @keyframes entrance {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
}

}

body {
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

`
