import React from 'react';
import './Project.css';

function Project() {
  return (
    <section id='projects' className='allHeadingAdjust'>

      <div className='project'>
        My Projects
      </div>
      <div className='project-grid' id='project-grid'>

        <a target='__blank' href='https://github.com/mohitmourya78/Mohit-Study-Notes' >
          <div className='project-item trans' id='project-item' >
            <img className='project-img' src="/img/notes.jpg" alt="studynotes" />
            <div className='project-heading'>
              <div className='heading'>
                E Study Notes
              </div>
              <div className='para'>
                Full Stack Development,Node.js, Express, MongoDB
              </div>

            </div>

          </div>

        </a>

        <a target='__blank' href='https://github.com/mohitmourya78/Todo_with_react' >
          <div className='project-item trans ' id='project-item' >
            <img className='project-img' src="/img/todo.png" alt="todo" />
            <div className='project-heading'>
              <div className='heading'>
                TODO List
              </div>
              <div className='para'>
                I create two todo 1. With frontend framework React js & 2. JavaScript
              </div>

            </div>
          </div>
        </a>
        <a target='__blank' href='https://github.com/mohitmourya78/Music_playlist_by_mohit' >
          <div className='project-item trans ' id='project-item' >
            <img className='project-img' src="/img/music.jpg" alt="music" />
            <div className='project-heading'>
              <div className='heading'>
                Music PlayList
              </div>
              <div className='para'>
                HTML,CSS,JS
              </div>

            </div>
          </div>
        </a>
        <a target='__blank' rget='__blank' href='https://github.com/mohitmourya78/coin_flip' >
          <div className='project-item trans ' id='project-item' >
            <img className='project-img' src="/img/coin.jpg" alt="coinflip" />
            <div className='project-heading'>
              <div className='heading'>
                Coin Flip Toss
              </div>
              <div className='para'>
                Tailwind,JS
              </div>

            </div>
          </div>
        </a>




      </div>




    </section >
  );
}

export default Project;

