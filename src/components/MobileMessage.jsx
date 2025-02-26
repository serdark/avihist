import React from 'react';
import styled from 'styled-components';

const MobileWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

const Message = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
`;

const SubMessage = styled.p`
  font-size: 16px;
  color: #666;
`;

const MobileMessage = () => {
  return (
    <MobileWrapper>
      <Message>Mobile Version Not Available</Message>
      <SubMessage>
        Please access this application from a desktop or laptop computer for the best experience.
      </SubMessage>
    </MobileWrapper>
  );
};

export default MobileMessage; 