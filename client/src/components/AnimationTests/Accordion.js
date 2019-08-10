import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const Accordion = ({ title, content, shouldBeOpen }) => {
  const [open, setOpen] = useState(shouldBeOpen);

  const toggleContent = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(shouldBeOpen);
  }, [shouldBeOpen]);

  return (
    <AccordionContainer>
      <Header onClick={toggleContent}>
        <Name>{title}</Name>
      </Header>
      <CSSTransition
        in={open}
        timeout={250}
        classNames="ContentContainer"
        unmountOnExit>
        <ContentContainer>
          <Content>{content}</Content>
        </ContentContainer>
      </CSSTransition>
    </AccordionContainer>
  );
};

export default Accordion;

const AccordionContainer = styled.div`
  margin-bottom: 10px;
`;

const Header = styled.div`
  width: 100%;
  background-color: #222;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
`;

const Name = styled.p`
  color: #fff;
  padding: 15px 30px;
  margin: 0;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 0 0 5px 5px;
  padding: 0 15px;
  overflow: hidden;

  &.ContentContainer-enter {
    height: 0;
  }

  &.ContentContainer-enter-active {
    height: 77px;
    transition: height 250ms ease-in-out;
  }

  &.ContentContainer-exit {
    height: 77px;
  }

  &.ContentContainer-exit-active {
    height: 0;
    transition: height 250ms ease-in-out;
  }
`;

const Content = styled.p``;
