import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "969e91a7-cc61-4cce-b0f5-c3243342630f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Let's talk</h1>
      </div>

      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="name">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' id='name' required />
        
        <label htmlFor="email">Your Email</label>
        <input type="email" placeholder='Enter your email' name='email' id='email' required />
        
        <label htmlFor="message">Write your message here</label>
        <textarea name="message" rows="8" placeholder='Enter your message' id='message' required></textarea>
        
        <button type='submit' className="contact-submit">Submit now</button>
      </form>

      {result && <p className="result-message">{result}</p>}
    </div>
  );
};

export default Contact;