import React from "react"
import {useStaticQuery,graphql} from "gatsby"
import Container from "./Container"
import logo from "../assets/bionest_r.svg"
import ContactForm from "./ContactForm"

const BottomNav = (props) =>{
    const {site} =  useStaticQuery(
        graphql`
        query{            
            site{
                siteMetadata{
                    address
                    phone 
                    email
                }
            }
        }`
    );

    return (
        <>
        <div className="md:mt-16 mt-8 w-full bg-green-100 flex flex-col items-center md:py-16 py-8 " id="contact">
        <div className="w-full h-12 transform -translate-y-0.5">
        <svg className="w-full md:h-12 h-8 fill-current text-white transform rotate-180 md:-translate-y-16 -translate-y-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"></path>
        </svg>

        </div>
            <Container className="flex lg:flex-row flex-col justify-around">
                <div className="flex flex-col md:px-8 px-4 divide-y items-start lg:w-1/2 py-4 my-8 font-sans">
                    <h3 className="md:py-12 py-8 font-normal text-gradient-2 self-center uppercase">Contact</h3>
                    <img className="md:h-32 h-20 py-2" src={logo} alt="BIONEST ECO SOLUTIONS"/>
                    <p className="py-2">{site.siteMetadata.address}</p>
                    <p className="py-2">{site.siteMetadata.phone}</p>
                    <p className="py-2">{site.siteMetadata.email}</p>
                </div>
                <div className="flex flex-col lg:w-96 md:px-8 px-4 py-4 shadow rounded-sm my-8 ">
                    <h3 className="md:py-12 py-8 font-normal text-gradient-2 self-center uppercase font-400">Write us a Query!</h3>                
                    <ContactForm/>
                </div>
            </Container>
        </div>
        <svg className="fill-current text-green-100 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
        <div className="flex justify-center items-center w-full bg-white p-4">
            <p>©2021 Bionest Eco Solutions</p>
        </div>
        </>
    );
}

export default BottomNav;