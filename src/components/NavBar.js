import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/shelters' style={{paddingRight: '10px'}}>Shelters  </Link>
      <Link to='/shelters/new'> Add new shelter type</Link>
      
    </div>

  )
}

export default NavBar