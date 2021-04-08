import React from "react"
import Carousel from "./UI/carousel";
import {StaticImage} from "gatsby-plugin-image"

const display = [
    {
        imgSrc : <StaticImage src="../assets/images/display/s1.jpg" className="h-screen" placeholder="blurred" alt=""/>,
        description : <p className="text-white md:transform md:-translate-x-1/2" >A global issue we need to understand </p>
    },
    {
        imgSrc : <StaticImage src="../assets/images/display/s2.jpeg" className="h-screen" placeholder="blurred" alt=""/>,
        description : <p className="text-white transform lg:translate-x-0 translate-x-16"> Together we can make a difference</p>
    },
    {
        imgSrc : <StaticImage src="../assets/images/display/s3.jpg" className="h-screen" placeholder="blurred" alt=""/>,
        description : <p className="text-white transform lg:translate-y-32 translate-y-16">Commited to offer sustainable solutions</p>
    },
]

const LandingSection = props => {
    return (
        <div className="w-full h-screen" id="home">
            <Carousel elements={display}/>
        </div>
    );
}

export default LandingSection;