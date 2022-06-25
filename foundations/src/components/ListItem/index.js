import React from 'react'
import './styles.scss'
import { ListItemDate } from './ListItemDate'

export function ListItem({ date, title, price }) {
  const cssClassName = 'list-item'
  return (
    <div className={cssClassName} data-testid={cssClassName}>
      <ListItemDate date={date} />
      <div className={cssClassName + '__title'}>{title}</div>
      <div className={cssClassName + '__price'}>{price}</div>
    </div>
  )
}
