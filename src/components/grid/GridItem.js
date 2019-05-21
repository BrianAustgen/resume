import styled from 'styled-components'
import {
  gridColumn,
  gridRow,
  gridArea,
  alignSelf,
  justifySelf,
  order,
  minHeight
} from 'styled-system'

import Box from '../box'

const GridItem = styled(Box)`
  ${gridColumn}
  ${gridRow}
  ${gridArea}
  ${alignSelf}
  ${justifySelf}
  ${order}
  ${minHeight}
`

export default GridItem
