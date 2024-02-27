import React from 'react'
import Title from './Title'
import { services } from './data'
import Service from '../microComponents/Service'

const Services = (children) => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service key={service.id} {...children} />
        })}
      </div>
    </section>
  )
}

export default Services
