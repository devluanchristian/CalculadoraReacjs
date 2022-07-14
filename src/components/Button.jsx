import React from 'react'
import './Button.css'

export default (props) => {
  let classes = 'button '
  classes += props.operaction ? 'operation' : ''
  classes += props.double ? 'double' : ''
  classes += props.triple ? 'triple' : ''
  classes += props.calc ? 'calc' : ''


  return (
    <button
      onClick={(e) => props.click && props.click(props.label)}
      className={classes}
    >
      {props.label}
    </button>
  )
}
