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
const [formData, setFormData] = useState({
  name : "",
  email : "",
  dob : "",
  password : ""

})
const [isFormSubmitted, setIsFormSubmitted] = useState(false);

const handleSubmit = (e)=>{
  e.preventDefault();
  if(index < data.length-1) 
    setIndex((id)=>id+1);  
}

const handleBack = (e)=>{
  e.preventDefault();
  setIndex((id)=>id-1);
}

const handleInputChange = (e)=>{
  const id = e.target.id ;
  const value = e.target.value ; 
  const copyFormData = {...formData};
  copyFormData[id] = value;
  setFormData(copyFormData);
}



  return (
    <div className='container'>
     { !isFormSubmitted ?  <form className='form' onSubmit={handleSubmit}>
        {
          index > 0 && <a href='/' onClick={handleBack}>Back</a>
        }
        <label>
          {forms[index].label}
        </label>
        <input 
        value = {formData[forms[index].id]}
        id = {forms[index].id} 
        onChange={handleInputChange}
        type={forms[index].type} placeholder={forms[index].placeholder}></input>
        <button>{forms[index].buttonName}</button>

      </form> :

    <div><h1>Success! </h1>
    <hr/>
    <span>Name : {formData.name}</span>
    <br/>
    <span>Name : {formData.email}</span>
    <br/>
    <span>Name : {formData.dob}</span>
    <br/>
    <span>Name : {formData.password}</span>
    <br/>
    </div>
}
    </div>
  )
}


export default Form
