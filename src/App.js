import React, { useState } from 'react';
import UserForm from './Component/UserForm';
import DynamicForm from './Component/DynamicForm';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Result from './Component/Result';
const App = () => {
  const [currentTab, setCurrentTab] = useState('Form1');
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
  });
  const [form1Result, seForm1Result] = useState(null);
  let disabled = false;
  if (
    userData.firstName === '' &&
    userData.lastName === '' &&
    form1Result === null
  ) {
    disabled = true;
  }
  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={currentTab}
        onSelect={(tab) => setCurrentTab(tab)}
        className="mb-3">
        <Tab eventKey="Form1" title="Form 1">
          <DynamicForm
            seForm1Result={seForm1Result}
            setCurrentTab={setCurrentTab}
          />
        </Tab>
        <Tab eventKey="Form2" title="Form 2">
          <UserForm setUserData={setUserData} setCurrentTab={setCurrentTab} />
        </Tab>
        <Tab eventKey="Form3" title="Result" disabled={disabled}>
          <Result form2Result={userData} form1Result={form1Result} />
        </Tab>
      </Tabs>
    </>
  );
};
export default App;
