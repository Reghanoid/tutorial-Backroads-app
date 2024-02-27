import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from './data'
import PageLink from '../microComponents/PageLink'
import SocialLink from '../microComponents/SocialLink'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        {/* links */}
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map((link) => {
            return <PageLink key={link.id} {...link} />
          })}
        </ul>

        {/* icons */}
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            const { id, href, icon } = link
            return <SocialLink key={link.id} {...link} />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
