import React, { useState } from 'react';
import CompA from './Components/CompA';
import CompB from './Components/CompB';
import CompC from './Components/CompC';
import CompD from './Components/CompD';

const App = () => {
  const a =10; //props
  //state
 const[value, setValue]=useState(0);

 //component c example
 let arr = [1,2,3,4,5]
 const[arrValue,setArrValue]=useState(arr)

 //array of objects
 let data = [
  { id: 1, name: "rupan", age: 3 },
  { id: 2, name: "John", age: 4 },
  { id: 3, name: "Doe", age: 6 },
];
const[person, setPerson]=useState(data)
  return (
    <div>
      <h1>Hello World</h1>
      {/* <h2>The value of a from props is :{a} </h2>
      <h2>The value of a from state is :{value}</h2>
      <CompA  a={a} />
      <CompB setValue={setValue} value={value}/> */}
      {/* <CompC setArrValue={setArrValue} arrValue={arrValue} /> */}
      <CompD setPerson={setPerson} person={person} />
    </div>
  );
};

export default App;