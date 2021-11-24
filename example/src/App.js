import React from "react"

const Home = () => {
  return (
    <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            Purgescss
          </a>

          <a
            role='button'
            className='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu active'>
          <div className='navbar-start'>
            <a className='navbar-item active'>Home</a>

            <a className='navbar-item'>Documentation</a>

            <div className='navbar-item has-dropdown hoverable'>
              <a className='navbar-link'>More</a>

              <div className='navbar-dropdown'>
                <a className='navbar-item'>About</a>
                <a className='navbar-item'>Jobs</a>
                <a className='navbar-item'>Contact</a>
                <hr className='navbar-divider' />
                <a className='navbar-item'>Report an issue</a>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <a className='button is-primary small'>
                  <strong>Sign up</strong>
                </a>

                <a className='button is-primary small'>
                  <strong>Sign up</strong>
                </a>
                <a className='button is-light'>Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Home
