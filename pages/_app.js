import React from 'react'
import '../styles/globals.css'
import { createGlobalStyle } from 'styled-components'
import CssBaseline from '@mui/material/CssBaseline'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Marketplace</title>
      </Head>
      <GlobalStyle />
      <CssBaseline />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
