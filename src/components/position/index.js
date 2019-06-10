import styled from 'styled-components'
import { position, top, right, bottom, left, zIndex } from 'styled-system'

import Box from '../box'

const Position = styled(Box)`
  ${position}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${zIndex}
`

export default Position
