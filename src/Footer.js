import React from 'react'

const Footer = ({length}) => {
// const year = new Date();
  return (
    
    <footer> 
      <p>{length} List {length===1?"item":"items"}</p>
      {/* <p>Copyright &copy; for {year.getFullYear()} obtained</p> */}
    </footer>
  )
}

export default Footer