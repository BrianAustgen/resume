import styled from 'styled-components'
import Box from '../box'

const ListItem = styled(Box)`
  display: inline-block;
`

ListItem.defaultProps = {
  as: 'li',
  px: 1
}


export default ListItem
