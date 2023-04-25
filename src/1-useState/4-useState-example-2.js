import React, { useState } from "react";

const Index = () =>{

    const [firstName, setFirstName] = useState("enter name");
    const [email, setEmail] = useState("email@email");
    const [password, setPassword] = useState("msnkjs2");

    // const changeFirstName = (e) => {
    //     console.log(e.target.value);
    //     setFirstName(e.target.value);
    // };
    // const changeEmail = (e) => {
    //     setEmail(e.target.value);
    // };
    // const changePassword = (e) => {
    //     setPassword(e.target.value);
    // };

    // const handleInputChange = (e, name) => {
    //       console.log(e.target.value, name);
    //       if (name === "firstName") {
    //         setFirstName(e.target.value);
    //       }else if (name == "email"){
    //         setEmail(e.target.value);
    //       }else if (name =="password"){
    //         setPassword(e.target.value);
    //       }
    // };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        let userObj = {
            firstName : firstName,
            email : email,
            password : password,
        };
        console.log(userObj);
    };

    return(
        <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="firstname"  id="firstname"  value={firstName} placeholder="enter your name" onChange={(e) => setFirstName(e.target.value)} />

        <input type="email" name="email"  id="email" value={email} placeholder="enter your email" onChange={(e) => setEmail(e.target.value)}/>

        <input type="password" name="password"  id="password" value={password} placeholder="enter your password"  onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit"> submit</button>
        </form>
        </div>
    );
    
}



export default Index;