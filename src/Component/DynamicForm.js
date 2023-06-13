import React, { useState } from 'react';
import { findPivotIndex } from '../utils/utils';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const DynamicForm = ({ seForm1Result, setCurrentTab }) => {
  const [disable, setDisable] = useState(true);
  const [inputFiled, setInputFiled] = useState([{}]);
  const handleAddMore = (e) => {
    e.preventDefault();
    const filedToAdd = { num: '' };
    const moreFields = [...inputFiled, filedToAdd];
    setInputFiled(moreFields);
    setDisable(false);
  };

  const handleChange = (e, index) => {
    let data = [...inputFiled];
    data[index][e.target.name] = e.target.value;
    setInputFiled(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let pivotData = inputFiled.map((items) => Number(items.num));
    const result = findPivotIndex(pivotData);
    seForm1Result(result);
    setCurrentTab('Form2');
  };
  return (
    <>
      <form className="p-4">
        {inputFiled.map((item, index) => {
          return (
            <div key={index}>
              <FloatingLabel
                controlId="floatingInputGrid"
                className="mt-2"
                label={`Enter ${index + 1} Number`}>
                <Form.Control
                  type="number"
                  value={item.numberToEnter}
                  name="num"
                  onChange={(e) => handleChange(e, index)}
                />
              </FloatingLabel>
            </div>
          );
        })}
        <Button
          variant="primary"
          type="submit"
          onClick={handleAddMore}
          className="mt-3">
          Add
        </Button>
      </form>
      <div className="m-2 px-2">
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
          disabled={disable}>
          Submit
        </Button>
      </div>
    </>
  );
};
export default DynamicForm;
