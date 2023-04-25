import React , { useState } from 'react';
import ChildComponent from './childComponent';

const  ParentComponent= () => {

 
  return (
    <div>
    <h1>useContext</h1>
    <ChildComponent  />

    </div>
  );
};



export default ParentComponent;