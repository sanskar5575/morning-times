import React from 'react';
import './Navbarnews.css';
import Hamberger from './Hamberger'

const Navbarnews = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className='icon'>
           <Hamberger setCategory={setCategory} />
        </div>
        <img 
        style={{cursor:"pointer"}}
        src="https://bloximages.chicago2.vip.townnews.com/morning-times.com/content/tncms/custom/image/6f227d7e-148e-11e7-9387-232e3c9bc44a.jpg?resize=600%2C315"
        height='78%'
        alt='logo'/>
    </div>
  )
}

export default Navbarnews;