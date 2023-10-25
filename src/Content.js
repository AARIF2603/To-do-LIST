import React from 'react'
import Listitems from './Listitems';
const Content = ({item,handleCheck,handleDelete}) => {
  
  return (
    <>
      
      {(item.length)?
      (
        <Listitems items={item} handleCheck={handleCheck} handleDelete={handleDelete} />
      )
      :
      (<p> Your list is empty</p>)
          }
    </>
    
  )
}

export default Content