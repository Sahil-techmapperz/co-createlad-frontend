import React from 'react'
import Vedio from '../assets/Component38.png'
import './build.css';
import BG  from "../assets/homebannerbg.png";

const Build = () => {
    return (
        <div style={{ "backgroundImage": `url(${BG})` }}>
        <div  className='flex ml-10 mr-10 items-center buildContainer'>
            <div >
                <div>
                    <h1 className='text-5xl font-normal' > Best Place In The World To Build Your Startup</h1>
                    <p className='mt-10'>Co Create Labs is a game-changer in the startup ecosystem. It enables access to a global platform that brings together the best and brightest entrepreneurs, investors, mentors, and philanthropic organizations in an integrated ecosystem.</p>
                </div>

                <div className='flex gap-20 mt-10'>
                    <button className='p-5 rounded-r-full font-bold text-white bg-blue-500 rounded-l-full w-150 border border-solid'>Start Growing</button>
                    <button className='p-5 rounded-r-full font-bold text-white bg-blue-500 rounded-l-full w-150 border border-solid' >We are we</button>
                </div>

            </div>

            <div>
                <img className='buildImage '  src={Vedio} />
            </div>
        </div>
        </div>
    )
}

export default Build
