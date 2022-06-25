import React from 'react'
import { ListItem } from '../ListItem'
import './styles.scss'

export function List({ items = [] }) {
  const cssClassName = 'list'

  function mapListItems(items) {
    return items.map((item, index) => <ListItem key={index} {...item} />)
  }

  return (
    <div className={cssClassName}>
      {items.length > 0 && mapListItems(items)}
    </div>
  )
}
