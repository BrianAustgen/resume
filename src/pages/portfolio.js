import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Box from '../components/box'
import Container from '../components/container'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading"
import Text from "../components/text"
import {Grid, GridItem} from "../components/grid"
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
        <Img fluid={data.unlimitedBanner.childImageSharp.fluid}/>
        <Grid mt={['32px', '32px', '64px']}>
          <GridItem gridColumn={['1 / -1', '2 / -2', '7 / -1', '7 / -2']} order={['1', '1', '2']} alignSelf={'flex-start'} px={'major.1'}>
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
          </GridItem>
          <GridItem gridColumn={['1 / -1', '2 / -2', '1 / 6', '2 / 6']} order={['2', '2', '1']} alignSelf={'flex-start'} pb={'major.1'}>
            <Text as="p">
              I created this campaign to create more interest in the off-season and maintain a high average sale price. We were able to accomplish both.
            </Text>
            {/*TODO add href for button*/}
            <Button my="0" as="a" href="https://getunbound.org" target="_blank">
              View Landing Pages
            </Button>
          </GridItem>
        </Grid>
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
        <Img fluid={data.unlimitedBanner.childImageSharp.fluid}/>
        <Grid>
          <GridItem borderLeft="1" gridColumn={['1 / -1', '2 / -2', '7 / -1', '5 / 6']} order={['1', '1', '2']} alignSelf={'flex-start'} px={'major.1'}>
            <Text as="p">
              Views: 262,800
            </Text>
          </GridItem>
          <GridItem borderLeft="1" gridColumn={['1 / -1', '2 / -2', '7 / -1', '7 / 8']} order={['2', '2', '3']} alignSelf={'flex-start'} px={'major.1'}>
            <Text as="p">
              Engagements: 2,500+
            </Text>
          </GridItem>
          <GridItem gridColumn={['1 / -1', '2 / -2', '1 / 6', '1 / 5']} order={['3', '3', '1']} alignSelf={'flex-start'} pb={'major.1'}>
            <Text as="p">
               Rank #1 in “Opportunity Cost of College” video search on Google and Bing
            </Text>
            <Button my="0" target="_blank" href="https://www.youtube.com/watch?v=nN55-2f-I4s&pbjreload=10">
              Watch Video
            </Button>
          </GridItem>
        </Grid>
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
  }
`

export default SecondPage
