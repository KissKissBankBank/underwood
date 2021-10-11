import React from 'react'
import Generic from './generic'
import PropTypes from 'prop-types'

const Left = (props) => {
  return <Generic label="k-u-align-left" {...props} />
}

Left.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

Left.defaultProps = {
  disabled: false,
  onChange: () => null,
}

export default Left
