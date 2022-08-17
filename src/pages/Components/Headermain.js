import React from "react"
import "../../pages/headermain.css"
import career from "../../Assets/CareerLadder.png"
import email from "../../Assets/EmailSend.png"
import location from "../../Assets/LocationPin.png"
import logo from "../../Assets/Screenshot-removebg-preview 2.png"
import call from "../../Assets/goodphone.png"
const Headermain = () => {

  const redirections = (position) => {
    window.scrollTo(0, position)
}

  return (
    <div>
      <div className="main_header_twiller">
        <div className="main_header_logo_img">
          <img className="logo1_png" src={logo} />
        </div>
        <div className="twiller_inner_head">
          <div className="twiller_row_headup">
            <div className="twiller_doubler" >
              {" "}
              <img src={career} className="img_si_upper" />{" "}
              <p className="p_si_topp_upp" >Career Opportunities</p>
            </div>
            <div className="twiller_doubler">
              {" "}
              <img src={location} className="img_si_upper" />{" "}
              <p className="p_si_topp_upp" >Find Us</p>
            </div>{" "}
            <div className="twiller_doubler">
              {" "}
              <img src={email} className="img_si_upper" />{" "}
              <p className="p_si_topp_upp" >Email: 3const.official@gmail.com</p>
            </div>{" "}
            <div className="twiller_doubler">
              {" "}
              <img src={call} className="img_si_upper" />{" "}
              <p className="p_si_topp_upp">021-34014444</p>
            </div>
          </div>
          <div className="twiller_row_headown">
            <p  className="p_si_headmain" onClick={redirections.bind(this,700)}>Home</p>
            <p  onClick={redirections.bind(this,1400)} className="p_si_headmain">Services</p>
            <p  onClick={redirections.bind(this,3500)}  className="p_si_headmain" > Projects</p>
            <p onClick={redirections.bind(this, 4300)}  className="p_si_headmain">Portfolio</p>
            <p onClick={redirections.bind(this,5200)}  className="p_si_headmain">Team</p>
            <p  onClick={redirections.bind(this,600)} className="p_si_headmain">About</p>
            <p  onClick={redirections.bind(this,7000)} className="p_si_headmain_last">Contact Us</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Headermain
