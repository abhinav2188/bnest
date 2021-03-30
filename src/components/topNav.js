import React from "react";
import logo from "../assets/bioNest LOGO.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {Link,graphql,useStaticQuery} from "gatsby"
import Container from "./Container"

const TopNav = props => {
    const {site} =  useStaticQuery(
        graphql`
        query{            
            site{
                siteMetadata{
                    socialLinks{
                        facebook
                        instagram
                        phone
                        email
                    }
                }
            }
        }`
    );
    return (
        <Container className="fixed divide-y flex flex-col md:pt-4 pt-2 uppercase font-semi-bold z-30" id={props.id}>
        <div className="flex items-center justify-between w-full md:py-4 py-2">
            <div>
                <img className="md:h-16 h-12 px-2" src={logo} alt="BioNestLogo"/>
            </div>
            <div>
                <Link to={site.siteMetadata.socialLinks.facebook} className="px-2 transform transition-all duration-200 hover:scale-110">
                    <FontAwesomeIcon icon={faFacebook} className="md:text-xl" />
                </Link>
                <Link to={site.siteMetadata.socialLinks.instagram} className="px-2">
                    <FontAwesomeIcon icon={faInstagram} className="md:text-xl" />
                </Link>
                <Link to="#" className="px-2">
                    Contact
                </Link>
            </div>
        </div>
        <div className="flex items-center md:py-4 py-2">
            <Link to="#" className="md:px-4 px-2">About</Link>
            <Link to="#" className="md:px-4 px-2">Focus Area</Link>
        </div>

        </Container>

    );
} 

export default TopNav;