import styled from 'styled-components'
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  fontStyle,
  letterSpacing,
  space,
  textStyle
} from 'styled-system'

import Box from '../box'

const Text = styled(Box)`
  line-height: ${props => props.theme.lineHeight[2]};
  ${fontFamily}
  ${fontSize}
  ${lineHeight}
  ${fontWeight}
  ${fontStyle}
  ${letterSpacing}
  ${space}
  ${textStyle}
`

Text.defaultProps = {
  mt: '5',
  color: 'N50',
  fontSize: ['2', '3']
}

export default Text
