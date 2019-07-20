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
import List from '../components/list'

import ResumeExperience from '../content/experience'
import Skills from '../content/skills'


const marketingSkills = Skills.marketing
const developmentSkills = Skills.development

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`Brian Austgen`, `portfolio`, `resume`]} />
    {/* Start Header */}
    <Box as="section" pt={[8]} bg='OW' pb={[7]}>
      <Container maxWidth={[4]} px={[0]} mx={[6]} >
        <Box>
          <Flex alignItems="center" justifyContent="space-between" bg=''>
            <Box maxWidth={[0]} width='70%' >
              <Heading as="h5" pl='4px' variant="3001">
                MARKETER & WEB DEVELOPER
              </Heading>
              <Heading color='DB' as="h1" variant="800">
                BRIAN AUSTGEN
              </Heading>
              <Button to='/portfolio' mx={0} mt={[6]}>
                View Portfolio
              </Button>
            </Box>
            <Box width="30%">
              <Img fluid={data.portrait.childImageSharp.fluid}/>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
    <Box as="section" mb={[6]} mt={[7]} mx={[6]}>
      <Container maxWidth={[4]} px={[0]} >
        {/* End Header */}
        {/* Start Resume & Sidebar */}
        <Flex my={[8]} flexDirection={['column','row']}>
          <Flex width={['100%','70%','70%']} order={['1','1','1']}>
            <Box pr={['0', 'bio']}>
              {/*Start Bio*/}
              <Box maxWidth={[3]} pb={5}>
                <Heading as="h2" variant="600">
                  Hello there,
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
              <Box py={5}>
                <Heading as='h2' variant='600'>
                  Experience
                </Heading>
                {ResumeExperience.map(
                  (experience) =>
                  <ResumeItem content={experience}/>
                )}
              </Box>
            </Box>
          </Flex>
          <Flex borderLeft="skills" width={['100%','30%','30%']} order={['2','2','2']}>
            <Box>
              <Heading pb='5' as='h2' variant="600" textAlign="center">
                Skills
              </Heading>
              <Flex position="relative" alignItems="center" justifyContent="space-between" minHeight="200px">
                <Text pt={1} textStyle="vertical" textAlign="center">
                  Marketing
                </Text>
                <List content={marketingSkills}/>
              </Flex>
              <Flex position="relative" alignItems="center" justifyContent="space-between" mt={[7]} minHeight="200px">
                <Text pt={1} textStyle="vertical" textAlign="center" >
                  Development
                </Text>
                <List content={developmentSkills}/>

            </Flex>
            </Box>
          </Flex>
        </Flex>
        {/* End Resume & Sidebar */}

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
