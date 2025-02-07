import licon from "../assets/linkedinicon.png";
import gicon from "../assets/githubicon.png";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [popup, setPopup] = useState({ show: false, message: '', type: '', fadeOut: false }); // Added fadeOut state

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_klidmam', 'template_5ed01jk', form.current, 'viBDogRtxMvlxobMq')
      .then((result) => {
        console.log(result.text);
        showPopup('Sent Successfully!', 'success'); // Show success popup
        form.current.reset(); // Reset form fields after successful submission
      }, (error) => {
        console.log(error.text);
        showPopup('Error sending message. Please try again.', 'error'); // Show error popup
      });
  };

  const showPopup = (message, type) => {
    setPopup({ show: true, message, type, fadeOut: false });
    setTimeout(() => {
      setPopup({ ...popup, fadeOut: true }); // Start fade out
      setTimeout(() => {
        setPopup({ ...popup, show: false }); // Close popup after fade out
      }, 500); // Wait for fade out animation
    }, 2000); // Popup will show for 2 seconds
  };

  return (
    <div className="contact" data-aos="zoom-in">
      <h1 className="ContactPagetitle">Contact Me</h1>
      <span className="contact-description">
        Please fill out the form below to discuss any work opportunities
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Enter Your Name Please"
          name="user_name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="user_email"
          required
        />
        <textarea
          name="message"
          rows={5}
          className="message"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" value="Send" className="submit">
          Submit
        </button>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/venkata-sai-kartheek-mulukutla-7769762b3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={licon} alt="LinkedIn" className="link" />
          </a>
          <a
            href="https://github.com/SaiKartheekMV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gicon} alt="GitHub" className="link" />
          </a>
        </div>
      </form>

      {popup.show && (
        <div className={`popup ${popup.type} ${popup.fadeOut ? 'fade-out' : ''}`}>
          <span>{popup.message}</span>
        </div>
      )}
    </div>
  );
};

export default Contact;

