import React, {useState} from 'react'
import { ListItem } from '../ListItem'
import { ListFilter } from '../ListFilter'
import './styles.scss'

export function List({ items = [] }) {
  const cssClassName = 'list'

  const [filterValue, setFilterValue] = useState('Nothing set');

  function mapListItems(items) {
    return items.map((item, index) => <ListItem key={index} {...item} />)
  }

  function filterValueHandler(value) {
    setFilterValue(value);
  }

  return (
    <div className={cssClassName}>
      <ListFilter 
        values={['1997', '1998', '1999', '2000']}
        onValueSelected={filterValueHandler}
        selected={filterValue}  
      ></ListFilter>
      {filterValue}
      {items.length > 0 && mapListItems(items)}
    </div>
  )
}
