import React from "react"

import Box from '../components/box'
import Container from '../components/container'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio"/>
    <Box as="section" my={['major.4']}>
      <Container>
        <h1>Portfolio</h1>
        <p>Welcome to page 2</p>
      </Container>
    </Box>

  </Layout>
)

export default SecondPage
