import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const clearFields = () => {
    setName('');
    setPassword('');
  };

  const handleUpdate = (evt, updateState) => {
    updateState(evt.target.value);
  };

  const addUser = async evt => {
    evt.preventDefault();

    try {
      const userInfo = {
        name,
        password,
      };

      await axios.post('/api/users/', userInfo);

      clearFields();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form onSubmit={addUser}>
        <Label>
          Username
          <Input
            type="text"
            value={name}
            onChange={evt => handleUpdate(evt, setName)}
          />
        </Label>
        <br />
        <Label>
          Password
          <Input
            type="password"
            value={password}
            onChange={evt => handleUpdate(evt, setPassword)}
          />
        </Label>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export default AddUserForm;

const Form = styled.form`
  width: 300px;
`;

const Label = styled.label`
  display: block;
  text-align: left;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 3px;
`;
