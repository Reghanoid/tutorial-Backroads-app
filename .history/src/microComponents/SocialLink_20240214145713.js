import React from 'react'

const SocialLink = ({ id, href, icon }) => {
  return (
    <li key={id}>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='footer-icon'
      >
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink
