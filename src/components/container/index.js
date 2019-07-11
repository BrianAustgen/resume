import styled from 'styled-components'
import { maxWidth } from 'styled-system'

import Box from '../box'

const Container = styled(Box)`
  margin: 0 auto;
  ${maxWidth}
`

Container.defaultProps = {
  maxWidth: '6',
  px: ['4%', 7]
}

export default Container
