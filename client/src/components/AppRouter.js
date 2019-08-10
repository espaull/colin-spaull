import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import AddUserForm from './AddUserForm';
import RemoveUser from './RemoveUser';
import Grid from './Grid';
import AnimationTests from './AnimationTests/AnimationTests';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <List>
            <ListItem>
              <NavLink to="/addUser/">Add</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/removeUser/">Remove</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/grid/">Grid</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/animations/">Animations</NavLink>
            </ListItem>
          </List>
        </nav>

        <Route path="/addUser/" component={AddUserForm} />
        <Route path="/removeUser/" component={RemoveUser} />
        <Route path="/grid/" component={Grid} />
        <Route path="/animations/" component={AnimationTests} />
      </div>
    </Router>
  );
};

export default AppRouter;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: inline-block;
  padding: 0 10px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`;
