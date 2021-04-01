import React from "react"
import Container from "./Container"
import vector1 from "../assets/images/vector1.svg"
import cleaning from "../assets/images/cleaning.svg"
import "../css/component.css"

const LandingSection = props => {
    return (
        <div className="landing w-full md:py-48 py-32 flex flex-col items-center h-screen justify-center">  
            <Container className="flex flex-col justify-center items-center text-shadow text-white" style={{transform:`translateY(${props.offsetY*1.1}px)`}}>
                <div className="flex flex-col text-center w-2/3">
                    <h1 className="font-heading md:text-7xl text-5xl leading-none uppercase tracking-wide md:py-16 py-8">Lorem ipsum dolor sit amet</h1>
                    <h4 className="md:py-8 py-4 md:text-2xl text-xl">Integer vulputate lorem justo, at placerat est bibendum sed. Praesent non est eget leo dictum rutrum. Donec venenatis libero a consequat ultricies. Praesent id rhoncus metus.</h4>
                </div>
            </Container>
            {/* <div className="lg:w-1/3 md:w-1/2 w-11/12 z-0 relative md:pt-16 pt-2">
                <img className="z-0 w-full absolute " src={vector1} alt=""/>
                <img className="z-10 w-full absolute transform translate-x-12 translate-y-6" src={cleaning} alt="" /> 
            </div> */}
        </div>
    );
}

export default LandingSection;