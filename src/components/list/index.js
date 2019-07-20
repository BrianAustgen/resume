import React from "react"

import ListItem from './item'
import Text from '../text'
import Box from '../box'


const List = (props) => (
  <Box pl={[7]}>
    {props.content.map(
      (skill) =>
      <ListItem bg='NB' color='N0' py='2' px='3' m='1' fontWeight='500' borderRadius='6px'>
         {skill}
      </ListItem>
    )}
  </Box>
)


export default List
