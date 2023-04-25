import React, { useEffect, useState , useRef} from 'react';

const Final = () => {
    const [firstName, setFirstName] = useState("");
    const renderCount= useRef(1);
    useEffect(() => {
        renderCount.current = renderCount.current+1;
    });
    
    
    return (
        <div>
        <input 
           type="text" 
           name="firstName" 
           id="firstName" 
           onChange={(e)=> {
            setFirstName(e.target.value);
        }}
        />
        <h5>Typing:{firstName} </h5>
        <h5>component rendered{renderCount.current} times </h5>
        </div>
    
  );
};

export default Final;