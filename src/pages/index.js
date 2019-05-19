import React from "react"

import Link from '../components/link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Heading from '../components/heading'
import Box from '../components/box'
import Container from '../components/container'
import Text from '../components/text'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Brian Austgen`, `portfolio`, `resume`]} />
    <Box as="section" my={['major.4']}>
      <Container>
        <Heading color="DB" as="h1" variant="800">
          <Link to="/portfolio/">Hi people</Link>
        </Heading>
        <Heading as="h2" variant="700">
          Bio
        </Heading>
        <Box maxWidth={[0]} as="section" my={['major.4']}>
          <Text as="p" >
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
        <Heading as="h3" variant="600">
          <Link to="/portfolio/">Hi people</Link>
        </Heading>
        <Heading as="h4" variant="500">
          <Link to="/portfolio/">Hi people</Link>
        </Heading>
        <Heading as="h5" variant="400">
          <Link to="/portfolio/">Hi people</Link>
        </Heading>
        <Heading as="h6" variant="300">
          <Link to="/portfolio/">Hi people</Link>
        </Heading>
        <Heading as="h6" variant="200">
          <Link to="/portfolio/">Hi people</Link>
        </Heading>
        <Heading as="h6" variant="100">
          <Link to="/portfolio/">Hi people</Link>
        </Heading>
        <p><strong>Welcome to your new Gatsby site.</strong></p>
        <p>Now go build something great.</p>
        <Button href="/portfolio/" size="medium" m={'major.2'}>I am a button</Button>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
