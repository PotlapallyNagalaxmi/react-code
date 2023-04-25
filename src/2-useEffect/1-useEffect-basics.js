import React,{useEffect, useState} from 'react'

const  Final = () => {

   useEffect (() => {
    console.log("hello I am coming from useEffect", count);
   }, []);

   const [ count, setCount] = useState (0);

  return (
    <div> 
    <h1>final</h1>
    <h3>{count}</h3>
    <button onClick={() =>setCount(count + 1)}>+</button>
    </div>
  )
}

export default  Final;