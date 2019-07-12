import React from "react"

import ListItem from './item'
import Text from '../text'
import Box from '../box'


const List = (props) => (
  <Box pl={[6]}>
    {props.content.map(
      (skill) =>
      <ListItem>
        &bull; {skill}
      </ListItem>
    )}
  </Box>
)


export default List
