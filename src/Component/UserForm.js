import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const UserForm = ({ setUserData, setCurrentTab }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName !== '' && lastName !== '') {
      setUserData({
        firstName: firstName,
        lastName: lastName,
      });
      setCurrentTab('Form3');
    }
  };
  return (
    <>
      <div className="userForm">
        <form onSubmit={handleSubmit} className="p-3">
          <FloatingLabel controlId="floatingInputGrid" label="First Name">
            <Form.Control
              required
              type="text"
              placeholder="enter firtsName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputGrid"
            label="Last Name"
            className="mt-2">
            <Form.Control
              required
              type="text"
              placeholder="enter lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </FloatingLabel>
          <Button
            variant="primary"
            type="submit"
            className="mt-2"
            disabled={firstName === '' && lastName === ''}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};
export default UserForm;
