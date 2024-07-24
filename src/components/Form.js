import React, { useState } from 'react'

function Form() {
    let [formInput, setFormInput] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        successMessage: '',
    });
    let [formError, setFormError] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    let handleUserInput = (name,value) =>
    {
        setFormInput({
            ...formInput,
            [name]: value,
        });
    };
    let Validaion = (event) => {
        event.preventDefault();
        let inputError = {
            email:'',
            password:'',
            confirmPassword: '',
        };
        if(!formInput.email && !formInput.password)
        {
            setFormError({
                ...inputError,
                email:"Enter email",
                password:"Enter password",
            });
            return
        }
        if(!formInput.email)
        {
            setFormError({
                ...inputError,
                email:"Enter email",
            });
            return
        }
        if(!formInput.password)
        {
            setFormError({
                ...inputError,
                password:"Password should not be empty",
            });
            return
        }
        if(!formInput.confirmPassword)
        {
            setFormError({
                ...inputError,
                confirmPassword:"Confirm Password should not be empty",
            });
            return
        }
        if(formInput.confirmPassword !== formInput.password)
        {
            setFormError({
                ...inputError,
                confirmpassword:"Password and confirm password should be match",
            });
            return
        }
        setFormError(inputError);
            setFormInput((prevState) =>({
                ...prevState,
                successMessage:"valid",
            }));
    }
  return (
    <div className='container'>
      <h4 className='one'>Form</h4>
      <form onSubmit={Validaion}>
        <div>
            <label>Email: </label><br></br>
            <input type="text"
              value={formInput.email}
              onChange={({target}) => {
                handleUserInput(target.name, target.value);
              }}
              name="email"
              placeholder='Enter email'/>
              <p>{formError.email}</p>
        </div>
        <div>
            <label>Password: </label>
            <input type="password"
              value={formInput.password}
              onChange={({target}) => {
                handleUserInput(target.name, target.value);
              }}
              name="password"
              placeholder='Enter password'/>
              <p>{formError.password}</p>
        </div>
        <div>
            <label>confirmPassword: </label>
            <input type="password"
              value={formInput.confirmPassword}
              onChange={({target}) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmPassword"
              placeholder='Enter confirm password'/>
              <p>{formError.confirmPassword}</p>
        </div>
        <p>{formInput.successMessage}</p>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Form
