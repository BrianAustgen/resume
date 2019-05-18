import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/qck4hgj.css");

  @import url('https://fonts.googleapis.com/css?family=Barlow:300,300i,500,500i&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.N100};
    font-family: ${props => props.theme.fonts.sans};
    letter-spacing: ${props => props.theme.letterSpacing.normal};
    font-weight: ${props => props.theme.fontWeights[0]}
  }

`

export default GlobalStyle
