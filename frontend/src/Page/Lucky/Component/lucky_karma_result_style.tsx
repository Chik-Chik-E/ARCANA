import styled from 'styled-components';

export const Body = styled.div`
  height: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  padding: 50px;
`;

export const CardFront = styled.img`
  width: auto;
  max-height: 350px;
`;

export const Button = styled.span`
  width: 32px;
  height: 32px;
  cursor: pointer;
  > img {
    width: 32px;
    height: 32px;
  }
`;