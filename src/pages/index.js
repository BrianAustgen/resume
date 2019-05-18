import React from "react"

import Link from '../components/link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Heading from '../components/heading'
import Box from '../components/box'
import Container from '../components/container'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Box as="section" my={['major.4']}>
      <Container>
        <Heading color="DB" as="h1" variant="800">
          <Link to="/page-2/">Hi people</Link>
        </Heading>
        <Heading as="h2" variant="700">
          <Link to="/page-2/">Hi people</Link>
        </Heading>
        <Heading as="h3" variant="600">
          <Link to="/page-2/">Hi people</Link>
        </Heading>
        <Heading as="h4" variant="500">
          <Link to="/page-2/">Hi people</Link>
        </Heading>
        <Heading as="h5" variant="400">
          <Link to="/page-2/">Hi people</Link>
        </Heading>
        <Heading as="h6" variant="300">
          <Link to="/page-2/">Hi people</Link>
        </Heading>
        <Heading as="h6" variant="200">
          <Link to="/page-2/">Hi people</Link>
        </Heading>
        <Heading as="h6" variant="100">
          <Link to="/page-2/">Hi people</Link>
        </Heading>
        <p><strong>Welcome to your new Gatsby site.</strong></p>
        <p>Now go build something great.</p>
        <Button href="/page-2/" size="medium" m={'major.2'}>I am a button</Button>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
