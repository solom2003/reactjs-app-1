import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBoxesStacked, faAddressCard} from '@fortawesome/free-solid-svg-icons';
import './nav.css';


function Nav() {

    return (
    <div>
        <div className='con'>
            <h2 className='logo'>logo</h2>
            <div className='search'>
                <form>
                    <FontAwesomeIcon className='searchicon' icon={faSearch}></FontAwesomeIcon>
                    <input className='in' placeholder='search' type="search"/>
                </form>
            </div>
            <div className='icon'>
                 <div><FontAwesomeIcon  className='main' icon={faHome}></FontAwesomeIcon></div>
                <div><FontAwesomeIcon  className='main' icon={faBoxesStacked}></FontAwesomeIcon></div> 
                 <div><FontAwesomeIcon  className='main' icon={faAddressCard}></FontAwesomeIcon></div>        
            </div>
            <button className='button'>clickme</button>
        </div>
    </div>
            
        
    );
}

export default Nav;
