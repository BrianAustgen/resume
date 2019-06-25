import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Box from '../box'
import Container from '../container'
import Heading from "../heading"
import Text from "../text"
import Button from "../button.js"
import Flex from "../flex"

const Piece = ({content, data}) => (
  <Box borderLeft="3" m="auto" maxWidth={[2]} as="section" my={[7]}>
    <Container>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
        <Heading as="h2" color="NB" variant="6001">
          {content.headline}
        </Heading>
        </Box>
        <Box>
        <Heading as="h4" color="DB" variant="3001">
          {content.date}
        </Heading>
        </Box>
      </Flex>
      <Box pt={[4]} >
        <Img fluid={data.unlimitedBanner.childImageSharp.fluid}/>
      </Box>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex order={['1','1','2']} width="50%" flexDirection="column" flexWrap="wrap" borderLeft="1" pl={4}>
        <Heading as="h5" color="LB" variant='6001' mt={4}>
          Goal:
        </Heading>
        <Text mt={0} as="p">
          {content.goal}
        </Text>
        <Heading as="h5" color="LB" variant='6001' mt={4}>
          Solution:
        </Heading>
        <Text mt={0} as="p">
          {content.solution}
        </Text>
        <Heading as="h5" color="LB" variant='6001' mt={4}>
          Results:
        </Heading>
        <Text mt={0} as="p">
          {content.results}
        </Text>
        </Flex>
        <Flex order={['2','2','1']} width="50%" flexDirection="column" flexWrap="wrap">
        <Text px={[2]} as="p">
          I developed this campaign to create more interest in the off-season and maintain a high average sale price. We were able to accomplish both.
        </Text>
        {/*TODO add href for button*/}
        <Button maxWidth="40%" as="a" href="https://getunbound.org" target="_blank">
          View Landing Page
        </Button>
        </Flex>
      </Flex>
    </Container>
  </Box>
)

export default ({content}) => (
  <StaticQuery
    query={graphql`
      query {
        unlimitedBanner: file(relativePath: { eq: "unlimited_summer_banner.png" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        opportunityCost: file(relativePath: { eq: "opportunity_cost_of_college.png" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={content, data => (
      <Piece content={content} data={data}/>
    )}
  />
);
