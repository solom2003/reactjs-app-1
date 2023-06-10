import React from 'react';
import "./home.css";
import img1 from'./4565.jpg';

const Home = () => {
    return (
        <div className='bgimg'>
            <img className='img' src={img1} alt="" />
            <div className='text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque aliquam voluptas architecto blanditiis temporibus quia ducimus aliquid mollitia dignissimos nostrum, laboriosam.</p>
            </div>
            <button className='button1'>LearnMore</button>
            <button className='button2'>BuyNow</button>
        </div>
    );
}

export default Home;
