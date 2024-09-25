import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="allHeadingAdjust">
      <div className='project'>
        Contact Me
      </div>
      <div className='project-grid contact-grid'>


        <div className='project-item trans contact-item' >
          <img className='project-img' src="/img/call.webp" alt="" />
          <div className='project-heading'>
            <div className='heading'>
              Call & Whatsapp
            </div>
            <div className='para'>
              +91 80064 33805
            </div>
          </div>
        </div>

        <div className='project-item trans contact-item' >
            <img className='project-img' src="/img/email.png" alt="" />
            <div className='project-heading'>
              <div className='heading'>
                Email
              </div>
              <div className='para'>
                mohitmourya7898@gmail.com
              </div>
            </div>
        </div>

        <div className='project-item trans contact-item' >
          <img className='project-img' src="/img/address.webp" alt="" />
          <div className='project-heading'>
            <div className='heading'>
              Address
            </div>
            <div className='para'>
              Rudrapur,Uttarakhand,India
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Contact;
