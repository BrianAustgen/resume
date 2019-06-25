import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Box from '../components/box'
import Container from '../components/container'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading"
import Text from "../components/text"
import Button from "../components/button.js"
import Flex from "../components/flex"
import Piece from '../components/portfolio/piece.js'

const content = {
  headline: 'Unlimited Summer',
  date: '(03/2019 - 04/2019)',
  goal: 'Increase off-season lead gen',
  solution: 'Promotion for extra free content for the summer for new customers in March and April.',
  results: 'Increased lead generation by over 62% and revenue by 41% year over year.',
}

const Portfolio = ({data}) => (
  <Layout>
    <SEO title="Portfolio"/>
    {/*Start Portfolio Introduction*/}
    <Box as="section" maxWidth={[2]} mx="auto" mb={[6]} mt={[8]}>
      <Container>
        <Heading as="h1" variant="700">
          Portfolio
        </Heading>
      </Container>
    </Box>
    {/*End Portfolio Introduction*/}
    <Piece content={content}/>

    {/*Start Opportunity Cost Video*/}
    <Box borderLeft="4" m="auto" maxWidth={[2]} as="section" my={[7]}>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
          <Heading as="h2" color="NB" variant="6001">
            Opportunity Cost of College
          </Heading>
          </Box>
          <Box>
          <Heading as="h4" color="DB" variant="3001">
            (02/2017 - Present)
          </Heading>
          </Box>
        </Flex>
        <Box pt={[4]}>
          <Img fluid={data.opportunityCost.childImageSharp.fluid}/>
        </Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex order={['1','1','2']} width="50%" flexDirection="column" flexWrap="wrap" borderLeft="1" pl={4}>
            <Text as="p">
              Views: 262,800
            </Text>
            <Text as="p">
              Engagements: 2,500+
            </Text>
          </Flex>
          <Flex order={['2','2','1']} width="50%" flexDirection="column" flexWrap="wrap">
            <Text px={[2]} as="p">
               Rank #1 in “Opportunity Cost of College” video search on Google and Bing
            </Text>
            <Button maxWidth="40%" my="0" target="_blank" href="https://www.youtube.com/watch?v=nN55-2f-I4s&pbjreload=10">
              Watch Video
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
    {/*End Opportunity Cost Video*/}
  </Layout>
)

export const query = graphql`
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
`

export default Portfolio
