import PropTypes from "prop-types"
import React from "react"

import Container from "./container"
import Button from "./button"
import NavLink from "./NavLink"
import Logo from "./logo"
import Box from "./box"
import Flex from "./flex"

const Header = ({ siteTitle }) => {
  return (
    <Container borderBottom={"1px solid #D4D8DB"} bg={'N0'} py={["major.2"]}>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Logo pr={["major.3"]} to="/">Brian Austgen</Logo>
        </Box>
        <Box my={['major.4']}>
          <NavLink to="/portfolio/">Portfolio</NavLink>
          <Button primary>I am a button</Button>
        </Box>
      </Flex>
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
