import React from 'react'

const App = () => {
  return (
    <>
      <nav classname='navbar'>
        <div classname='nav-center'>
          <div classname='nav-header'>
            <img src='./images/logo.svg' classname='nav-logo' alt='backroads' />
            <button type='button' classname='nav-toggle' id='nav-toggle'>
              <i classname='fas fa-bars'></i>
            </button>
          </div>

          <ul classname='nav-links' id='nav-links'>
            <li>
              <a href='#home' classname='nav-link'>
                {' '}
                home{' '}
              </a>
            </li>

            <li>
              <a href='#about' classname='nav-link'>
                {' '}
                about{' '}
              </a>
            </li>

            <li>
              <a href='#services' classname='nav-link'>
                {' '}
                services{' '}
              </a>
            </li>

            <li>
              <a href='#tours' classname='nav-link'>
                {' '}
                tours
              </a>
            </li>
          </ul>

          <ul classname='nav-icons'>
            <li>
              <a
                href='https://www.twitter.com'
                target='_blank'
                classname='nav-icon'
              >
                <i classname='fab fa-facebook'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                target='_blank'
                classname='nav-icon'
              >
                <i classname='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                target='_blank'
                classname='nav-icon'
              >
                <i classname='fab fa-squarespace'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section classname='hero' id='home'>
        <div classname='hero-banner'>
          <h1>continue exploring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a href='#tours' classname='btn hero-btn'>
            explore tours
          </a>
        </div>
      </section>

      <section classname='section' id='about'>
        <div classname='section-title'>
          <h2>
            about <span>us</span>
          </h2>
        </div>

        <div classname='section-center about-center'>
          <div classname='about-img'>
            <img
              src='./images/about.jpeg'
              classname='about-photo'
              alt='awesome beach'
            />
          </div>
          <article classname='about-info'>
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href='#' classname='btn'>
              read more
            </a>
          </article>
        </div>
      </section>

      <section classname='section services' id='services'>
        <div classname='section-title'>
          <h2>
            our <span>services</span>
          </h2>
        </div>
        <div classname='section-center services-center'>
          <article classname='service'>
            <span classname='service-icon'>
              <i classname='fas fa-wallet fa-fw'></i>
            </span>
            <div classname='service-info'>
              <h4 classname='service-title'>saving money</h4>
              <p classname='service-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article classname='service'>
            <span classname='service-icon'>
              <i classname='fas fa-tree fa-fw'></i>
            </span>
            <div classname='service-info'>
              <h4 classname='service-title'>endless hiking</h4>
              <p classname='service-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article classname='service'>
            <span classname='service-icon'>
              <i classname='fas fa-socks fa-fw'></i>
            </span>
            <div classname='service-info'>
              <h4 classname='service-title'>amazing comfort</h4>
              <p classname='service-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section classname='section' id='tours'>
        <div classname='section-title'>
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div classname='section-center featured-center'>
          <article classname='tour-card'>
            <div classname='tour-img-container'>
              <img src='./images/tour-1.jpeg' classname='tour-img' alt='' />
              <p classname='tour-date'>august 26th, 2020</p>
            </div>
            <div classname='tour-info'>
              <div classname='tour-title'>
                <h4>Tibet Adventure</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div classname='tour-footer'>
                <p>
                  <span>
                    <i classname='fas fa-map'></i>
                  </span>{' '}
                  china
                </p>
                <p>6 days</p>
                <p>from $2100</p>
              </div>
            </div>
          </article>

          <article classname='tour-card'>
            <div classname='tour-img-container'>
              <img src='./images/tour-2.jpeg' classname='tour-img' alt='' />
              <p classname='tour-date'>october 1th, 2020</p>
            </div>
            <div classname='tour-info'>
              <h4>best of java</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div classname='tour-footer'>
                <p>
                  <span>
                    <i classname='fas fa-map'></i>
                  </span>{' '}
                  indonesia
                </p>
                <p>11 days</p>
                <p>from $1400</p>
              </div>
            </div>
          </article>

          <article classname='tour-card'>
            <div classname='tour-img-container'>
              <img src='./images/tour-3.jpeg' classname='tour-img' alt='' />
              <p classname='tour-date'>september 15th, 2020</p>
            </div>
            <div classname='tour-info'>
              <h4>explore hong kong</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div classname='tour-footer'>
                <p>
                  <span>
                    <i classname='fas fa-map'></i>
                  </span>{' '}
                  hong kong
                </p>
                <p>8 days</p>
                <p>from $5000</p>
              </div>
            </div>
          </article>

          <article classname='tour-card'>
            <div classname='tour-img-container'>
              <img src='./images/tour-4.jpeg' classname='tour-img' alt='' />
              <p classname='tour-date'>december 5th, 2019</p>
            </div>
            <div classname='tour-info'>
              <h4>kenya highlights</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div classname='tour-footer'>
                <p>
                  <span>
                    <i classname='fas fa-map'></i>
                  </span>{' '}
                  kenya
                </p>
                <p>20 days</p>
                <p>from $3300</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer classname='section footer'>
        <ul classname='footer-links'>
          <li>
            <a href='#home' classname='footer-link'>
              home
            </a>
          </li>
          <li>
            <a href='#about' classname='footer-link'>
              about
            </a>
          </li>
          <li>
            <a href='#services' classname='footer-link'>
              services
            </a>
          </li>
          <li>
            <a href='#featured' classname='footer-link'>
              featured
            </a>
          </li>
        </ul>
        <ul classname='footer-icons'>
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              classname='footer-icon'
            >
              <i classname='fab fa-facebook'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              classname='footer-icon'
            >
              <i classname='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.twitter.com'
              target='_blank'
              classname='footer-icon'
            >
              <i classname='fab fa-squarespace'></i>
            </a>
          </li>
        </ul>
        <p classname='copyright'>
          copyright &copy; Backroads travel tours company
          <span id='date'></span> all rights reserved
        </p>
      </footer>
    </>
  )
}

export default App
