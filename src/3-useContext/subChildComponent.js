import React,{useContext} from 'react';
import { UserContext } from '../context/userContext';


const SubChildComponent= ({userDetails}) => {
    const data = useContext(UserContext);
    const{firstName, lastName, email} = data;
    return (
        <div>
        <h2>subChildcomponent</h2>
        <div>firstName:{firstName} </div>
        <div>lastName:{lastName} </div>
        <div>email:{email} </div>
        </div>
    );
};

export default SubChildComponent;