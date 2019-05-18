import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Text from '../text'

const StyledLink = styled(Text)`
  background-image: linear-gradient(${props => props.theme.colors.G40}, ${props => props.theme.colors.G40});
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 100% .125em;
  color: inherit;
  outline: none;
  position: relative;
  text-decoration: none;
  transition: background-size background-image;
  transition-duration: ${props => props.theme.duration.normal};
  transition-timing-function: ${props => props.theme.timingFunctions.easeOut};

  &:hover, &:focus {
    background-image: linear-gradient(${props => props.theme.colors.G30}, ${props => props.theme.colors.G30});
    background-size: 100% .5em;
  }
`

const Link = ({ children, to, ...props }) => {
  // This assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <StyledLink as={GatsbyLink} to={to} {...props}>
        {children}
      </StyledLink>
    )
  }
  return (
    <StyledLink as='a' href={to} {...props}>
      {children}
    </StyledLink>
  )
}

Link.defaultProps = {
  fontSize: 'inherit'
}

export default Link
