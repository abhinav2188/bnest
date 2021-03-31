import React,{useState} from "react";
import logo from "../assets/bioNest LOGO.svg"
import fb from "../assets/svg-icons/facebook.svg"
import instagram from "../assets/svg-icons/instagram.svg"
import menu from "../assets/svg-icons/menu.svg"
import {Link,graphql,useStaticQuery} from "gatsby"
import Container from "./Container"
import Slider from "../components/UI/slider"



const TopNav = props => {
    const {site} =  useStaticQuery(
        graphql`
        query{            
            site{
                siteMetadata{
                    socialLinks{
                        facebook
                        instagram
                    }
                }
            }
        }`
    );
    const socialLinks = [
    <Link to={site.siteMetadata.socialLinks.facebook} className="px-2 flex items-center">
    <img src={fb} alt="" className="w-5"/>
    </Link>,
    <Link to={site.siteMetadata.socialLinks.instagram} className="px-2 flex items-center">
    <img src={instagram} alt="" className="w-5"/>
    </Link>,
    ];

    const NavigationLinks =[ 
        <Link to="#" className="md:px-4 px-2 py-4">About</Link>,
        <Link to="#" className="md:px-4 px-2 py-4">Focus Area</Link>,
        <Link to="#" className="md:px-4 px-2 py-4">Contact</Link>
    ];

    const [showSlider, setShowSlider ] = useState(false);

    return (
        <>
        <Container className="fixed divide-y flex flex-col md:pt-4 pt-2 uppercase font-semi-bold z-30 md:text-base text-xs" id={props.id}>
        <div className="flex items-center justify-between w-full md:py-4 py-2">
            <div>
                <img className="md:h-16 h-12 md:px-2 px-1" src={logo} alt="BioNestLogo"/>
            </div>
            <div className="md:flex items-center hidden ">
                {NavigationLinks}
                <div className="flex items-center divide-x">
                {socialLinks}
                </div>
            </div>
            <button className="md:hidden flex items-center">
                <img className="w-5" src={menu} alt="" onClick={()=>setShowSlider(true)}/>
            </button>
        </div>
        </Container>
        <Slider close={setShowSlider} show={showSlider}>
        <div className="flex flex-col uppercase text-xs h-full text-white ">
            <div className="flex flex-col flex-grow divide-y ">
                {NavigationLinks}
            </div>
            <div className="flex self-center divide-x  flex-end py-4">
                {socialLinks}
            </div>
        </div>
        </Slider>
        </>
    );
} 

export default TopNav; 