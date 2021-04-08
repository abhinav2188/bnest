import React from "react"
import TopNav from "../components/TopNav"

const page404 = (props) =>{
    return (
        <div className="flex flex-col min-h-screen items-center">
        <TopNav/>
        <div className="flex-grow self-center">
            <p className="text-4xl font-bold text-green-500 py-16">404 Not Found</p>
        </div>
        <div className="flex justify-center items-center w-full bg-green-500 text-white p-4">
            <p>©2021 BioNest Eco Solutions</p>
        </div>
        </div>
    );
}

export default page404;