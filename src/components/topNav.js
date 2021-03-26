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
        <Container className="divide-y flex flex-col md:pt-4 pt-2">
        <div className="flex items-center justify-between w-full md:py-4 py-2">
            <div>
                <img className="md:h-16 h-12" src={logo} alt="BioNestLogo"/>
            </div>
            <div>
                <Link to={site.siteMetadata.socialLinks.facebook} className="pl-2">
                    <FontAwesomeIcon icon={faFacebook} className="md:text-xl" />
                </Link>
                <Link to={site.siteMetadata.socialLinks.instagram} className="pl-2">
                    <FontAwesomeIcon icon={faInstagram} className="md:text-xl" />
                </Link>
                <Link to="#" className="pl-2">
                    Contact
                </Link>
            </div>
        </div>
        <div className="flex items-center md:py-4 py-2">
            <Link to="#" className="md:px-4 pr-4">About</Link>
            <Link to="#" className="md:px-4 pr-4">Focus Area</Link>
        </div>

        </Container>

    );
} 

export default TopNav;