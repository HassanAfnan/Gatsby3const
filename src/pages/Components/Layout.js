import React,{useState,useEffect} from 'react'
import Header from './Header'
import "../global.css"
import facebook from "../../Assets/Facebook.png"
import cell from "../../Assets/Cell Phone.png"
import gmail from "../../Assets/Gmail Login.png"
import linkinn from "../../Assets/LinkedIn.png"
import insta from "../../Assets/Instagram.png"
import phone from "../../Assets/Phone.png"
import skype from "../../Assets/Skype.png"
import twitter from "../../Assets/Twitter.png"
import Headermain from './Headermain'
import SideHead from './SideHead'





const Layout = ({children}) => {


    const [sliptwin,setSliptwin] =useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
          setSliptwin(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, [window.innerWidth]);

  return (
    <>{sliptwin>1000?( <div>
        <Headermain/>

        <div className='content'>
            { children }
        </div>
        
        <div className='main_footer_in'>
        <div className='liner_si_footer'>
        <h3 className='heading_in_footer' style={{paddingLeft:"2vw"}} >Contact Us</h3>
        <div className='cyber1_3'></div>
            <p className='p_si_footer3' > <img className='img_tagger_si_footer22' src={gmail} /> 3const@gmail.com</p>
            <p className='p_si_footer3'> <img className='img_tagger_si_footer22' src={cell} />021-34014444</p>
            <p className='p_si_footer3' > <img className='img_tagger_si_footer22' src={phone} />0332 2287638</p>

        </div>
        <div className='liner_si_footer'>
        <h3 className='heading_in_footer' >Services</h3>
        <div className='cyber_1'></div>
            <p className='p_si_footer'>Website Development </p>
            <p className='p_si_footer'> Graphic Designing</p>
            <p className='p_si_footer'> Mobile App Development</p>
            <p className='p_si_footer'>Mobile IOS Developmen</p>
            <p className='p_si_footer'> CRM Software</p>
            <p className='p_si_footer'>Business Intelligence</p>
            <p className='p_si_footer'> Digital Marketing</p>
            <p className='p_si_footer'>SEO Marketing</p>
            <p className='p_si_footer'> Cyber Penetration</p>
            <p className='p_si_footer'> ASO Software</p>
            <p className='p_si_footer'> Ui Ux Designing</p>
            <p className='p_si_footer'>Website Extentions</p>
        </div>
        <div className='liner_si_footer'>
            <h3 className='heading_in_footer' >Quick Links</h3>
            <div className='cyber_1'></div>
            <p className='p_si_footer'>Home </p>
            <p className='p_si_footer'>Services </p>
            <p className='p_si_footer'>Our Projects</p>
            <p className='p_si_footer'>Teams </p>
            <p className='p_si_footer'>About Us</p>
            <p className='p_si_footer'>Find Us</p>
            <p className='p_si_footer'>Career Opportunities</p>

            
        </div>
        <div  className='liner_si_footer'>
        <h3 className='heading_in_footer2' >Find Us On</h3>
        <div className='cyber1_2'></div>
            <div className='div_pic_si2' >   <img  className='img_tagger_si_footer'  src={facebook}/> <img className='img_tagger_si_footer'  src={insta} />  </div>
            <div className='div_pic_si2' >  <img className='img_tagger_si_footer' src={twitter} /> <img className='img_tagger_si_footer' src={skype} />  </div>
            <div className='div_pic_si2' >  <img className='img_tagger_si_footer' src={linkinn} /> <img className='img_tagger_si_footer' src={gmail} />  </div>

        </div>



        </div>
        <div className='lastboots'>
            <div className='lastuperboots'> <p>3-Const. All Rights Reserved</p></div>
            <div className='lastuperboots'><p>Privacy Policy / Contact Us</p></div>

        </div>
        
        
    </div>):( <div>
        {/* <Headermain/> */}
            <SideHead/>
        <div className='content'>
            { children }
        </div>
        
        <div className='main_footer_in'>
        <div className='liner_si_footer'>
        <h3 className='heading_in_footer' style={{paddingLeft:"2vw"}} >Contact Us</h3>
        <div className='cyber1_3'></div>
            <p className='p_si_footer3' > <img className='img_tagger_si_footer22' src={gmail} /> 3const@gmail.com</p>
            <p className='p_si_footer3'> <img className='img_tagger_si_footer22' src={cell} />021-34014444</p>
            <p className='p_si_footer3' > <img className='img_tagger_si_footer22' src={phone} />0332 2287638</p>

        </div>
        <div className='liner_si_footer'>
        <h3 className='heading_in_footer' >Services</h3>
        <div className='cyber_1'></div>
            <p className='p_si_footer'>Website Development </p>
            <p className='p_si_footer'> Graphic Designing</p>
            <p className='p_si_footer'> Mobile App Development</p>
            <p className='p_si_footer'>Mobile IOS Developmen</p>
            <p className='p_si_footer'> CRM Software</p>
            <p className='p_si_footer'>Business Intelligence</p>
            <p className='p_si_footer'> Digital Marketing</p>
            <p className='p_si_footer'>SEO Marketing</p>
            <p className='p_si_footer'> Cyber Penetration</p>
            <p className='p_si_footer'> ASO Software</p>
            <p className='p_si_footer'> Ui Ux Designing</p>
            <p className='p_si_footer'>Website Extentions</p>
        </div>
        <div className='liner_si_footer'>
            <h3 className='heading_in_footer' >Quick Links</h3>
            <div className='cyber_1'></div>
            <p className='p_si_footer'>Home </p>
            <p className='p_si_footer'>Services </p>
            <p className='p_si_footer'>Our Projects</p>
            <p className='p_si_footer'>Teams </p>
            <p className='p_si_footer'>About Us</p>
            <p className='p_si_footer'>Find Us</p>
            <p className='p_si_footer'>Career Opportunities</p>

            
        </div>
        <div  className='liner_si_footer'>
        <h3 className='heading_in_footer2' >Find Us On</h3>
        <div className='cyber1_2'></div>
            <div className='div_pic_si2' >   <img  className='img_tagger_si_footer'  src={facebook}/> <img className='img_tagger_si_footer'  src={insta} />  </div>
            <div className='div_pic_si2' >  <img className='img_tagger_si_footer' src={twitter} /> <img className='img_tagger_si_footer' src={skype} />  </div>
            <div className='div_pic_si2' >  <img className='img_tagger_si_footer' src={linkinn} /> <img className='img_tagger_si_footer' src={gmail} />  </div>

        </div>



        </div>
        <div className='lastboots'>
            <div className='lastuperboots'> <p>3-Const. All Rights Reserved</p></div>
            <div className='lastuperboots'><p>Privacy Policy / Contact Us</p></div>

        </div>
        
        
    </div>)}</>
   
  )
}

export default Layout