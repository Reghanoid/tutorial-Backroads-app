import React from 'react'
import Title from './Title'
import { tours } from './data'

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subtitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const { id, date, image, title, text, location, duration, price } =
            tour
          return (
            <article className='tour-card'>
              <div className='tour-img-container'>
                <img src={image} alt='' className='tour-img' />
                <p className='tour-date'></p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4></h4>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus, repellendus eveniet dicta minima magni blanditiis
                  iste aliquam consectetur veritatis praesentium, alias optio
                  deserunt totam. Sint corporis voluptates rem optio quasi.
                </p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>
                  </p>
                </div>
              </div>
            </article>
          )
        })}

        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-1.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>august 26th, 2020</p>
          </div>
          <div className='tour-info'>
            <div className='tour-title'>
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className='tour-footer'>
              <p>
                <span>
                  <i className='fas fa-map'></i>
                </span>{' '}
                china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Tours
