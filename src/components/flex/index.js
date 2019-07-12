import styled from 'styled-components'
import {
  space,
  width,
  color,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
  size
} from 'styled-system'

import Box from '../box'

const Flex = styled(Box)`
  display: flex;
  ${space}
  ${width}
  ${color}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${flex}
  ${justifySelf}
  ${alignSelf}
  ${order}
  ${size}
`

export default Flex
