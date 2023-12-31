import React from 'react'

const Searchitem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
            type = "text" 
            id = 'Search'
            placeholder = 'Search'
            role = 'searchbox' 
            value = {search}
            onChange = {(e) => setSearch(e.target.value)} 
        />
    </form>
  )
}

export default Searchitem