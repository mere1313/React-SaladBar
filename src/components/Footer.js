import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import React from 'react'
import './styles/Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="footer-text">

            <h1>Find us On Social Media</h1>

                <div className="icons">
                    <FacebookIcon className='icon'/>
                    <InstagramIcon className='icon'/>
                    <TwitterIcon className='icon'/>
                    <LinkedInIcon className='icon'/>
                </div>
                <p>Merentitis Dimitrios © All rights reserved</p>
            </div>
        </section>
    )
}

export default Footer