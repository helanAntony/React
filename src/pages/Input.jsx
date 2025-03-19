import React from 'react';
import "../assets/css/input.css"
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div className="container">
        <nav className="navbar">
          <div className="logo">RealEstate</div>
          <Link to ="/Home">Home</Link>
          <Link to ="/List">List</Link>
          <Link to ="/Input">Input</Link>        </nav>
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below.</p>
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Phone:</label>
        <input type="tel" placeholder="Enter your phone number" required />

        <label>Message:</label>
        <textarea placeholder="Enter your message" rows="5" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;