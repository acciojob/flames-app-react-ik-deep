import React, { useState } from 'react';

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [relationship, setRelationship] = useState('');

  const calculateRelationship = () => {
   // Check if either of the strings is blank
   let ans=''
  if (input1 === '' || input2 === '') {
    ans = 'Please Enter valid input';
  }

  // Convert strings to arrays to manipulate characters
  let arr1 = input1.split('');
  let arr2 = input2.split('');

  // Find common characters and remove them
  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i]);
    if (index !== -1) {
      arr1.splice(i, 1);
      arr2.splice(index, 1);
      i--; // Decrement i to recheck current index due to splice
    }
  }

  // Calculate the sum of remaining string lengths and return relationship
  const sum = (arr1.length + arr2.length) % 6;
  switch (sum) {
    case 1:
      ans= 'Friends';
      break;
    case 2:
      ans = 'Love';
      break;
    case 3:
      ans = 'Affection';
      break;
    case 4:
      ans = 'Marriage';
      break;
    case 5:
      ans = 'Enemy';
      break;
    case 0:
      ans = 'Siblings';
      beforeAll;
    default:
      ans = 'Unexpected value';
  }
  setRelationship(ans);
  };

  const clearInputs = () => {
    setInput1('');
    setInput2('');
    setRelationship('');
  };

  return (
    <div>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        data-testid="input1"
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        data-testid="input2"
      />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship
      </button>
      <button onClick={clearInputs} data-testid="clear">
        Clear
      </button>
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
};

export default App;
