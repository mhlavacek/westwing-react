import React from 'react'
import './Items.css'
import ListItem from './ListItem'

export default function Items(props) {
  return (
  <ul className="items">
    {props.items.map((item) => ListItem(item))}
  </ul>
  );
}