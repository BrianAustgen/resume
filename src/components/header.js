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
    <Position bg={'N0'} position={'fixed'} top={'0'} width={'100%'} zIndex={'9'}>
      <Box borderBottom={"1px solid #D4D8DB"}>
        <Container px='0' maxWidth='4' py={[5]} >
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Logo pr={[7]} to="/">Brian Austgen</Logo>
              <NavLink color='DB' fontSize='1' fontWeight="1" to="/portfolio/">Portfolio</NavLink>
              <NavLink color='DB' fontSize='1' fontWeight="1" pl='6' to="/portfolio/">About</NavLink>
              <NavLink color='DB' fontSize='1' fontWeight="1" pl='6' to="/portfolio/">Contact</NavLink>
              <NavLink color='DB' fontSize='1' fontWeight="1" pl='6' to="/portfolio/">Blog</NavLink>
            </Flex>
            <Flex alignItems="center">
              <NavLink href="mailto:brianaustgen@gmail.com" fontWeight="0">
                brianaustgen@gmail.com
              </NavLink>
            </Flex>
          </Flex>
        </Container>
      </Box>
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
