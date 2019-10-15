import React from 'react';

import git from '../assets/github.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';

const Footer = ({tgl})=> (

    <footer>

        { tgl ?
        <div>
        <div className="footer-container wrapper ">
            <div className="footer-item">
                <h3> Github</h3>
                <div className="icon"> 
                 <a href="https://github.com/PawelDomaradzki?tab=repositories" target="_blank" rel="noopener noreferrer"><span>Odwiedź mojego Git'a</span><div className="icn" style={{backgroundImage: `url(${git})`}}></div> </a>
                
                </div>
               
            </div>

            <div className="footer-item contact">
            <h3>Kontakt</h3>
           
            <h4><span>661 047 271</span> <div className='icn' style={{backgroundImage:`url(${phone})`}}> </div> </h4>
            <h4><span>domardzkicode@gmail.com </span> <div className='icn' style={{backgroundImage:`url(${mail})`}}> </div></h4>
         </div>          

        </div>
        </div>
        :
        <div>
        <div className="footer-container wrapper ">
            <div className="footer-item">
                <h3> Github</h3>
                <div className="icon"> 
                 <a href="https://github.com/PawelDomaradzki?tab=repositories" target="_blank" rel="noopener noreferrer"><span>Visit my Github</span><div className="icn" style={{backgroundImage: `url(${git})`}}></div> </a>
                
                </div>
               
            </div>

            <div className="footer-item contact">
            <h3>Contact</h3>
           
            <h4><span>661 047 271</span> <div className='icn' style={{backgroundImage:`url(${phone})`}}> </div> </h4>
            <h4><span>domaradzkicode@gmail.com</span> <div className='icn' style={{backgroundImage:`url(${mail})`}}> </div></h4>
         </div>          

        </div>
        </div>


        }

    </footer>
)

export default Footer;

