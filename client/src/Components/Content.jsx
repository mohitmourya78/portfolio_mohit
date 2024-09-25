
import React from 'react'
import './Content.css';
import Leftside from './Leftside';
import Skills from './Skills';
import Project from './Project';
import './Leftside.css'
import Rightside from './Rightside';
import About from './About'
import Contact from './Contact';
import Footer from './Footer';
import Resume from './Resume';


function Content() {
    return (

        <div className=" content">

            <div class="">

                <div class="sidenav">
                    <Leftside />
                </div>
            </div>

           

                <div className="right-side">
                    <div className='adjust'>

                    <Rightside />

                    <Skills />

                    <Project />

                    <About />

                    <Resume />

                    <Contact />

                    <Footer />

                    </div>

                </div >
            


        </div >





    );
}

export default Content;
