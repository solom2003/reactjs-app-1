import React from 'react';
import "./content.css";
import img2 from "./331323-PAGSNN-122.jpg";

const Content = () => {
    return (
        <div className='cont'>
            <div className='por'>
                <img className='img' src={img2} alt="" />
                <h3 className='typ'>typ: iphone</h3>
                <h3 className='price'>price: 500$</h3>
                <button className='button'>BAY</button>
            </div>
            <div className='por'>
                <img className='img' src={img2} alt="" />
                <h3 className='typ'>typ: iphone</h3>
                <h3 className='price'>price: 500$</h3>
                <button className='button1'>BAY</button>
            </div>
            <div className='por'>
                <img className='img' src={img2} alt="" />
                <h3 className='typ'>typ: iphone</h3>
                <h3 className='price'>price: 500$</h3>
                <button className='button2'>BAY</button>
            </div>

            <div className='por'>
                <img className='img' src={img2} alt="" />
                <h3 className='typ'>typ: iphone</h3>
                <h3 className='price'>price: 500$</h3>
                <button className='button3'>BAY</button>
            </div>
            <div className='por'>
                <img className='img' src={img2} alt="" />
                <h3 className='typ'>typ: iphone</h3>
                <h3 className='price'>price: 500$</h3>
                <button className='button4'>BAY</button>
            </div>
            <div className='por'>
                <img className='img' src={img2} alt="" />
                <h3 className='typ'>typ: iphone</h3>
                <h3 className='price'>price: 500$</h3>
                <button className='button5'>BAY</button>
            </div>
        </div>
    );
}
export default Content;
