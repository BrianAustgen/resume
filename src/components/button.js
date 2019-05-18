import styled from "styled-components";

const Button = styled.a`
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


export default Button
