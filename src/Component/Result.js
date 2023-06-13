import React from 'react';
const Result = ({ form2Result, form1Result }) => {
  return (
    <>
      <div className="p-4">
        <div>
          <h1 className="text-center">Form 1 Result</h1>
          {form1Result === null ? (
            <h1>Enter Values in Form 1 to see result</h1>
          ) : (
            <h1>{`Pivot Number is ${form1Result}`}</h1>
          )}
        </div>
        <div>
          <h1 className="text-center">Form 2 Result</h1>
          <h1>{`First Name :-  ${form2Result.firstName}`}</h1>
          <h1>{`Last Name :- ${form2Result.lastName}`}</h1>
        </div>
      </div>
    </>
  );
};
export default Result;
