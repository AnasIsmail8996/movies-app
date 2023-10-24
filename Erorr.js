import React from 'react'
import image from './images/404-Page-Design-Examples.png';
import './App.css'
import { NavLink } from 'react-router-dom';
const Erorr = () => {
  return (
    <>
   <div>


      <img className='Error-Page-Show'  src={image} alt='Erorr-Page'/>
   </div>
   <NavLink to='/' className='back-btn-erorr'>
            Go Back
          </NavLink>
   
    </>
  )
}

export default Erorr;
