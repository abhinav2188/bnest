import React from "react"
import Container from "./Container"
import vector from "../assets/images/vector3.svg"
import threeR from "../assets/images/3r.svg"
import {StaticImage} from "gatsby-plugin-image"


const About = props => {
    return (
        <Container className="mt-32 mb-16 md:px-16 px-4 " id="about">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <StaticImage className="md:h-96 h-48" src="../assets/images/about.jpeg" placeholder="blurred"/>
            <div className="flex flex-col md:w-3/5 lg:px-16 px-4 py-4 ">
                <h1 className="text-gradient-1 md:text-6xl text-4xl leading-none md:py-16 py-8 text-green-500 font-black ">About Us</h1>
                <p className="py-2">With a legacy of more than 50 years in paper industry we strive to provide sustainable alternatives to single use plastics and non biodegradable products. </p>
                <p className="py-2">Our vision and mission is to be the one stop solution provider with recyclable,  compostable and environment friendly products and techniques and closing the gates to the landfill for a greener and sustainable future.</p>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-3/4 relative md:py-24 py-12 self-end transform md:-translate-x-1/2 -translate-y-1/2">
                <img src={threeR} alt="" className="w-3/4 absolute z-10 right-0 "/>
                <img src={vector} alt="" className="w-3/5 absolute z-0 right-0 transform md:translate-x-36 -translate-y-1/3 translate-x-16"/>
            </div>

            </div>
        </Container>
    );
}

export default About;