import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from '../components/heading'
import Box from '../components/box'
import Container from '../components/container'
import Text from '../components/text'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Brian Austgen`, `portfolio`, `resume`]} />
    <Box as="section" mb={[6]} mt={[8]}>
      <Container>
        <Box maxWidth={0}>
          <Heading as="h1" variant="700">
            MARKETER & WEB DEVELOPER
          </Heading>
        </Box>
      {/*Start Bio*/}
        <Box m="auto" maxWidth={[0]} as="section" my={[7]}>
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

export default IndexPage
