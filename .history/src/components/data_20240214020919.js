export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 1, href: '#about', text: 'about' },
  { id: 1, href: '#services', text: 'services' },
  { id: 1, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
  {
    id: 2,
    icon: 'ffas fa-tree fa-fw',
    title: 'endless hiking',
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazng comfort',
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.`,
  },
]


export const tours = [
  {id:1, date: 'august 26th, 2020', title: 'tibet adventure', text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`, location: 'china', duration: '6 days', price: '2100'}
]





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
