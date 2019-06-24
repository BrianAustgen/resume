import PropTypes from "prop-types"
import React from "react"

import Container from "./container"
import NavLink from "./navlink"
import Logo from "./logo"
import Box from "./box"
import Flex from "./flex"
import Position from "./position"

const Header = ({ siteTitle }) => {
  return (
    <Position position={'fixed'} top={'0'} width={'100%'} zIndex={'9'}>
      <Container borderBottom={"1px solid #D4D8DB"} bg={'N0'} py={[5]} >
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Logo pr={[7]} to="/">Brian Austgen</Logo>
            <NavLink fontWeight="1" to="/portfolio/">Portfolio</NavLink>
          </Box>``
          <Box>
          </Box>
            <NavLink href="mailto:brianaustgen@gmail.com" fontWeight="0">
            brianaustgen@gmail.com
            </NavLink>
        </Flex>
      </Container>
    </Position>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
