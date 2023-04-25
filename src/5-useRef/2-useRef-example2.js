   import React, {useEffect, useState, useRef} from "react"; 
    
    const Final = () =>{
    const [firstName, setFirstName] = useState("");
    const inputDom= useRef("");
    useEffect(() => {
        console.log(inputDom);
    });
    
    const focus = () => {
        inputDom.current.focus();
    };
    
    return (
        <div>
        <input 
           ref={inputDom}
           type="text" 
           name="firstName" 
           id="firstName" 
           onChange={(e)=> {
            setFirstName(e.target.value);
        }}
        />
        <h5>Typing:{firstName} </h5>
        <button onClick={focus}>focus</button>
        </div>
    
  );
};

export default Final;
