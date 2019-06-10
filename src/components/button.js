import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const StyledButton = styled.a`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? props.theme.colors.LB : "white"};
  color: ${props => props.primary ? "white" : props.theme.colors.LB };

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.colors.LB};
  border-radius: 3px;
  font-weight: ${props => props.theme.fontWeights[1]}
  text-decoration: none;
`;

const Button = ({ children, to, ...props }) => {
  // This assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <StyledButton as={GatsbyLink} to={to} {...props}>
        {children}
      </StyledButton>
    )
  }
  return (
    <StyledButton as='a' href={to} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
