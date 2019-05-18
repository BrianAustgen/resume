import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'

import theme from './theme'
import GlobalStyle from './global'
import Header from './header'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <div>
          <Normalize />
          <GlobalStyle />
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <footer>
            © {new Date().getFullYear()}
          </footer>
        </div>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
