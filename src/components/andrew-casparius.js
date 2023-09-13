import React from 'react'

import PropTypes from 'prop-types'

import './andrew-casparius.css'

const AndrewCasparius = (props) => {
  return (
    <div className={`andrew-casparius-container ${props.rootClassName} `}>
      <span className="andrew-casparius-text">{props.text}</span>
    </div>
  )
}

AndrewCasparius.defaultProps = {
  text: 'Andrew Casparius',
  rootClassName: '',
}

AndrewCasparius.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AndrewCasparius
