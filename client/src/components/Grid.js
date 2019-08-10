import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const Grid = () => {
  const [showGrid, setShowGrid] = useState(true);
  const items = [...Array(10).keys()].slice(1);

  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  return (
    <>
      <Header onClick={toggleGrid} showGrid={showGrid}>
        <Name>Click Me</Name>
      </Header>
      <CSSTransition
        in={showGrid}
        timeout={250}
        classNames="GridContainer"
        unmountOnExit>
        <GridContainer>
          {items.map(i => (
            <GridItem key={i}>
              <span>{i}</span>
            </GridItem>
          ))}
        </GridContainer>
      </CSSTransition>
    </>
  );
};

export default Grid;

const Header = styled.div`
  width: 100%;
  background-color: #222;
  border-radius: ${({ showGrid }) => (showGrid ? '3px 3px 0 0' : '3px')};
  cursor: pointer;
`;

const Name = styled.p`
  color: #fff;
  padding: 15px 30px;
  margin: 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid lightgrey;
  border-radius: 0 0 3px 3px;
  overflow: hidden;

  &.GridContainer-enter {
    height: 0;
  }

  &.GridContainer-enter-active {
    height: 244px;
    transition: height 250ms ease-in-out;
  }

  &.GridContainer-exit {
    height: 244px;
  }

  &.GridContainer-exit-active {
    height: 0;
    transition: height 250ms ease-in-out;
  }
`;

const GridItem = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;

  &:nth-child(n + 7) {
    border-bottom: 0;
  }

  &:nth-child(3n) {
    border-right: 0;
  }
`;

const Length = styled.span``;
