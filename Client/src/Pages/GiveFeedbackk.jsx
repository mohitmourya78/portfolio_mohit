import React, { useState } from 'react';
import './GiveFeedbackk.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';


const GiveFeedback = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)

    try {
      const response = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        //const responseData = await response.json();
        toast.success("Feedback Sent Successfully");
        setUser({ name: "", email: "", phone: "", message: "" });
        //console.log(responseData);
      } else {
        console.log("error inside response ", "error");
      }
    } catch (error) {
      console.error("Error", error);
    }
  }


  return (
    <>

      <nav className="navbar respnavh">
        <div className='left'>
          <span>
            <Link to="/">
              <button className='feedback-btn'>Back To Home</button>
            </Link>
          </span>
        </div>

      </nav>


      <div className="feedback-container">
        <h1 className="feedback-title">Give Feedback</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>

            <input type="text" id="name" name="name" value={user.name}
              onChange={handleInput} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>

            <input type="email" id="email" name="email" value={user.email}
              onChange={handleInput} required />

          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>

            <input type="tel" id="phone" name="phone" value={user.phone}
              onChange={handleInput} required />

          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>

            <textarea id="message" name="message" rows="4" value={user.message}
              onChange={handleInput} required></textarea>

          </div>
          <button className='feebackSubmit' type="submit">Submit</button>
        </form>
      </div>

    </>

  );
}

export default GiveFeedback;
