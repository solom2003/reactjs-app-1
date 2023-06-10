import React from 'react';
import img3 from "./2672335.jpg";
import "./aboutus.css";

const Aboutus = () => {
    return (
        <div className='conr'>
            <img src={img3} alt="" />
            <div className='conr1'>
            <h1 className='par1'>My Name is Abdelrhman: </h1>
            <h2 className='par2'>this is my frist React app.</h2>
            <p className='per3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nemo vero. Tempore commodi cum, labore perspiciatis repudiandae molestias repellat earum provident fugit blanditiis sunt excepturi quam dignissimos voluptatem voluptas explicabo.</p>
            </div>
        </div>
    );
}

export default Aboutus;
