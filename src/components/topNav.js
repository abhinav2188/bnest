import React,{useEffect, useState} from "react";
import logo from "../assets/bionest_r.svg"
import Container from "./Container"
import Slider from "../components/UI/slider"


const TopNav = props => {

    const [flag, setFlag] = useState(false);
    useEffect(()=>{
        if(props.offsetY>100)
        setFlag(true);
        else
        setFlag(false);
    },[props.offsetY]);
    
    const [showSlider, setShowSlider ] = useState(false);

    const NavLink = (props) => {
        return (
            <a href={props.to} className={`${props.className} md:px-4 px-2 md:py-2 py-4  md:transition-text-btw transition-text-wtb `} >{props.children}</a>
        );
    }

    const NavigationLinks =[ 
        <NavLink to="#home" >Home</NavLink>,
        <NavLink to="#about" >About Us</NavLink>,
        <NavLink to="#products" >Area of Focus</NavLink>,
        <NavLink to="#contact" >Contact Us</NavLink>
    ];

    return (
        <>
        <div className={`z-30 fixed w-full flex justify-center bg-white ${flag?"bg-opacity-100 md:shadow shadow-sm ":"bg-opacity-50"} transition-all duration-500 `} id={props.id}>
        <Container className={`flex items-center justify-between py-2 uppercase font-semi-bold z-30`}>
            <div className="">
                <a href="#home">
                    <img className="md:h-28 h-20 md:px-2 px-1 py-2" src={logo} alt="BioNestLogo"/>
                </a>
            </div>
            <div className="md:flex items-center hidden ">
                {NavigationLinks}
            </div>
            <button className={`md:hidden flex items-center transition-text-btw focus:outline-none`} onClick={()=>setShowSlider(true)}>
            <svg className="fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97" >
                    <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                        c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
                    <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                        S379.58,180.455,372.939,180.455z"/>
                    <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
                        c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/>
            </svg>
            </button>
        </Container>
        </div>
        <Slider close={setShowSlider} show={showSlider}>
            <div className="flex flex-col uppercase h-full" onClick={()=>setShowSlider(false)}>
                <div className="flex flex-col divide-y">
                    {NavigationLinks}
                </div>
            </div>
        </Slider>
        </>
    );
} 

export default TopNav; 