import styled from 'styled-components'

export const BackgroundImg = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
