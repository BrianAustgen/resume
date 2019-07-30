const createMediaQuery = n => `@media screen and (min-width:${n})`

const breakpoints = [
  '40em',
  '64em',
  '80em',
  '100em',
]

const mediaQueries = breakpoints.map(createMediaQuery)


const sizes = [
  '24rem',
  '32rem',
  '40rem',
  '56rem',
  '64rem',
  '80rem',
  '100rem',
]

// const minHeights = [
//   '0px',
//   '8px',
//   '16px',
//   '32px',
//   '64px',
//   '128px',
//   '256px',
//   '512px',
// ]

const space = [
    0,
    4,
    8,
    12,
    16,
    24,
    32,
    64,
    128,
    256,
    512
]

space.bio = 96;

const fonts = {
  sans: `'Barlow',
         -apple-system, BlinkMacSystemFont,
         'avenir next', avenir,
         'helvetica neue', helvetica,
         ubuntu,
         roboto, noto,
         'segoe ui', arial,
         sans-serif;`,
}

const fontWeights = [
  300,
  500,
]

const fontSizes = [
  '.75rem',
  '.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '3rem',
  '4rem'
]

const lineHeight = [
  1,
  1.25,
  1.5
]

const letterSpacing = {
  tight:  '-0.025em',
  normal: '-0.01em',
  loose:  '0.05em'
}

const radii = [
  0,
  2,
  4,
  8
]

const colors = {

  // Neutral
  N0:   '#ffffff',
  N5:   '#fafafb',
  N10:  '#eeeff1',
  N20:  '#dcdde0',
  N30:  '#c2c4c8',
  N40:  '#a1a3a8',
  N50:  '#7d8085',
  N60:  '#5b5e64',
  N70:  '#41444a',
  N80:  '#2f3237',
  N90:  '#25282d',
  N100: '#202329',

  // Green
  G5:   '#e2fff3',
  G10:  '#a8fad8',
  G20:  '#6ef0ba',
  G30:  '#3cdd9a',
  G40:  '#17c37b',
  G50:  '#00a15e',
  G60:  '#007e4a',
  G70:  '#006139',
  G80:  '#004d2d',
  G90:  '#003d21',
  G100: '#00331d',

  // Blues
  LB: '#3E92CC',
  NB: '#14486D',
  DB: '#050F16',
  // Lights
  OW: '#EAF2F7',
  DW: '#D4D8DB',
  FG: '#d8d8d8'
}

colors.inherit = 'inherit';

// borders
const borders = [
  `0`,
  `1px solid ${colors.N20}`,
  `2px solid ${colors.N20}`,
  `3px solid ${colors.LB}`,
  `3px solid ${colors.NB}`
]

borders.skills = `2px solid ${colors.LB}`

borders.random = [
  `3px solid ${colors.LB}`,
  `3px solid ${colors.NB}`
]

// box shadows
const shadows = [
  `0`,
  `0 8px 16px -8px rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 8px 16px -8px rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 8px 16px -8px rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 8px 16px -8px rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
]

// animation duration
const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '450ms',
  slowest: '600ms'
}

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)'
const ease = 'cubic-bezier(0.25, 1, 0.25, 1)'

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn,
  ease
}

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`
}

const headings = {
  800: {
    fontSize: `${fontSizes[7]}`,
    fontWeight: 500,
    letterSpacing: letterSpacing.tight,
  },
  8001: {
    fontSize: `${fontSizes[7]}`,
    fontWeight: 300,
    letterSpacing: letterSpacing.tight,
  },
  700: {
    fontSize: `${fontSizes[6]}`,
    fontWeight: 500,
    letterSpacing: letterSpacing.tight,
  },
  7001: {
    fontSize: `${fontSizes[6]}`,
    fontWeight: 300,
    letterSpacing: letterSpacing.tight,
  },
  600: {
    fontSize: `${fontSizes[5]}`,
    fontWeight: 500,
    letterSpacing: letterSpacing.tight,
  },
  6001: {
    fontSize: `${fontSizes[5]}`,
    fontWeight: 300,
    letterSpacing: letterSpacing.tight,
  },
  500: {
    fontSize: `${fontSizes[4]}`,
    fontWeight: 500,
    letterSpacing: letterSpacing.tight,
  },
  5001: {
    fontSize: `${fontSizes[4]}`,
    fontWeight: 300,
    letterSpacing: letterSpacing.tight,
  },
  400: {
    fontSize: `${fontSizes[3]}`,
    fontWeight: 500,
    letterSpacing: letterSpacing.tight,
  },
  300: {
    fontSize: `${fontSizes[2]}`,
    fontWeight: 500,
    letterSpacing: letterSpacing.tight,
  },
  3001: {
    fontSize: `${fontSizes[2]}`,
    fontWeight: 300,
    letterSpacing: letterSpacing.tight,
  },
  200: {
    fontSize: `${fontSizes[1]}`,
    fontWeight: 500,
    letterSpacing: letterSpacing.loose,
    textTransform: 'uppercase'
  },
  100: {
    color: colors.N60,
    fontSize: `${fontSizes[0]}`,
    fontWeight: 500,
    letterSpacing: letterSpacing.loose,
    textTransform: 'uppercase'
  }
}

headings.company = {
  fontSize: `${fontSizes[2]}`,
  fontWeight: 300,
  letterSpacing: letterSpacing.tight,
  textTransform: 'uppercase',
}

const textStyles = {
  vertical: {
    color: colors.LB,
    transform: 'rotate(270deg)',
    transformOrigin: 'left top 0',
    textTransform: 'uppercase',
    position: 'absolute',
    textAlign: 'center',
    top: '65%',
  },
}

const buttons = {
  appearance: {
    primary: {
      background: colors.G40,
      color: colors.N0,
      '&:hover, &:focus': {
        background: colors.G50
      },
      '&:disabled': {
        background: colors.N20,
        color: colors.N40
      }
    },
    outline: {
      background: 'none',
      boxShadow: `inset 0 0 0 1px ${colors.G40}`,
      color: colors.N100,
      '&:hover': {
        boxShadow: `inset 0 0 0 2px ${colors.G40}`,
      },
      '&:active, &:focus': {
        background: colors.G40,
        color: colors.N0
      },
      '&:disabled': {
        boxShadow: `inset 0 0 0 1px ${colors.N30}`,
        color: colors.N40
      }
    }
  },
  size: {
    small: {
      fontSize: `${fontSizes[0]}`,
      padding: `${space[3]}px ${space[5]}px`
    },
    medium: {
      fontSize: `${fontSizes[1]}`,
      padding: `${space[7]}px ${space[7]}px`
    },
    large: {
      fontSize: `${fontSizes[1]}`,
      padding: `${space[5]}px ${space[7]}px`
    }
  }
}

const theme = {
  breakpoints,
  mediaQueries,
  sizes,
  space,
  fonts,
  fontSizes,
  lineHeight,
  letterSpacing,
  radii,
  colors,
  borders,
  shadows,
  duration,
  timingFunctions,
  transitionDelays,
  headings,
  buttons,
  fontWeights,
  textStyles,
}

export default theme
