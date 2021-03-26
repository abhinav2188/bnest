import React from "react";
import TopNav from "../components/TopNav";
import SEO from "../components/SEO";
import LandingSection from "../components/LandingSection";

const home = (props) => {
  return (
    <>
    <SEO/>
    <div class="w-full h-screen bg-gray-100 flex flex-col items-center font-content text-gray-800">
        <TopNav/>
        <LandingSection/>
    </div>
    </>
  );
}
export default home;
