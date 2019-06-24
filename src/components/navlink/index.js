import Link from "../link"
import styled from "styled-components"

const NavLink = styled(Link)`
  background: none;
  &:hover, &:focus{
    background: none;
  }
`

NavLink.defaultProps = {
  marginTop: '0',
}

export default NavLink
