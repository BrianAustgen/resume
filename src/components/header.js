import PropTypes from "prop-types"
import React from "react"

import Container from "./container"
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
          <NavLink fontWeight="1" to="/portfolio/">Portfolio</NavLink>
        </Box>
        <Box my={['major.4']}>
        </Box>
          <NavLink href="mailto:brianaustgen@gmail.com" fontWeight="0">
          brianaustgen@gmail.com
          </NavLink>
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
