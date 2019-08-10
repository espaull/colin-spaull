import React, { useState } from 'react';
import styled from 'styled-components';

import Accordion from './Accordion';

const AnimationTests = () => {
  const [allOpen, setAllOpen] = useState(false);

  const accordions = [
    { title: 'Foo', content: 'Bar' },
    { title: 'Hoo', content: 'Har' },
  ];

  const toggleAll = () => {
    setAllOpen(!allOpen);
  };

  return (
    <>
      <Header onClick={toggleAll}>
        <Name>Open all</Name>
      </Header>
      {accordions.map(({ title, content }) => (
        <Accordion
          key={title}
          title={title}
          content={content}
          shouldBeOpen={allOpen}
        />
      ))}
    </>
  );
};

export default AnimationTests;

const Header = styled.div`
  width: 100%;
  background-color: #222;
  border-radius: 5px;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Name = styled.p`
  color: #fff;
  padding: 15px 30px;
  margin: 0;
  font-weight: 700;
`;
