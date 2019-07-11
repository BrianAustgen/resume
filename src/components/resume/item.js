import React from "react"

import Heading from '../heading'
import Box from '../box'
import Container from '../container'
import Text from '../text'
import Button from '../button.js'
import Flex from '../flex'
import List from '../list'


const Item = ({content}) => (

<Box py={[4]}>
  <Heading as='h3' variant='500'>
    {content.title}
  </Heading>
  <Heading as='h4' variant='company'>
    {content.company}
  </Heading>
  <Heading as='h5' variant='3001'>
    {content.dates}
  </Heading>
  <Text>
    {content.summary}
  </Text>
  <ul>
    {content.bulletPoints.map(
      (point) =>
      <List>
        &bull; {point}
      </List>
    )}
  </ul>
</Box>
)


export default Item
