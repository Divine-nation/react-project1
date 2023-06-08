import React from 'react';
import './formUi.css';
import logo from '../assests/Group 3.png';
import image from '../assests/pngwing 1.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


function FormUi() {

  return (
    <div>
        <div className='main-container'>
          <div className='container'>
          <div className='left-con'>
          <img src={logo} className='logo' alt='logo' />
            <h2>Defy the past <br></br> Step into the <br></br> Future </h2>
            <img src={image} alt='vr' className='image' />
          </div>
          <div className='right-con'>
            <h4>English(uk) </h4>
            <form>
              <h2 className='h2'>Create Account</h2>
              <input type='text' className='input' placeholder='Full name' />
              <input className='input' placeholder='Email' />
              <input className='input' placeholder='Password' />
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
              <p className='footer'>Already a account? <span>Log in</span></p>
            </form>
          </div>
          </div>
        </div>
        
    </div>
  )
}

export default FormUi