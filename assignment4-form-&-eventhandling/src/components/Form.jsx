import React from "react";
import '../css/Form.css';
import Input from './Input';
import data from '../jsonData/data.json';

const Form = () => {
  return(
    <form className="container">
      { data.map( value => <Input id={value.id} name={value.name} type={value.type} labelText={value.labelText} /> ) }
    </form>
  );
}

export default Form 