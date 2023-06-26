import React, { useEffect, useState } from 'react';
import './formUi.css';
import logo from '../assests/Group 3.png';
import image from '../assests/pngwing 1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckSquare} from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'



function FormUi() {
const initialValues = { fullname:'', email: '', password: '' };
const [formValues, setFormValues] = useState(initialValues);
const [formErros, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange= (e) => {
  const { name, value } = e.target;
setFormValues({...formValues, [name]: value});
console.log(formValues)
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

useEffect(() => {
  console.log(formErros);
  if (Object.keys(formErros).length === 0 && isSubmit) {
    console.log(formValues);
  }
}, [formErros, formValues, isSubmit ])

const validate = (values) => {
  const errors = {}
  const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
  if(!values.fullname) {
    errors.fullname = 'fullname is required!';
  }
  if(!values.email) {
    errors.email = 'email is required!';
  } else if (!regex.test(values.email)) {
    errors.email = 'This is not a valid email format!';
  }
  if(!values.password) {
    errors.password = 'password is required!';
  } else if (values.password.length < 5 ) {
    errors.password = 'Password must be more than 5 characters!';
  } else if (values.password.length > 10 ) {
    errors.password = 'Password cannot exceed more than 10 characters';
  }
  return errors;
};

  return (
    <div>
        <div className='main-container'>
          {Object.keys(formErros).length === 0 && isSubmit ? (<div className='message-success'>Signed in Successfully <FontAwesomeIcon icon={faCheckSquare} /> </div>) 
          : (<pre> {JSON.stringify(formValues, undefined, 2)} </pre>
          ) }
          <div className='container'>
          <div className='left-con'>
          <img src={logo} className='logo' alt='logo' />
            <h2>Defy the past <br></br> Step into the <br></br> Future </h2>
            <img src={image} alt='vr' className='image' />
          </div>
          <div className='right-con'>
            <h4>English(uk) </h4>
            <form onSubmit={handleSubmit}>
              <h2 className='h2'>Create Account</h2>
              <input type='text'
               className='input' 
               placeholder='Full name' 
               name='fullname'
               value={formValues.fullname}
               onChange={handleChange}
                />
              <p className='error'>{formErros.fullname}</p>

              <input type='email'
              className='input' 
              placeholder='Email' 
              name='email'
              value={formValues.email}
              onChange={handleChange}
               />
               <p className='error'>{formErros.email}</p>

              <input type='password'
              className='input' 
              placeholder='Password' 
              name='password'
              value={formValues.password}
              onChange={handleChange}
               />
              <p className='error'>{formErros.password}</p>

              <div className='check'>
              <input type='checkbox' />
              <p>I have read and agreed to the terms of service and privacy policy</p>
              </div>
              <button>Create Account</button>
              <h5 className='or'>or</h5>
              <div className='socials'>
              <h5><FontAwesomeIcon icon={faGoogle} />Sigup with Google</h5>
              <h5>Sigup with Faceook <FontAwesomeIcon icon={faFacebook} /> </h5>
              </div>
              <p className='footer'>Already have account? <span>Log in</span></p>
            </form>
          </div>
          </div>
        </div>
        
    </div>
  )
}

export default FormUi