import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

       <span className="name">
        Morning Times made by - {" " }
        <span>Sanskar Gupta</span>
       </span>
     <hr style={{width:"90%"}}/>
     <div className="contactme">Contact us from </div>
     <div className="iconsContainer">
        <a href="https://www.instagram.com/sanskar5575/?hl=en" target="" className='footericon'>
        <i className="fa-brands fa-instagram-square"></i> <b className='footerb'>Instagram</b>
        </a>
        

        <a href="https://www.facebook.com/sanskar.gupta.716970" target="" className='footericon'>
        <i className="fa-brands fa-facebook-square"></i> <b className='footerb'>Facebook</b>
        </a>

        <a href="https://www.linkedin.com/in/sanskargupta-6339121b7" target="" className='footericon'>
      <i className="fa-brands fa-linkedin-in"></i> <b className='footerb'>LinkedIn</b>
        </a>
        
     </div>

    </div>
  )
}

export default Footer