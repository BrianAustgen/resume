import styled from 'styled-components'
import Box from '../box'

const List = styled(Box)`
  display: inline-block;
`

List.defaultProps = {
  as: 'li',
  px: 1
}


export default List
