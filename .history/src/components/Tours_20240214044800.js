import React from 'react'
import Title from './Title'
import { tours } from './data'
import loca from '../images/tour-1.jpeg'

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
                <img src={loca} alt={title} className='tour-img' />
                <p className='tour-date'> {date} </p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4> {title} </h4>
                </div>
                <p>{text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>
                    {location}
                  </p>
                  <p> {duration} </p>
                  <p> {price} </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
