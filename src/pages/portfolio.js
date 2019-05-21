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
    <Box m="auto" maxWidth={[2]} as="section" my={['major.4']}>
      <Container>
        <Heading as="h2" color="NB" variant="600">
          Unlimited Summer (03/2019 - 04/2019)
        </Heading>
        <Img fluid={data.unlimitedBanner.childImageSharp.fluid}/>
        <Grid mt={['64px', '64px', '256px']}>
          <GridItem gridColumn={['1 / -1', '2 / -2', '7 / -1', '7 / -2']} order={['1', '1', '2']} alignSelf={'flex-end'} px={'major.1'}>
            <Text as="p">
              First Grid Item
            </Text>
          </GridItem>
          <GridItem gridColumn={['1 / -1', '2 / -2', '1 / 6', '2 / 6']} order={['2', '2', '1']} alignSelf={'flex-end'} pb={'major.1'}>
            <Text as="p">
              Second Grid Item
            </Text>
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
