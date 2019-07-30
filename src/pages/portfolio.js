import React from "react"
import Img from 'gatsby-image'

import Box from '../components/box'
import Container from '../components/container'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading"
import Text from "../components/text"
import Button from "../components/button"
import Flex from "../components/flex"
import Piece from '../components/portfolio/piece'
import LeftParagraphPiece from '../components/portfolio/leftParagraph'
import portfolioPieces from '../content/portfolio'


function PortfolioJsx(){
  return(
    portfolioPieces.map(
      (piece) => {
        if(piece.style === ''){
          return(
            <Piece key={piece.headline} content={piece}/>
          )
        } else {
          return(
            <LeftParagraphPiece key={piece.headline} content={piece}/>
          )
        }
      }
    )
)
}

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
    <PortfolioJsx/>

  </Layout>
)

export default Portfolio
