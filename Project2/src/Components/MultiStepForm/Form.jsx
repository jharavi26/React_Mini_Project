import React, { useState } from 'react';
import "./Form.css" 


function Form() {
  const data = [{
    id : "name",
    label : "Name",
    type : "text",
    buttonName  : "Next",
    placeholder : "Enter Your Name"
  },
  {
    id : "email",
    label : "Email",
    type : "email",
    buttonName  : "Next",
    placeholder : "Enter Email"
  },
  {
    id : "dob",
    label : "DOB",
    type : "date",
    buttonName  : "Next",
    placeholder : "Enter Date of Birth"
  },
  {
  id : "password",
  label : "Password",
  type : "password",
  buttonName  : "Submit",
  placeholder : "Enter Your Password"
  }
]

const [index, setIndex] = useState(0);
const [forms, setForms ] = useState(data);

const handleSubmit = (e)=>{
  e.preventDefault();
  if(index < data.length-1) 
    setIndex((id)=>id+1);
    
}


  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          {forms[index].label}
        </label>
        <input type={forms[index].type} placeholder={forms[index].placeholder}></input>
        <button>{forms[index].buttonName}</button>

      </form>

      
    </div>
  )
}

export default Form
