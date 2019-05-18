import React from "react"

import Link from '../components/link'
import Layout from "../components/layout"
import Image from "../components/image"
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
        <Heading as="h1" variant="800">
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
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">I am a link</Link>
        <Button appearance="outline" size="medium" m={'major.2'}>I am a button</Button>
        <Button appearance="primary" m={'major.2'}>I am a button</Button>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
