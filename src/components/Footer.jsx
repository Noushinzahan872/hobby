import React from 'react';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaLinkedinIn, FaSquareYoutube } from 'react-icons/fa6';
import logo from '../assets/4b5591da-dab0-4ac8-80fb-3def19dbabd6.jpeg'



const Footer = () => {
    return (
      <>
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">

    <aside>
    <img className='w-[80px]' src={logo} alt=''></img>
    <p>
    Copyright © 2025 - All right reserved
    </p>
  </aside>

  <nav>
    <h6 className="footer-title">SERVICES</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Hobbes</h6>
    <a className="link link-hover">createGroup</a>
    <a className="link link-hover">AllGroup</a>
    <a className="link link-hover">MyGroup</a>
  </nav>
  
  <nav>
    <div className="grid grid-cols-col gap-4">

    <h6 className="footer-title">SOCIAL ICONS</h6>
      <a target="_blank" href="https://web.facebook.com/Noushin Zahan/"><FaFacebook className='h-10px'></FaFacebook></a>

      {/* <a target="_blank"  href="https://www.youtube.com/@NOUSHINZAHAN"><FaSquareYoutube></FaSquareYoutube></a> */}

      <a target="_blank" href="https://www.linkedin.com/in/noushinjahan"><FaLinkedinIn></FaLinkedinIn></a>

      <a target="_blank" href="https://github.com/Noushinzahan872"><FaGithub></FaGithub></a>

    </div>
  </nav>
</footer>
</>
    );
};

export default Footer;