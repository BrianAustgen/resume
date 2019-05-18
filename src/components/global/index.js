import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/qck4hgj.css");

  * {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.N100};
    font-family: ${props => props.theme.fonts.sans};
    letter-spacing: ${props => props.theme.letterSpacing.normal};
  }

`

export default GlobalStyle
