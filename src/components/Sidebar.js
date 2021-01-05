import React from 'react';
import instagram from '../assets/icons/instagram.svg';
import digitalartist from '../assets/digitalartist.jpg';
import tie from '../assets/icons/tie.svg';
import pin from '../assets/icons/pin.svg';
import phone from '../assets/icons/phone.svg';
import youtube from '../assets/icons/youtube.svg';
import resume from '../assets/resume.pdf';

const Sidebar =() =>{
    
    const handleEmailMe  = () =>{
        window.open("mailto:chandralekasrinivasan@gmail.com");
    }
    return(
       <div className="sidebar">
          <img src={digitalartist} alt="Chan" className="sidebar_avatar"/> 
          <div className="sidebar_name">Chandraleka <span>S</span></div>
          <div className="sidebar_item sidebar_title">3D Animator</div>
          <a href={resume} download="Chandraleka Resume.pdf">
              <div className="sidebar_item sidebar_resume">
                  <img src={tie} alt="resume" className="sidebar_icon"/>Download Resume
              </div>
          </a>
          <a href="https://www.instagram.com/vedha_scribbles/" target="_blank">
              <div className="sidebar_item sidebar_resume">
              <img src={instagram} alt="Instagram" className="sidebar_icon mr-2"/>Vedha Scribbles
              </div>
          </a>
          <a href="https://www.youtube.com/channel/UCWZWg6rnuXGoc960hRs_wpQ" target="_blank">
              <div className="sidebar_item sidebar_resume">
              <img src={youtube} alt="YouTube" className="sidebar_icon mr-2"/>Chandraleka Srinivasan
              </div>
          </a>
          <div className="sidebar_contact">
              <div className="sidebar_location">
                  <img src={pin} alt="location" className="sidebar_icon mr-1"/>Chennai, India</div>
              <div className="sidebar_phone"><img src={phone} alt="call me" className="sidebar_icon mr-1"/>+91-904-263-0566</div>
          </div>
          <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email Me</div>
       </div>
    );
}

export default Sidebar;