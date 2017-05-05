import React from 'react'
import './ListItem.css'

export default function ListItem(item) {
  return (
    <li className="item" key={item.id}>
      <div className="item-text">
        &quot;{item.text}&quot;
      </div>
      <div className="item-details">
        {item.person}, {item.date}
      </div>
    </li>
  )
}