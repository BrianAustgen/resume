import React from "react"
import Img from 'gatsby-image'

import Box from '../components/box'
import Container from '../components/container'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading"
import Text from "../components/text"
import Button from "../components/button.js"
import Flex from "../components/flex"
import Piece from '../components/portfolio/piece.js'
import portfolioPieces from '../portfolio/pieces.js'

const Portfolio = ({data}) => (
  <Layout>
    <SEO title="Portfolio"/>
    {/*Start Portfolio Introduction*/}
    <Box as="section" maxWidth={[4]} mx="auto" mb={[6]} mt={[8]}>
      <Container>
        <Heading as="h1" variant="700">
          Portfolio
        </Heading>
      </Container>
    </Box>
    {/*End Portfolio Introduction*/}
    {portfolioPieces.map(
      (piece) =>
        <Piece content={piece}/>
    )}

  </Layout>
)

export default Portfolio
