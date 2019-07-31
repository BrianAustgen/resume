import styled from 'styled-components'
import Box from '../box'

const ListItem = styled(Box)`
  display: inline-block;
`

ListItem.defaultProps = {
  as: 'li',
  pr: 4,
  py: 1,
  fontSize: '2',
  fontWeight: '1',
}


export default ListItem
