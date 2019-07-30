import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Box from '../box'
import Container from '../container'
import Heading from "../heading"
import Text from "../text"
import Button from "../button.js"
import Flex from "../flex"

const randomBorder = () => {
  let number = Math.floor(Math.random() * Math.floor(2))
  let border = `random.${number}`
  return (border)
}
console.log(randomBorder())

const LeftParagraphPiece = ({content, data}) => (

  <Box borderLeft={randomBorder()} m="auto" maxWidth={[4]} as="section" my={[7]}>
    <Container>
      <Box>
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
        <Flex pb={['5', '5', '5']} alignItems="center" justifyContent="space-between" pt={6}>
          <Flex order={['1','1','1']} width="33%" flexDirection="column" flexWrap="wrap" pl={4} justifyContent='center'>
            <Box maxWidth='80%' pb='3' boxShadow={1} textAlign='center' paddingBottom={3}>
              <Heading variant={['6001', '7001', '8001']} color={'NB'}>
                {content.stats.display}
              </Heading>
              <Heading variant={['400', '500', '500']} color={'NB'}>
                {content.stats.caption}
              </Heading>
            </Box>
          </Flex>
          <Flex order={['2','2','2']} width="67%" flexDirection="column" flexWrap="wrap">
            <Box>
              <Heading pt={2} px={2} variant='400'>
                Overview
              </Heading>
              <Text mt='0' fontSize={2} py={1} px={2} as="p">
                {content.description}
              </Text>
              <Heading pt={2} px={2} variant='400'>
                Strategy
              </Heading>
              <Text mt='0' fontSize={2} py={1} px={2} as="p">
                {content.strategy}
              </Text>
            </Box>
            {/* <Button maxWidth="40%" as="a" href={content.link} target="_blank">
              {content.cta}
            </Button> */}
          </Flex>
        </Flex>
      </Box>
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
    //  eslint-disable-next-line
    render={content, data => (
      <LeftParagraphPiece content={content} data={data}/>
    )}
  />
);
