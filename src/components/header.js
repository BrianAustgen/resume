import PropTypes from "prop-types"
import React from "react"

import Container from "./container"
import Button from "./button"
import NavLink from "./NavLink"
import Logo from "./Logo"

const Header = ({ siteTitle }) => {
  return (
    <Container borderBottom={"1px solid #D4D8DB"} bg={'N0'} py={["major.2"]}>
      <Logo pr={["major.3"]} to="/">Brian Austgen</Logo>
      <NavLink  to="/portfolio/">Portfolio</NavLink>
      <Button primary m={'major.2'}>I am a button</Button>

    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
