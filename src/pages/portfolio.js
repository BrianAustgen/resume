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

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Portfolio"/>
    {/*Start Portfolio Introduction*/}
    <Box as="section" maxWidth={[2]} mx="auto" mb={['major.3']} mt={['major.5']}>
      <Container>
        <Heading as="h1" variant="700">
          Portfolio
        </Heading>
      </Container>
    </Box>
    {/*End Portfolio Introduction*/}
    {/*Start Unlimited Summer*/}
    <Box borderLeft="3" m="auto" maxWidth={[2]} as="section" my={['major.4']}>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
          <Heading as="h2" color="NB" variant="6001">
            Unlimited Summer
          </Heading>
          </Box>
          <Box>
          <Heading as="h4" color="DB" variant="3001">
            (03/2019 - 04/2019)
          </Heading>
          </Box>
        </Flex>
        <Box pt={['major.2']} >
          <Img fluid={data.unlimitedBanner.childImageSharp.fluid}/>
        </Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex order={['1','1','2']} width="50%" flexDirection="column" flexWrap="wrap" borderLeft="1" pl={'major.2'}>
          <Text as="p">
            Impressions: 273,040
          </Text>
          <Text as="p">
            Leads: 675+
          </Text>
          <Text as="p">
            Revenue of Goal: 189%
          </Text>
          <Text as="p">
            Conversion Rate (landing page): 18.65%
          </Text>
          </Flex>
          <Flex order={['2','2','1']} width="50%" flexDirection="column" flexWrap="wrap">
          <Text px={['minor.2']} as="p">
            I created this campaign to create more interest in the off-season and maintain a high average sale price. We were able to accomplish both.
          </Text>
          {/*TODO add href for button*/}
          <Button maxWidth="40%" as="a" href="https://getunbound.org" target="_blank">
            View Landing Page
          </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
    {/*End Unlimited Summer*/}
    {/*Start Opportunity Cost Video*/}
    <Box borderLeft="4" m="auto" maxWidth={[2]} as="section" my={['major.4']}>
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
        <Box pt={['major.2']}>
          <Img fluid={data.opportunityCost.childImageSharp.fluid}/>
        </Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex order={['1','1','2']} width="50%" flexDirection="column" flexWrap="wrap" borderLeft="1" pl={'major.2'}>
            <Text as="p">
              Views: 262,800
            </Text>
            <Text as="p">
              Engagements: 2,500+
            </Text>
          </Flex>
          <Flex order={['2','2','1']} width="50%" flexDirection="column" flexWrap="wrap">
            <Text px={['minor.2']} as="p">
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

export default SecondPage
