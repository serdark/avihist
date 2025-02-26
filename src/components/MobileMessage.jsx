import React from 'react';
import styled from 'styled-components';

const MobileWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
  background-color: #000000;
  font-family: 'B612 Mono', monospace;
  color: #bfb400;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: normal;
  margin: 0;
  color: rgb(255, 255, 255);
`;

const Message = styled.div`
  font-size: 20px;
  line-height: 1.5;
  max-width: 80%;

  a {
    color:rgb(255, 255, 255);
    text-decoration: underline;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Footer = styled.div`
  font-size: 14px;
  a {
    color: #bfb400;
    text-decoration: underline;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MobileMessage = () => {
  return (
    <MobileWrapper>
      <Title>Turkish Aviation Industry History Matrix</Title>
      <Message>
        Sorry, it's not compatible with mobile phone screens. Please access from desktop or laptop screen. But you can still see a short description of it{' '}
        <a href="https://aserdark.com/tr-avihist" target="_blank" rel="noopener noreferrer">
          by clicking here
        </a>
        .
      </Message>
      <Footer>
        <a href="https://aserdark.com" target="_blank" rel="noopener noreferrer">
          aserdark.com
        </a>
      </Footer>
    </MobileWrapper>
  );
};

export default MobileMessage; 