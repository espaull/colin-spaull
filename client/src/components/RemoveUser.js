import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import User from './User';

const RemoveUser = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get('/api/users/');
      console.log(result);
      setUsers(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async id => {
    try {
      const result = await axios.delete(`/api/users/${id}`);
      console.log('Result', result);
      await fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <List>
        {users &&
          users.map(u => {
            return (
              <ListItem key={u._id}>
                <User name={u.name} />
                <DeleteButton onClick={() => deleteUser(u._id)} />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};

export default RemoveUser;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 0;
  top: 52%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
  width: 28px;
  height: 28px;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;
