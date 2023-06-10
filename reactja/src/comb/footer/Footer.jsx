import React from 'react';
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <div className='footer'>
            <h1 className='text1'>this app my frist app with react.js</h1>
            <h3 className='text2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, laudantium pariatur ipsa eligendi officiis, numquam velit .</h3>
            <h2 className='text3'>the footer section</h2>
            <h1 className='text4'>i am abdo lotfy solom:</h1>

            <div className='icons'>
            <FontAwesomeIcon className='margin' icon={faUser} ></FontAwesomeIcon>
            <FontAwesomeIcon className='margin' icon={faUser} ></FontAwesomeIcon>
            <FontAwesomeIcon className='margin' icon={faUser} ></FontAwesomeIcon>
            <FontAwesomeIcon className='margin' icon={faUser} ></FontAwesomeIcon>
            </div>
            
        </div>
    );
}

export default Footer;
