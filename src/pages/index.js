import React from "react"
import Layout from "./Components/Layout"
import "./home.css"
import pic1 from "../Assets/picsonbackground.png"
import logo3 from "../Assets/logo3constedit.png"
import hybella from "../Assets/hybella.png"
import indochina from "../Assets/indochina.png"
import google from "../Assets/Google-Reviews-removebg-preview 1.png"
import gastor from "../Assets/gestor.png"
import elec from "../Assets/Electec.png"
import seo from "../Assets/seo.png"
import arrow from "../Assets/arrow.png"
import aso from "../Assets/Aso.png"
import business from "../Assets/bussiness.png"
import crm from "../Assets/crm.png"
import graphic from "../Assets/graphic.png"
import drop from "../Assets/dropper.png"
import ios from "../Assets/ios.png"
import Mobileapp from "../Assets/Mobileapp.png"
import webdev from "../Assets/webdev.png"
import digital from "../Assets/Digital.png"
import web2 from "../Assets/web1.jpeg"
import web3 from "../Assets/web2.jpeg"
import web4 from "../Assets/web3.jpeg"
import web69 from "../Assets/web4.jpeg"
import mobapp2 from "../Assets/app1.jpg"
import mobapp3 from "../Assets/app2.jpg"
import mobapp4 from "../Assets/app3.jpg"
import mobapp5 from "../Assets/app4.jpg"
import mobapp6 from "../Assets/app5.jpg"
import mobapp7 from "../Assets/app6.jpg"

import react from "../Assets/react2.png"
import native from "../Assets/native2.png"
import python from "../Assets/python.png"
import netdot from "../Assets/netdot.png"
import electron from "../Assets/electron.png"
import redux from "../Assets/redux.png"
import node from "../Assets/node2.png"
import aws from "../Assets/aws.png"
import figma from "../Assets/fig.png"
import hrm from "../Assets/hrm.png"
import flutter from "../Assets/flutter.png"
import map from "../Assets/maphere.png"


export default function Home() {
  
  return (
    <Layout className="trick101">
      <div className="first_page_si_code">
        <div className="row_si_main_index">
          <div className="col_si_first_page">
            {/*E4641D */}
            <div className="one_one_col">
              <span className="head_si_up">
                Making A 
              </span>
              <span className="head_si_up" style={{marginLeft:'8px', color:'#E4641D'}}>Difference </span>
              <span className="head_si_up">Through</span>
              <span className="head_si_up" style={{marginLeft:'8px', color:'#E4641D'}}>Innovation</span>
            </div>
            <div className="one_one_col">
              <p className="content_si_up">
                {" "}
                3 Const is your ideal Partner than can help you transforming
                your business with its latest tech-Capabilities while empowering
                you to stay ahead of the curve
              </p>
            </div>
            <div className="button_holders">
              {" "}
              <div className="button_si_one">Our Services</div>{" "}
              <div className="button_si_two"> Get a Quote</div>
            </div>
          </div>
          <div className="pic_once_twice">
            <img src={pic1} className="twirlpic" />
          </div>
        </div>
      </div>
      <div className="main_under1_si_first">
        <div className="under1_si_first">
          {/* <div className="Logo_si_under1">
            <img className="img_logo3_under1_main" src={logo3} />
          </div> */}
          <div className="textulity_logo">
            <div>
            <span className="heading_under1_main">
              Welcome to 
            </span>
            <span className="heading_under1_main" style={{marginLeft:'8px',color:'#E4641D'}}>
            3-Const
            </span>
            <span className="heading_under1_main">
            -Fastest Growing IT Company.
            </span>
            </div>
            <p className="p_si_under1_main">
              3-Const is an IT Software Company founded in June 2021 in
              Pakistan. We are offering multiple services in Website
              Development, Graphic Designing, Digital Marketing, and Mobile Apps
              Development. We make CMS, CRM and provide ERP solutions. 3-Const
              is a top software house in Pakistan and also a registered company
              in Pakistan (PSEB). Additional services that we provide include
              website Designing, API's Development, SEO Services and IOS app
              development. We have highly experienced web developers who have
              successfully launched various huge projects and proved their
              skills in many projects. We are responsible for the working, and
              we try to keep the best relationship with our customers. As a
              Leading Software house in Pakistan, We have designed hundreds of
              Websites, Mobile Apps, Logos and Icons for our clients with a
              unique research-based process. Our software house is spreading the
              best services in the industry of IT from last six years.
            </p>
          </div>
        </div>
      </div>
      <div className="branding_si_under1">
        {" "}
        <img src={hybella} className="branding_logos" />{" "}
        <img src={indochina} className="branding_logos" />
        <img src={google} className="branding_logos" style={{height:'150px'}}/>{" "}
      </div>
      <div className="branding_si_under12">
        {" "}
        <img src={gastor} className="branding_logos" />{" "}
        <img src={elec} className="branding_logos" />
      </div>

      {/* <-----------------------------------ONE ENDS----------------------------------------------------------------> */}

      <div className="main_si_heading">
        <p className="here_si_comma">“</p>
        <p className="content_in_heading">OUR SERVICES</p>
        <p className="here_si_comma">”</p>
      </div>

      {/* <-----------------------------------Two Starts----------------------------------------------------------------> */}

      <div id="page2" className="Services_si_one-o-one" style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
        <div className="service_rows">
          <div className="main_card_service">
            <div className="div_si_logo_service">
              {" "}
              <img className="logo_wepdev_image" src={business} />
            </div>
            <div className="heading_services_provided">
              <p className="heading_si_developmentsite">Website Development</p>{" "}
            </div>
            <div className="content_service_si_main">
              <p className="p_si_developmentsite">
                {" "}
                Our website development company works with clients based all
                over Pakistan and worldwide. A website is the central tool for
                the visibility of a business on the Internet. An effective
                website will not only strengthen the attraction, but also the
                acquisition and retention of new customers
              </p>
            </div>
            <div className="view_more_arrow">
              {" "}
              <p className="view_more_pic_txt"> View More</p>{" "}
              <img className="img_arrow_opens" src={arrow} />
            </div>
          </div>
          <div className="main_card_service">
            <div className="div_si_logo_service">
              {" "}
              <img className="logo_wepdev_image" src={digital} />
            </div>
            <div className="heading_services_provided">
              <p className="heading_si_developmentsite">Graphic Designing</p>{" "}
            </div>
            <div className="content_service_si_main">
              <p className="p_si_developmentsite">
                {" "}
                A visual identity that will allow you to stand out, attract
                attention and shine in your own way in an already very popular
                market. An identity that generates results that exceed
                expectations. For this, we believes that design, in addition to
                its aesthetic role, must above all be at the service of
                functionality.{" "}
              </p>
            </div>
            <div className="view_more_arrow">
              {" "}
              <p className="view_more_pic_txt"> View More</p>{" "}
              <img className="img_arrow_opens" src={arrow} />
            </div>
          </div>
          <div className="main_card_service">
            <div className="div_si_logo_service">
              {" "}
              <img className="logo_wepdev_image" src={ios} />
            </div>
            <div className="heading_services_provided">
              <p className="heading_si_developmentsite">Digital Marketing</p>{" "}
            </div>
            <div className="content_service_si_main">
              <p className="p_si_developmentsite">
                {" "}
                We will do digital marketing for your brand, your company, your
                products / services. The world is currently online, as are
                brands, companies, products and services in order to reach and
                interact with as many customers as possible. We merge marketing
                with design and technology to provide you with a complete
                digital marketing package.
              </p>
            </div>
            <div className="view_more_arrow">
              {" "}
              <p className="view_more_pic_txt"> View More</p>{" "}
              <img className="img_arrow_opens" src={arrow} />
            </div>
          </div>
        </div>

        <div className="service_rows">
          <div className="main_card_service">
            <div className="div_si_logo_service">
              {" "}
              <img className="logo_wepdev_image" src={graphic} />
            </div>
            <div className="heading_services_provided">
              <p className="heading_si_developmentsite">Mobile Apps</p>{" "}
            </div>
            <div className="content_service_si_main">
              <p className="p_si_developmentsite">
                {" "}
                To improve your digital strategy and benefit from all the
                advantages of the mobile digital age, the mobile application
                allows you to open new distribution channels for your business.
                A dedicated application makes it possible to improve the
                visibility of brands, build customer loyalty, promote, locate
                products and services or even improve your company's business{" "}
              </p>
            </div>
            <div className="view_more_arrow">
              {" "}
              <p className="view_more_pic_txt"> View More</p>{" "}
              <img className="img_arrow_opens" src={arrow} />
            </div>
          </div>
          <div className="main_card_service">
            <div className="div_si_logo_service">
              {" "}
              <img className="logo_wepdev_image" src={crm} />
            </div>
            <div className="heading_services_provided">
              <p className="heading_si_developmentsite">CRM Software</p>{" "}
            </div>
            <div className="content_service_si_main">
              <p className="p_si_developmentsite">
                {" "}
                Now a days CRM is the most important approach to manage a
                company's interaction with potential clients. We are the best
                CRM software and website development company in Pakistan with
                highly skilled CRM software developers in our Team. CRM Software
                uses complex data analysis of current and old clients to more
                improve business strategies.
              </p>
            </div>
            <div className="view_more_arrow">
              {" "}
              <p className="view_more_pic_txt"> View More</p>{" "}
              <img className="img_arrow_opens" src={arrow} />
            </div>
          </div>
          <div className="main_card_service">
            <div className="div_si_logo_service">
              {" "}
              <img className="logo_wepdev_image" src={aso} />
            </div>
            <div className="heading_services_provided">
              <p className="heading_si_developmentsite">SEO</p>{" "}
            </div>
            <div className="content_service_si_main">
              <p className="p_si_developmentsite">
                {" "}
                We analyze and define the keywords searched in Google relative
                and essential to your business development, the objective being
                to be visible on the 1st page of Google. Then, we apply an SEO
                strategy, also called natural referencing, and aimed at
                optimizing the 3 pillars of SEO: the technical performance of
                your website.
              </p>
            </div>
            <div className="view_more_arrow">
              {" "}
              <p className="view_more_pic_txt"> View More</p>{" "}
              <img className="img_arrow_opens" src={arrow} />
            </div>
          </div>
        </div>

        <div className="service_rows">
          <div className="main_card_service">
            <div className="div_si_logo_service">
              {" "}
              <img className="logo_wepdev_image" src={seo} />
            </div>
            <div className="heading_services_provided">
              <p className="heading_si_developmentsite">IOS</p>{" "}
            </div>
            <div className="content_service_si_main">
              <p className="p_si_developmentsite">
                {" "}
                We Design & Develop native iOS applications that dynamically
                adapt multiple screen sizes of iPhone & iPad. The App Store is a
                platform provided by apple for distributing apps by developers
                to users.
              </p>
            </div>
            <div className="view_more_arrow">
              {" "}
              <p className="view_more_pic_txt"> View More</p>{" "}
              <img className="img_arrow_opens" src={arrow} />
            </div>
          </div>
          <div className="main_card_service">
            <div className="div_si_logo_service">
              {" "}
              <img className="logo_wepdev_image" src={Mobileapp} />
            </div>
            <div className="heading_services_provided">
              <p className="heading_si_developmentsite">ASO</p>{" "}
            </div>
            <div className="content_service_si_main">
              <p className="p_si_developmentsite">
                {" "}
                Most of the traffic comes from the first 3-5 positions in the
                SERP. Therefore, we increase the visibility of the application
                in the search results: we conduct text optimization taking into
                account the features of the store and their ranking algorithms.
                To increase the conversion to the installation, we work on the
                icon and screenshots to make the application more.
              </p>
            </div>
            <div className="view_more_arrow">
              {" "}
              <p className="view_more_pic_txt"> View More</p>{" "}
              <img className="img_arrow_opens" src={arrow} />
            </div>
          </div>
          <div className="main_card_service">
            <div className="div_si_logo_service">
              {" "}
              <img className="logo_wepdev_image" src={webdev} />
            </div>
            <div className="heading_services_provided">
              <p className="heading_si_developmentsite">
                Business Intelligence
              </p>{" "}
            </div>
            <div className="content_service_si_main">
              <p className="p_si_developmentsite">
                We cover our clients needs with data warehouses, OLAP cubes,
                reports and dashboards. Predicting user behavior enables
                organization’s to maximize business efficiency and provide
                better customer experiences.
              </p>
            </div>
            <div className="view_more_arrow">
              {" "}
              <p className="view_more_pic_txt"> View More</p>{" "}
              <img className="img_arrow_opens" src={arrow} />
            </div>
          </div>
        </div>
      </div>

      {/*-----------------------------------Two Ends-----------------------------------------------------------------------  */}

      <div className="main_si_heading2">
        <p className="here_si_comma">“</p>
        <p className="content_in_heading">OUR LATEST PROJECTS</p>
        <p className="here_si_comma">”</p>
      </div>

      {/* <-----------------------------------Three Starts---------------------------------------------------------------->*/}

      <div className="main_three_projects">
        <div className="main_header_projects">
          <p className="heading_p_h1"> Mobile Applications</p>
        </div>

        <div className="column_si_projects_display">
          <div className="row_si_projects_display">
            <div className="projectos_desc">
              <img src={mobapp2} className="image_si_proj" />
              <p className="para_si_title">Project Today App</p>
            </div>
            <div className="projectos_desc">
              <img src={mobapp3} className="image_si_proj" />
              <p className="para_si_title">Project Tele-Med</p>
            </div>
            <div className="projectos_desc">
              <img src={mobapp4} className="image_si_proj" />
              <p className="para_si_title">Project Quran</p>
            </div>
          </div>
          <div className="row_si_projects_display2">
            <div className="projectos_desc">
              <img src={mobapp5} className="image_si_proj" />
              <p className="para_si_title">Project Quiet Cafe</p>
            </div>
            <div className="projectos_desc">
              <img src={mobapp6} className="image_si_proj" />
              <p className="para_si_title">Project Mahol</p>
            </div>
            <div className="projectos_desc">
              <img src={mobapp7} className="image_si_proj" />
              <p className="para_si_title">Project Elite Edge Wear</p>
            </div>
          </div>
        </div>
      </div>
      <div className="column_si_projects_display2">
        <div className="main_header_projects">
          <h1 className="heading_p_h1"> WEBSITE DESIGNS</h1>
        </div>
        <div className="row_si_projects_display">
          <div className="projectos_desc">
            <img src={web2} className="image_si_proj2" />
            <p className="para_si_title">Project Algo</p>
          </div>
          <div className="projectos_desc">
            <img src={web3} className="image_si_proj2" />
            <p className="para_si_title">Project Josh</p>
          </div>
        </div>
        <div className="row_si_projects_display2">
          <div className="projectos_desc">
            <img src={web4} className="image_si_proj2" />
            <p className="para_si_title">Project Polars</p>
          </div>
          <div className="projectos_desc">
            <img src={web69} className="image_si_proj2" />
            <p className="para_si_title">Project Popcornopolis</p>
          </div>
        </div>
      </div>
      {/*----------------------------------------------Three Ends----------------------------------------------------------  */}

      <div className="main_si_heading">
        <p className="here_si_comma">“</p>
        <p className="content_in_heading">
          We Are Working On These Technologies
        </p>
        <p className="here_si_comma">”</p>
      </div>

      {/* <-----------------------------------Four Starts---------------------------------------------------------------->*/}

      <div className="last_page_column">
        <div className="last_page_si_row">
          <div className="background_si_image">
            <img className="image_si_last_page" src={react} />
          </div>
          <div className="background_si_image">
            <img className="image_si_last_page" src={native} />
          </div>
          <div className="background_si_image">
            <img className="image_si_last_page" src={flutter} />
          </div>
          <div className="background_si_image">
            <img className="image_si_last_page" src={node} />
          </div>
          <div className="background_si_image">
            <img className="image_si_last_page" src={netdot} />
          </div>
          <div className="background_si_image">
            <img className="image_si_last_page" src={electron} />
          </div>
        </div>

        <div className="last_page_si_row2">
          <div className="background_si_image">
            <img className="image_si_last_page" src={aws} />
          </div>
          <div className="background_si_image">
            <img className="image_si_last_page" src={figma} />
          </div>
          <div className="background_si_image">
            <img className="image_si_last_page" src={redux} />
          </div>
          <div className="background_si_image">
            <img className="image_si_last_page" src={react} />
          </div>
          <div className="background_si_image">
            <img className="image_si_last_page" src={hrm} />
          </div>
          <div className="background_si_image">
            <img className="image_si_last_page" src={python} />
          </div>
        </div>
      </div>

      {/* <-----------------------------------lastest Starts------------------------------------------------------------>*/}

      <div className="row_si_last_page_forms">
        <div className="column_si_last_page_form">
          <h1 className="heading_fi_last_page_form">Start a Project With Us</h1>
          <p className="p_si_last_page_form">Call us now to get an estimate.</p>
          <div className="row_si_dialog_box">
            <div className="button_entry">
              <p className="sipi_title">Schedule a Call</p>
              <p className="p_si_pisi"> Call us Anytime</p>
            </div>
            <div className="button_entry">
              <p className="sipi_title">Live Chat</p>
              <p className="p_si_pisi">Discuss your Project</p>
            </div>
          </div>
          <iframe className="map_here" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57886.71030305265!2d67.10093191913002!3d24.934815740603437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339d23c6f44ff%3A0xecbd043d8b12a079!2s3Const%20(Pvt)%20Ltd.!5e0!3m2!1sen!2s!4v1660653571568!5m2!1sen!2s"} />
        </div>
        
        <div className="column_si_two_tippsy">
          <h1 className="heading_si_input_entry">Get In Touch</h1>
          <p className="p_si_input_entry">Talk to our experts in USA and Pakistan for your next IT development project.</p>
          <div className="house_si_rowsi">
            <input type="text" placeholder="Name" className="tex_si_small" />
            <input type="email" placeholder="Email" className="tex_si_small" />
          </div>
          <div className="house_si_rowsi">
            <input type="number" placeholder="Phone" className="tex_si_small" />
            <select className="tex_si_small"  >
              <option className="tex_si_small">Select</option>
              <option className="tex_si_small">Saab</option>
              <option className="tex_si_small">Mercedes</option>
              <option className="tex_si_small">Audi</option>
            </select>
          </div>
          <div className="house_si_rowsi2">
          <textarea  type="text" placeholder="Message" className="tex_si_big" />
          <div className="house_si_entry">SUBMIT</div>

          </div>
          
        </div>
      </div>
    </Layout>
  )
}
