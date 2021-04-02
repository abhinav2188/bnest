import React from "react"
import Container from "./Container"
import Carousel from "./UI/carousel";
import {StaticImage} from "gatsby-plugin-image"

const display = [
    {
        imgSrc : <StaticImage src="../assets/images/display/bg1.jpg" className="h-screen" placeholder="blurred"/>,
        description : <p>Vivamus placerat, metus quis efficitur sodales, leo ante facilisis felis, id sodales dui tortor ac metus.</p>
    },
    {
        imgSrc : <StaticImage src="../assets/images/display/91352.jpg" className="h-screen" placeholder="blurred"/>,
        description : <p className="text-white">Nunc hendrerit aliquet faucibus. Maecenas fringilla ac nisl eget interdum. Aenean laoreet dui justo, et imperdiet velit elementum a. Donec tristique</p>
    },
    {
        imgSrc : <StaticImage src="../assets/images/display/close-up-picture-sapling-plant-is-growing.jpg" className="h-screen" placeholder="blurred"/>,
        description : <p className="text-white">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    },
]

const LandingSection = props => {
    return (
        <div className="w-full h-screen">
            {/* <StaticImage src="../assets/images/display/bg1.jpg" className="h-screen" placeholder="blurred"/> */}
            <Carousel elements={display}/>
        </div>
    );
}

export default LandingSection;

        // <div className="landing w-full md:py-48 py-32 flex flex-col items-center h-screen justify-center">  
        //     <Container className="flex flex-col justify-center items-center text-shadow text-white" style={{transform:`translateY(${props.offsetY*1.1}px)`}}>
        //         <div className="flex flex-col text-center w-2/3">
        //             <h1 className="font-heading md:text-7xl text-5xl leading-none uppercase tracking-wide md:py-16 py-8">Lorem ipsum dolor sit amet</h1>
        //             <h4 className="md:py-8 py-4 md:text-2xl text-xl">Integer vulputate lorem justo, at placerat est bibendum sed. Praesent non est eget leo dictum rutrum. Donec venenatis libero a consequat ultricies. Praesent id rhoncus metus.</h4>
        //         </div>
        //     </Container>
        //     {/* <div className="lg:w-1/3 md:w-1/2 w-11/12 z-0 relative md:pt-16 pt-2">
        //         <img className="z-0 w-full absolute " src={vector1} alt=""/>
        //         <img className="z-10 w-full absolute transform translate-x-12 translate-y-6" src={cleaning} alt="" /> 
        //     </div> */}
        //     <Carousel elements={el}></Carousel>
        // </div>
