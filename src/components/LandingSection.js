import React from "react"
import Container from "./Container"
import {Link} from "gatsby"
import sapling from "../assets/images/sapling3.svg"
import vector1 from "../assets/images/vector1.svg"
import cleaning from "../assets/images/cleaning.svg"
import "./component.css"


const LandingSection = props => {
    return (
        <div className="slant w-full md:py-48 py-32 flex flex-col items-center bg-gradient-to-r from-blue-200 to-green-200 transform skew-y-3">
            <Container className="flex md:flex-row flex-col justify-center transform -skew-y-3">
            <div className="w-1/2 flex justify-center self-center p-4">
                <img className="md:w-80 w-48" src={sapling} alt="" />
            </div>
            <div className="flex flex-col lg:w-1/2 md:w-3/4 p-4 md:text-left text-right" >
                <h1 className="font-heading  md:text-6xl text-4xl leading-none uppercase text-blue-800 tracking-wide md:py-8 py-4">Lorem ipsum dolor sit amet</h1>
                <p className="md:py-8 py-4">Integer vulputate lorem justo, at placerat est bibendum sed. Praesent non est eget leo dictum rutrum. Donec venenatis libero a consequat ultricies. Praesent id rhoncus metus.</p>
                <Link to="#" className="rounded-lg md:mt-16 mt-8 px-8 py-2 md:self-start self-center font-bold caplitalize text-gray-100 bg-gradient-to-r from-green-400 to-blue-800 hover:from-blue-800 hover:to-green-400  ">Discover Us</Link>
            </div>
            </Container>
            <div className="lg:w-1/3 md:w-1/2 w-11/12 z-0 relative md:pt-16 pt-2 transform -skew-y-3">
                <img className="z-0 w-full absolute " src={vector1} alt=""/>
                <img className="z-10 w-full absolute transform translate-x-12 translate-y-6" src={cleaning} alt="" /> 
            </div>
        </div>
    );
}

export default LandingSection;