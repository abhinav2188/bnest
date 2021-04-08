import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import Head from "../components/SEO";
import LandingSection from "../components/LandingSection";
import About from "../components/About"
import BottomNav from "../components/BottomNav"
import Products from "../components/Products"

const Home = (props) => {
  const [offsetY,setOffsetY] = useState(0);
  const handleScroll = () => {
    // console.log("handleScroll");
    setOffsetY(window.pageYOffset);
  }
  useEffect(()=>{
    // console.log("useEffect");
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[]);

  
  
  return (
    <>
    <Head/>
    <div className="max-w-screen bg-white flex flex-col items-center text-gray-800 lg:text-lg overflow-x-hidden font-content">
        <TopNav offsetY={offsetY}/>
        <LandingSection offsetY={offsetY} id="landing-section"/>
        <About />
        <Products />
        <BottomNav/>
    </div>
    </>
  );
}
export default Home;
