import React from "react"
import Container from "./Container"
import vector from "../assets/images/vector3.svg"
import threeR from "../assets/images/3r.svg"


const About = props => {
    return (
        <div className="flex flex-col items-center h-screen md:py-32 py-32 overflow-y-hidden">
            <Container className="flex md:text-right lg:w-1/2 md:w-3/4 ">
            <div className="flex flex-col lg:w-1/2 md:w-2/3 lg:px-8 md:pr-8 px-4 py-4 ">
                <h1 className="font-heading text-gradient-1 md:text-6xl text-4xl leading-none pb-16 uppercase text-green-500 tracking-wide ">About Us</h1>
                <p className="py-2">With a legacy of more than 50 years in paper industry we strive to provide sustainable alternatives to single use plastics and non biodegradable products. </p>
                <p className="py-2">Our vision and mission is to be the one stop solution provider with recyclable,  compostable and environment friendly products and techniques and closing the gates to the landfill for a greener and sustainable future.</p>
            </div>
            </Container>
            <div className="lg:w-1/3 md:w-1/2 w-3/4 relative md:pt-32 md:pb-64 py-24 self-end transform md:-translate-x-1/2">
                <img src={threeR} alt="" className="w-3/4 absolute z-10 right-0 "/>
                <img src={vector} alt="" className="w-3/5 absolute z-0 right-0 transform md:translate-x-36 -translate-y-1/3 translate-x-16"/>
            </div>
       </div>
    );
}

export default About;