import { Link } from 'react-router-dom';
import './ContactUs.css'
import { useState } from 'react';
const ContactUs = () => {
    const [inputValue, setInputValue] = useState({name: '', email: '', subject: '', message: ''});

  return (
    <div id="ContactUs">
      <h1 className='contactUs-heading'>CONTACT US</h1>
      <div className="contactInputs-container">
        <div className="nameInput">
          <input type="text" placeholder='Name' value={inputValue.name} onChange={(e)=> setInputValue({...inputValue, name: e.target.value})}/>
        </div>
        <div className="emailInput">
          <input type="email" placeholder='E-Mail'  value={inputValue.email} onChange={(e)=> setInputValue({...inputValue, email: e.target.value})}/>
        </div>
        <div className="subjectInput">
          <input type="text" placeholder='Subject'  value={inputValue.subject} onChange={(e)=> setInputValue({...inputValue, subject: e.target.value})}/>
        </div>
        <div className="nameInput">
          <textarea placeholder='Your message' rows={10}  value={inputValue.message} onChange={(e)=> setInputValue({...inputValue, message: e.target.value})}/>
        </div>
        <div className="contactUs-bottom">
            <p>This site is protected by reCAPTCHA and the Google <Link to={'/privacy-policy'}>Privacy Policy</Link> and <Link to={'/terms-of-service'} >Terms of Service</Link> apply.</p>
            <button onClick={() => console.log(inputValue)}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
