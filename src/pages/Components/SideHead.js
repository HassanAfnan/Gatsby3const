import React from 'react'
import "../../pages/global.css"
import logo from "../../Assets/Screenshot-removebg-preview 2.png"
import output from "../../Assets/burger.png"

const SideHead = () => {

  const redirections = (position) => {
    window.scrollTo(0, position)
}

  return (
    <div className="main_header_twiller2">
        {/* <div className='ham_holder' >
            <img className='hamburger_siting' src={hamburger} />

        </div>
      */}
     <input type="checkbox" id="check" />
      <label for="check">
        <i id="cancel"> X</i>
        <i id="btn">
          {" "}
          <img
            src={output}
            className='ham_holder'
          />{" "}
        </i>
      </label>
      <div className="del-sidebar">
        <header> My Profile</header>
        <ul className='minmin_si_lin'>
          <li  className='minmin_li_lin'>
            <a   className='minmin_a_lin'>Home</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Our Projects</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>Teams</a>
          </li>{" "}
          <li>
            <a>About Us</a>
          </li>{" "}
          <li>
            <a>Connect</a>
          </li>
        </ul>
      </div>
      <div className="main_header_logo_img">
        <img className="logo1_png" src={logo} />
      </div>

    

  </div>
  )
}

export default SideHead