import React from 'react'
import Build from '../component/Build'
import Offering from '../component/Offering'
import Movinglogo from '../component/Movinglogo'
import Gettingstarted from '../component/Gettingstarted'
import Whyjoin from '../component/Whyjoin'
import Join from '../component/Join'
import Upcomingevents from '../component/upcomingevents'
import Changemaker from '../component/Changemaker'
import Knowledge from '../component/knowledge'
import Accordian from '../component/Accordian'
import Newslatter from '../component/Newslatter'
import Carosal from './Carousel/Carousel'
import Bluerectangle from '../component/Bluerectangle'


const Home = () => {
    return (
        <div >
            <Build />
            <Offering />
            <Carosal />      
            <Gettingstarted />
            <Whyjoin />
            <Join />
            <Upcomingevents />
            <Changemaker />
            <Knowledge />
            <Bluerectangle />
            <Accordian />
            <Newslatter />
        </div>
    )
}

export default Home
