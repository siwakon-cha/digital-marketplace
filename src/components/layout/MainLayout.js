import React from 'react'
import Header from 'components/layout/Header'
import Container from '@mui/material/Container'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container
        maxWidth="xl"
        className="min-h-screen"
        sx={{ marginTop: '70px' }}>
        {children}
      </Container>
    </div>
  )
}

export default MainLayout
