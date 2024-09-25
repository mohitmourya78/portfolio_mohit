import React, {useState} from 'react'
import './Resume.css'

import resumePdf from '../assets/resume.pdf';


const Resume = () => {
  
    return (
        <>
            <center>
                <a className='trans bounce'  style={{ color: 'white' }} href={resumePdf} target="_blank">
                    Download CV
                </a>
              
            </center>
        </>
    );
};

export default Resume
