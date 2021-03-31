import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import Head from "../components/SEO";
import LandingSection from "../components/LandingSection";
import About from "../components/About"
import BottomNav from "../components/BottomNav"

const Home = (props) => {
  const [offsetY,setOffsetY] = useState(0);
  const handleScroll = () => {
    console.log("handleScroll");
    setOffsetY(window.pageYOffset);
  }
  useEffect(()=>{
    document.getElementById("")
    console.log("useEffect");
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[]);


  return (
    <>
    <Head/>
    <div className="max-w-screen bg-gray-100 flex flex-col items-center text-gray-800 lg:text-lg overflow-x-hidden ">
        <TopNav/>
        <LandingSection offsetY={offsetY} id="landing-section"/>
        <About />
        <BottomNav/>
    </div>
    </>
  );
}
export default Home;
