import React from 'react'
import Logout from '../auth/Logout'

const Navbar = () => {
  return(
    <div className="d-flex justify-content-between bg-primary p-3 text-white">
      <p className="mb-0 font-weight-bold">Mi ToDo</p>
      <Logout />
    </div>
  )
}

export default Navbar