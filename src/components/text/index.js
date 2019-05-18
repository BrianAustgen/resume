import styled from 'styled-components'
import {
  fontFamily,
  fontSize,
  lineHeight,
  fontWeight,
  fontStyle,
  letterSpacing
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

  & + & {
    margin-top: ${props => props.theme.space.major[2]}px;
  }
`

Text.defaultProps = {
  color: 'N50',
  fontSize: ['2', '3']
}

export default Text
