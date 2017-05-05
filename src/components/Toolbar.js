import React from 'react'
import './Toolbar.css'

export default function Toolbar(props) {
  return (
    <div className="toolbar">
      <a className="toolbar-item" onClick={props.addAction}>
        {props.addText}
      </a>
    </div>
  );
}