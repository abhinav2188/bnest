import React from "react"
import Container from "./Container"
import {Link} from "gatsby"

const LandingSection = props => {
    return (
        <Container className="flex justify-end my-16">
        <div className="flex flex-col lg:w-1/2 md:w-2/3 lg:px-8 md:pr-8 pl-16 py-4  ">
            <h1 className="font-heading text-4xl leading-none pb-16 uppercase text-green-500 tracking-wide">Lorem ipsum dolor sit amet</h1>
            <p className="font-bold">Integer vulputate lorem justo, at placerat est bibendum sed. Praesent non est eget leo dictum rutrum. Donec venenatis libero a consequat ultricies. Praesent id rhoncus metus. Aliquam mattis vulputate est, ut malesuada tortor.</p>
            <Link to="#" className="rounded-lg mt-16 px-8 py-2 self-start font-bold caplitalize text-gray-100 bg-gradient-to-r from-green-400 to-blue-800 hover:from-blue-800 hover:to-green-400  ">Discover Us</Link>

        </div>
        </Container>
    );
}

export default LandingSection;