import React from "react"
import {useStaticQuery,graphql} from "gatsby"
import Container from "./Container"
import logo from "../assets/bioNest LOGO.svg"
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
                    socialLinks{
                        facebook
                        instagram
                        skype
                    }
                }
            }
        }`
    );

    return (
        <>
        <div className="md:mt-16 mt-8 w-full bg-gray-300 flex justify-center md:py-16 py-8" id="contact">
            <Container className="flex md:flex-row flex-col md:px-16 px-4 justify-around">
                <div className="flex flex-col md:px-8 px-4 divide-y items-start md:w-1/2 py-4 my-8">
                    <h3 className="md:py-8 py-4 font-normal text-gradient-2 self-center uppercase">Contact</h3>
                    <img className="md:h-24 h-20 py-2" src={logo} alt="BIONEST ECO SOLUTIONS"/>
                    <p className="py-2">{site.siteMetadata.address}</p>
                    <p className="py-2">{site.siteMetadata.phone}</p>
                    <p className="py-2">{site.siteMetadata.email}</p>
                </div>
                <div className="flex flex-col md:w-96 md:px-8 px-4 py-4 shadow rounded-sm my-8 text-sm">
                    <h3 className="md:py-8 py-4 font-normal text-gradient-2 self-center uppercase font-400">Write us a Query!</h3>                
                    <ContactForm/>
                </div>
            </Container>
        </div>
        <div className="flex justify-center items-center w-full bg-green-500 text-white p-4">
            <p>© BioNest Eco Solutions</p>
        </div>
        </>
    );
}

export default BottomNav;