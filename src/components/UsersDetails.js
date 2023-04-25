import React from 'react';
import { useParams } from "react-router-dom";
import usersData from './usersData';

function UsersDetails() {
   const {userId} = useParams();
   
   const UsersDetailsData = usersData.find((eachUser) => eachUser.id == userId);
   

  return (
    <div>
    <h1>UsersDetails</h1>

    <h2>{UsersDetailsData.name}</h2>
    <h3>{UsersDetailsData.email}</h3>
    <h3>{UsersDetailsData.username}</h3>
    <p>{UsersDetailsData.phone}</p>
    </div>
  );
}

export default UsersDetails;