import React from 'react'
import Lineitems from './Lineitems';

const Listitems = ({items,handleCheck,handleDelete}) => {
  return (
    <ul >
          {items.map(item =>(
            <Lineitems item={item} key={item.id} handleCheck={handleCheck} handleDelete={handleDelete} />
          ))}  
    </ul>
  )
}

export default Listitems