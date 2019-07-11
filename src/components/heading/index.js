import styled from 'styled-components'
import { variant, space } from 'styled-system'
import Text from '../text'

const headingStyle = variant({
  key: 'headings'
})

const Heading = styled(Text)`
  ${headingStyle}
  ${space}
  line-height: ${props => props.theme.lineHeight[1]};
`

Heading.defaultProps = {
  as: 'h3',
  m: '0',
  variant: '800'
}

export default Heading
