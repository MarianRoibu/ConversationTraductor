import React from 'react';
import Navbar from '../layout/navbarLayout';
import styled from 'styled-components';


const Text = styled.h1`
  position: absolute;
  top: 40%;
  left: 40%;
`

function Conversation() {
  return (
    <div>
        <Navbar />
      <Text>Still in progress...</Text>
    </div>
  );
}

export default Conversation;