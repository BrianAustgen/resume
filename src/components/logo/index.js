import Link from "../link"
import styled from "styled-components"

const Logo = styled(Link)`

  font-weight: ${props => props.theme.fontWeights[2]};
  font-size: ${props => props.theme.fontSizes[4]};
  background: none;
  &:hover, &:focus{
    background: none;
  }

`

export default Logo
