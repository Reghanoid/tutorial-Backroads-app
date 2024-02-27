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
  {
    id:1, 
    date: 'august 26th, 2020', 
    title: 'tibet adventure', 
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`, 
    location: 'china', 
    duration: '6 days', 
    price: '2100'
  },
  {
    id:2, 
    date: 'october 11th, 2020', 
    title: 'best of java', 
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`, 
    location: 'indonesia', 
    duration: '11 days', 
    price: '1400'
  },
  {
    id:3, 
    date: 'september 15th, 2020', 
    title: 'exploring hong kong', 
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`, 
    location: 'hong kong', 
    duration: '8 days', 
    price: '5000'
  },
  {
    id:4, 
    date: 'december 5th, 2020', 
    title: 'kenya highlights', 
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`, 
    location: 'kenya', 
    duration: '20 days', 
    price: '3300'
  },
]





      

        <article className='tour-card'>
          <div className='tour-img-container'>
            <img src='./images/tour-4.jpeg' className='tour-img' alt='' />
            <p className='tour-date'>december 5th, 2019</p>
          </div>
          <div className='tour-info'>
            <h4>kenya highlights</h4>
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
                kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>