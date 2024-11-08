import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    return ( 
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Let's talk</h1>
            </div>

                <form className="contact-right">
                    <label htmlFlor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email'/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>

                </form>
            </div>

    
)}

export default Contact
