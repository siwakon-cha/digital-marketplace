import styled from 'styled-components';

export const BlueGradientBox = styled.div`
  padding: 0.75rem;
  background: radial-gradient(
    180.75% 212.2% at 21.8% 16.07%,
    #7effe8 10%,
    #8b78ff 39.06%,
    #a539ff 82.29%
  );
  width: 100%;
  height: 153px;
  cursor: pointer;
`;
export const IndexBox = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(100px);
  width: 100%;
  height: 153px;
  padding: 0.75rem;
`;

export const NumberCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  width: 100%;
  height: 509px;
`;
export const FeaturesCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  padding: 0.75rem;
  width: 100%;
  height: 459px;
  border-radius: 29px;
`;
