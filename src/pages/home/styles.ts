import { Heading, Text, styled } from '@ignite-ui/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  marginLeft: 'auto',

  '@media(max-width: 600px)': {
    flexDirection: 'column',
    padding: '$6',
  },
})

export const Hero = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 480,
  margin: '0 auto',
  gap: '$2',

  [` > ${Heading}`]: {
    color: '$gray100',

    '@media(max-width: 600px)': {
      fontSize: '$5xl',
    },
  },

  [` > ${Text}`]: {
    color: '$gray200',
    marginTop: '$2',
  },
})

export const Preview = styled('div', {
  paddingRight: '$10',
  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  },
})
