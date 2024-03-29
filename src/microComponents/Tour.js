import React from 'react'

const Tour = ({ id, date, image, title, text, location, duration, price }) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={image} alt={title} className='tour-img' />
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
}

export default Tour
