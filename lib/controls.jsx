import React, { useContext, useEffect } from 'react'
import { EditorContext, updateState as updateContextState } from './context'
import Toolbar from './controls/toolbar'
import classNames from 'classnames'
import Image from './controls/image'
import TagList from './controls/tags-list'
import Actions from './components/actions'
import Quote from './controls/quote'
import UnorderedList from './controls/unordered-list'
import Link from './controls/link'
import ButtonLinkControls from './controls/button-link'
import PropTypes from 'prop-types'
import Bold from './controls/bold'
import Italic from './controls/italic'
import Left from './controls/alignment/left'
import Right from './controls/alignment/right'
import Center from './controls/alignment/center'
import Video from './controls/video'

const Controls = ({ whiteMode, disabled, className, centered, children }) => {
  const [, dispatch] = useContext(EditorContext)

  useEffect(() => {
    dispatch(updateContextState({ disabled }))
  }, [disabled])

  return (
    <Toolbar
      className={classNames(className, {
        'Editor-Toolbar__whiteMode': whiteMode,
        'Editor-Toolbar__centered': centered,
      })}
    >
      {children}
    </Toolbar>
  )
}

// Controls
Controls.Image = Image
Controls.TagList = TagList
Controls.Bold = Bold
Controls.Italic = Italic
Controls.Quote = Quote
Controls.Left = Left
Controls.Right = Right
Controls.Center = Center
Controls.UnorderedList = UnorderedList
Controls.Link = Link
Controls.Button = ButtonLinkControls
Controls.Video = Video
// Style
Controls.Group = Actions

Controls.propTypes = {
  disabled: PropTypes.bool,
  whiteMode: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string,
}
Controls.defaultProps = {
  disabled: false,
  whiteMode: false,
  centered: false,
}

export default Controls
