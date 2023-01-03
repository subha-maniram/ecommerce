import React from 'react'

const Meta = (props) => {
    document.title = "LEE COLLECTION -" + props.title;

  return (
    <div className="w-100">{props.children}</div>
  )
}

export default Meta