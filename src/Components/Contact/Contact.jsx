import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    return ( 
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am available to take on new projects, so feel free to contact me.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>laurapplt@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+33669373269</p>    
                        </div>
                        <div className="contact-detail">
                        <img src={linkedin_icon} alt="" /> <p>Linkedin Profile</p>
                        </div>
                    </div>
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

        </div>
    )
}

export default Contact
