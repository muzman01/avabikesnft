import React from 'react'
import Image from 'next/image'
import logo from "../../../public/images/LOGO.png"
function NavBar() {
  return (
    <div className='d-flex justify-content-around mt-5'>
        <div><Image src={logo} /></div>
        <div className='MINT'><button className='mint_button'>Mint</button></div>
        <div className='Go_To_APP'><button className='go_to_app_button'>Go To App</button></div>
    </div>
  )
}

export default NavBar