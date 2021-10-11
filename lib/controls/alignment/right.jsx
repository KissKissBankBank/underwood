import React from 'react'
import PropTypes from 'prop-types'
import Generic from './generic'

const Right = (props) => {
  return <Generic label="k-u-align-right" {...props} />
}

Right.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

Right.defaultProps = {
  disabled: false,
  onChange: () => null,
}

export default Right
