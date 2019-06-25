import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Box from '../box'
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  fontStyle,
  letterSpacing,
  space,
  color
} from 'styled-system'

const StyledLink = styled(Box)`
  ${fontFamily}
  ${fontSize}
  ${lineHeight}
  ${fontWeight}
  ${fontStyle}
  ${letterSpacing}
  ${space}
  ${color}
  background-image: linear-gradient(${props => props.theme.colors.LB}, ${props => props.theme.colors.LB});
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 100% .125em;
  outline: none;
  position: relative;
  text-decoration: none;
  transition: background-size background-image;
  transition-duration: ${props => props.theme.duration.normal};
  transition-timing-function: ${props => props.theme.timingFunctions.easeOut};

  &:hover, &:focus {
    background-image: linear-gradient(${props => props.theme.colors.LB}, ${props => props.theme.colors.LB});
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
  fontSize: 'inherit',
  marginTop: '0',
  color: 'N50',
}

export default Link
