/* eslint-disable react/prop-types */
import React from 'react'
import './styles.scss'

export function ListItemDate({ date }) {
  const cssClassName = 'list-item-date'

  return (
    <div className={cssClassName} data-testid={cssClassName}>
      <p
        className={cssClassName + '__content'}
      >{`${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`}</p>
    </div>
  )
}
