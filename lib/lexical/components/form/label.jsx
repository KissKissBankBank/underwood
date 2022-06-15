import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Field } from '@kisskissbankbank/kitten'
import { EditorContext } from '../../context'

const Label = ({ htmlFor, size, label, children, tooltip }) => {
  const [{ translations }] = useContext(EditorContext)

  return (
    <Field.Label
      labelProps={{ htmlFor, size }}
      tooltipId={`tooltip-${htmlFor}`}
      tooltip={tooltip}
      tooltipProps={{
        actionLabel: translations?.form?.tooltip_action_label,
      }}
    >
      {label || children}
    </Field.Label>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  size: PropTypes.string,
  label: PropTypes.string,
  tooltip: PropTypes.string,
}

Label.defaultProps = {
  size: 'small',
}

export default Label
