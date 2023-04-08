import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio3.png'
import IMG2 from '../../assets/portfolio5.png'
import IMG3 from '../../assets/portfolio6.png'

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            <h3>Coffee Shop Project</h3>
            <div className="portfolio__item-button">
              <a href="https://github.com/iamyahia/Hot_coffee_teamWork" className='btn'>Github</a>
            </div>
               </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
            <h3>iTherapy Project</h3>
            <div className="portfolio__item-button">
              <a href="https://github.com/TherapyProject/iTherapy" className='btn'>Github</a>
              <a href="https://itherapy.netlify.app/" className='btn btn-primary'>Live Demo</a>
            </div>
               </div>
        </article>
        

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
            <h3>RMDB Movie Project</h3>
            <div className="portfolio__item-button">
              <a href="https://github.com/omardeeb/Movie-Project-1" className='btn'>Github</a>
            </div>
               </div>
        </article>
      </div>


    </section>
  )
}

export default Portfolio