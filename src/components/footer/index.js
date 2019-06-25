import React from "react"
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Heading from '../heading'
import Box from "../box"
import Text from "../text"
import Flex from '../flex'
import NavLink from '../navlink'


const Footer = ({data}) => (
  <Box as="footer" m='auto' minHeight={7} backgroundColor="NB" mt={7} mb={0}>
    <Box as="section" maxWidth={1} m='auto'>
      <Heading color={'N0'} textAlign='center' as="h1" variant='7001' py={7}>
        Contact
      </Heading>
      <Text color={'N0'} as='p' m='auto' textAlign='center'>
        "You may be right. I may be crazy. But it just may be a lunatic you're looking for."
      </Text>
      <Text mt={0} color={'N0'} as='p' m='auto' align='center' pb={6} textAlign='center'>
        - Billy Joel
      </Text>

      <Flex borderTop="1" py={4} justifyContent="space-between">
        <Flex alignItems='center' width="50%" flexDirection="row" flexWrap="wrap" pl={4} py={5}>
          <Box display='inline-block' width='32px'>
            <NavLink target="_blank" href="https://www.linkedin.com/in/brianaustgen/" fontWeight="0">
              <Img fluid={data.linkedIn.childImageSharp.fluid}/>
            </NavLink>
          </Box>
          <NavLink target="_blank" href="https://www.linkedin.com/in/brianaustgen/" fontWeight="0" pl={4} display='inline-block' color={'FG'} fontSize={[1]}>
            Brian Austgen
          </NavLink>
        </Flex>
        <Flex alignItems='center' width="50%" flexDirection="row" flexWrap="wrap" pl={4}>
            <Box display='inline-block' width='32px'>
              <NavLink href="mailto:brianaustgen@gmail.com" fontWeight="0">
                <Img fluid={data.email.childImageSharp.fluid}/>
              </NavLink>
            </Box>
            <NavLink href="mailto:brianaustgen@gmail.com" fontWeight="0" pl={4} display='inline-block' color={'FG'} fontSize={[1]}>
              brianaustgen@gmail.com
            </NavLink>
        </Flex>

      </Flex>
      <Flex justifyContent="center" pt={8} pb={6}>
        <Text color={'N40'} fontSize={[0]}>© {new Date().getFullYear()}</Text>
      </Flex>
    </Box>
  </Box>
)


export default () => (
  <StaticQuery
    query={graphql`
      query {
        email: file(relativePath: { eq: "email-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        linkedIn: file(relativePath: { eq: "linkedin-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Footer data={data}/>
    )}
  />
);
