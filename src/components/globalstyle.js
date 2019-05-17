import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  h1 {
    color: ${props => (props.whiteColor ? 'green' : 'red')};
  }
  p {
    
  }














`

export default GlobalStyle
