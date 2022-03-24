import AppBar from '@mui/material/AppBar'
import styled from 'styled-components'

export const HeaderEx = styled(AppBar)`
  width: 100%;
  background: linear-gradient(
    180deg,
    #e8e4fb 0%,
    rgba(232, 228, 251, 1) 16.81%,
    #e8e4fb 79.17%
  );
  opacity: 0.95;
  padding: 0 2rem;
  .MuiToolbar-root {
    min-height: 50px !important;
  }
`
