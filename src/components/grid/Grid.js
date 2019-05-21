import styled from 'styled-components'
import {
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridColumnGap,
  gridRowGap,
  gridGap,
  gridAutoColumns,
  gridAutoRows,
  gridAutoFlow
} from 'styled-system'

import Box from '../box'

const Grid = styled(Box)`
  display: grid;

  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridTemplateAreas}
  ${gridColumnGap}
  ${gridRowGap}
  ${gridGap}
  ${gridAutoColumns}
  ${gridAutoRows}
  ${gridAutoFlow}
`

Grid.defaultProps = {
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridGap: 'major.3'
}

export default Grid
