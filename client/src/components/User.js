import React from 'react';
import styled from 'styled-components';

const User = ({ name }) => {
  return <Name>{name}</Name>;
};

export default User;

const Name = styled.h3`
  display: inline-block;
`;
