import styled from 'styled-components'
import {
  compose,
  space,
  width,
  color,
  borders,
  textAlign,
  boxShadow,
  borderRadius,
  layout,
  display,
  zIndex,
  minHeight,
  background
} from 'styled-system'

const Box = styled('div')(
  compose(
    layout,
    background,
    space,
    width,
    color,
    borders,
    textAlign,
    boxShadow,
    borderRadius,
    display,
    zIndex,
    minHeight,
  )
)

export default Box
