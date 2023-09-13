import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.Contact}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text1: 'Features',
  text4: 'Blog',
  text2: 'Pricing',
  rootClassName: '',
  Contact: 'About Me',
  text6: 'Contact',
  Resume: 'Resume',
  text3: 'Team',
}

NavigationLinks.propTypes = {
  text1: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  Contact: PropTypes.string,
  text6: PropTypes.string,
  Resume: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
