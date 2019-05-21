import React from "react"

import Box from '../components/box'
import Container from '../components/container'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio"/>
    // Start Portfolio Introduction
    <Box as="section" my={['major.4']}>
      <Container>
        <h1>Portfolio</h1>
        <p>Below is a collection of work I've </p>
      </Container>
    </Box>
    // End Portfolio Introduction
    // Start Unlimited Summer
    <Box as="section" my={['major.4']}>
      <Container>
      </Container>
    </Box>
    // End Unlimited Summer
  </Layout>
)

export default SecondPage
