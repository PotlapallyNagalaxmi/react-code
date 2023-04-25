import React, {useState} from "react";

const Index = () => {
  const intialArray = [
        {
          id:"sfhhghdyhnn",
          firstName:"emma",
          lastName:"watson",
          age:22,
        },
        {
          id:"nbkhcguehfljm",
          firstName:"Naga",
          lastName:"Laxmi",
          age:28,
        }
  ]

  const [data,setData] = useState(intialArray)
  console.log(data);

  const handleDelete = (comeingId) => {
   const filterData = data.filter((eachItem) => {
    return eachItem.id !== comeingId
   })
   setData(filterData);
  };
  return (
    <div>
       <ul>
         {
          data.map ((eachItem, index) => {
         const {firstName,lastName, age, id} = eachItem;
         return (
          <li key={index}>
          <div>firstName: {firstName} </div>
          <div>lastName: {lastName} </div>
          <div>age: {age} </div>
          <button onClick={() => handleDelete(id)}> delete me</button>
          </li>
         );
       })}
    </ul>
       
    </div>
  );
};

export default Index;