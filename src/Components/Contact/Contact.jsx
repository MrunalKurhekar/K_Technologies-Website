import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6902a02f-c0fd-4d43-83db-9eaaf071f50b");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact' id="contact">
      <div className="contact-col">
      <h3>Send us message <img src={msg_icon} alt="" /></h3>
      <p>We’d love to hear from you! Whether you have a question, feedback, or need assistance, our team is here to help.</p>
    <ul>
        <li> <img src={mail_icon} alt="" />It_services0719@gmail.com</li>
        <li> <img src={phone_icon} alt="" />+91 7507161910</li>
        <li> <img src={location_icon} alt="" />Pune, Maharashtra 411055</li>
    </ul>
    </div>
<div className="contact-col" >
<form onSubmit={onSubmit}>
    <label>Your Name</label>
    <input type="text" name='name' placeholder='Enter your name' required/>
    <label>Phone Number</label>
    <input type="text" name='phone' placeholder='Enter your mobile number' required/>
    <label>Write your message here</label>
    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
    <button type='submit' className='btn dark-btn'>Submit Now</button>
</form>
<span>{result}</span>
</div>
    </div>
  )
}
export default Contact
