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
    <Box as="section" my={['major.4']}>
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
          <Heading as="h2" color="NB" variant="6001">
            (03/2019 - 04/2019)
          </Heading>
          </Box>
        </Flex>
        <Img fluid={data.unlimitedBanner.childImageSharp.fluid}/>
        <Grid mt={['32px', '32px', '64px']}>
          <GridItem gridColumn={['1 / -1', '2 / -2', '7 / -1', '7 / -2']} order={['1', '1', '2']} alignSelf={'flex-start'} px={'major.1'}>
            <Text as="p">
              Cost: $X,xxx
            </Text>
            <Text as="p">
              Leads: X,xxx
            </Text>
            <Text as="p">
              Revenue of Goal: 189%
            </Text>
          </GridItem>
          <GridItem gridColumn={['1 / -1', '2 / -2', '1 / 6', '2 / 6']} order={['2', '2', '1']} alignSelf={'flex-start'} pb={'major.1'}>
            <Text as="p">
              I created this campaign to create more interest in the off-season and maintain a high average sale price. We were able to accomplish both.
            </Text>
            <Button my="0" as="a" href="getunbound.org">
              View Landing Pages
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </Box>
    {/*End Unlimited Summer*/}
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
