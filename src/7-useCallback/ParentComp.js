import React, { useState, useCallback } from 'react';
import Button from './Button';
import Title from './Title';
import Count from './Count';

const ParentComp = () => {

    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(7000);

    const incrementAge =useCallback(() => {
        setAge(age+1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    },[salary]);

    return (
    <div>
    <Title/>
    <Count text={"age"} number ={age} />
    <br/>
    <Button clickHandler={incrementAge}>incrementAge</Button>
    <br/>
    <Count text={"Salary"} number ={salary} />
    <br/>
    <Button clickHandler={incrementSalary}>incrementSalary</Button>
    </div>
  );
};

export default ParentComp;