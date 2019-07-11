import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from '../components/heading'
import Box from '../components/box'
import Container from '../components/container'
import Text from '../components/text'
import Button from '../components/button'
import Flex from '../components/flex'
import ResumeItem from '../components/resume/item'

const content = {
  title: "Marketing Director, Consumer",
  company: "Lumerit Education",
  dates: "March 2019 - Present",
  summary: "I do marketing Strategy I do marketing Strategy I do marketing Strategy I do marketing Strategy I do marketing Strategy I do marketing Strategy",
  bulletPoints: ["Social Stategy", "Pricing Strategy", "Sales Enablement", "Measure ROI", "Develop Technology Roadmap"],
}


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`Brian Austgen`, `portfolio`, `resume`]} />
    <Box as="section" mb={[6]} mt={[8]}>
      <Container maxWidth={[5]} px={[0]}>
        <Flex alignItems="center" justifyContent="space-between">
          <Box maxWidth={[0]} width='75%' >
            <Heading as="h5" pl='4px' variant="3001">
              MARKETER & WEB DEVELOPER
            </Heading>
            <Heading as="h1" variant="700">
              BRIAN AUSTGEN
            </Heading>
            <Button mt={[6]}>
              View Portfolio
            </Button>
          </Box>
          <Box width="25%">
            <Img fluid={data.portrait.childImageSharp.fluid}/>
          </Box>
        </Flex>
        <Flex>
          <Box width='75%'>
            <ResumeItem content={content}/>
          </Box>
          <Box width='25%'>

          </Box>

        </Flex>
      {/*Start Bio*/}
        <Box m="auto" maxWidth={[2]} as="section" my={[7]}>
          <Heading as="h2" variant="600">
            Bio
          </Heading>
          <Text as="p">
            Over the last 8 years, I’ve combined marketing automation, data science, web development, and traditional marketing techniques to create high-performing digital marketing campaigns.
          </Text>
          <Text as="p">
            Working in a startup allowed me to rapidly gain a broad knowledge of digital marketing. As part of a tiny team, I was constantly increasing my abilities in everything from conversions to copywriting to coding.
          </Text>
          <Text as="p">
            Outside of work, I’m a competitive board game player and amateur dog walker. I also enjoy a good hike and the World Series.
          </Text>
          <Text as="p">
            If you’re looking to integrate the latest technology into your marketing mix, I’d love to hear from you.
          </Text>
        </Box>
        {/*End Bio*/}
      </Container>
    </Box>
  </Layout>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        portrait: file(relativePath: { eq: "portrait.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    //  eslint-disable-next-line
    render={data => (
      <IndexPage data={data}/>
    )}
  />
)
