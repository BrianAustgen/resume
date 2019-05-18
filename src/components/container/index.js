import styled from 'styled-components'
import { maxWidth } from 'styled-system'

import Box from '../box'

const Container = styled(Box)`
  margin: 0 auto;
  ${maxWidth}
`

Container.defaultProps = {
  maxWidth: '3',
  px: ['4%', 'major.4']
}

export default Container
