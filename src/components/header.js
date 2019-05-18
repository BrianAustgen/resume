import PropTypes from "prop-types"
import React from "react"

import Container from "./container"
import Text from "./text"
import Link from "./link"
import Button from "./button"
import Logo from "./logo"

const Header = ({ siteTitle }) => {
  return (
    <Container borderBottom={"1px solid #D4D8DB"} bg={'N0'} py={["major.2"]}>
      <Logo pr={["major.3"]} to="/">Hello World</Logo>
      <Link to="/page-2/">Go to page 2</Link>
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
