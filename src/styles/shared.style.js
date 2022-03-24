import Button from '@mui/material/Button'
import styled from 'styled-components'

export const Text = styled.span`
  font-size: 22px;
  ${(props) => `color: ${props.text?.color}`};
  ${(props) => `font-size: ${props.text?.size}px`};

  &:hover {
    color: #e1c6f5;
  }
`

export const ConnectWallet = styled(Button)`
  background: linear-gradient(
    137.21deg,
    #55f9e0 2.2%,
    #828be7 46.07%,
    #b169f7 76.92%
  );
  border-radius: 10px;
`
