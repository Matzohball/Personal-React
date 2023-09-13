import React from 'react'

import PropTypes from 'prop-types'

import './nav.css'

const Nav = (props) => {
  return (
    <nav className={`nav-nav ${props.rootClassName} `}>
      <a
        href="https://storage.googleapis.com/playground-bucket-v2.teleporthq.io/51aef82f-dd97-44bc-bdb8-044e7de525b3/3a0df787-7d53-4b7e-bf9a-83d923e75539"
        target="_blank"
        rel="noreferrer noopener"
        className="nav-link"
      >
        {props.Resume}
      </a>
    </nav>
  )
}

Nav.defaultProps = {
  Resume: 'Resume',
  rootClassName: '',
}

Nav.propTypes = {
  Resume: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Nav
