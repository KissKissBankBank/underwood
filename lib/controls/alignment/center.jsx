import React from 'react'
import Generic from './generic'
import PropTypes from 'prop-types'

const Center = (props) => {
  return <Generic label="k-u-align-center" {...props} />
}

Center.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

Center.defaultProps = {
  disabled: false,
  onChange: () => null,
}

export default Center
