import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
const Additem = ({newItem,setNewItem,handleSubmit}) => {
  const refrence = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            autoFocus
            ref={refrence}
            type="text"
            id='addItem'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        /> 
        <button 
            type='submit'
            onClick={(e) => refrence.current.focus()}
            aria-label='Add Item'>
            <FaPlus />
        </button>
    </form>
  )
}

export default Additem