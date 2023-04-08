import React from 'react'
import './About.css'
import ME from '../../assets/Me.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {AiFillBook} from 'react-icons/ai'

const About = () => {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me"/>
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h4>Experience</h4>
              <br/>
              <small>1+ Year</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h4>Projects</h4>
              <br/>
              <small>10+ Completed Projects</small>
            </article>

            <article className="about__card">
              <AiFillBook className="about__icon"/>
              <h4>Education</h4>
              <br/>
              <small>Re:coded Bootcamp with 5% acceptance rate</small>
            </article>

          </div>
          <p>
          Web Developer passionate about creating responsive and creative websites. Well-versed in HTML, CSS, JavaScript, React and eager to learn more and expand my developer background to deliver exceptional customer satisfaction and experiences.
          </p>

          <a href="#Contact" className="btn btn-primary">Contact Me </a>

        </div>
      </div>

    </section >
  )
}

export default About