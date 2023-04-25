import React, {useState} from 'react';
import enhancedCounter from './enhancedCounter';

const ClickCounter = (props) => {
  return (
    <button onClick={props.incrementCount}>counter clicked {props.count} time </button>
  );
};

export default enhancedCounter(ClickCounter);