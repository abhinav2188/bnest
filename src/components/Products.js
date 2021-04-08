import React from "react"
import Container from "./Container"
import {StaticImage} from "gatsby-plugin-image"

const Products = (props) => {
    return (
        <Container className="flex flex-col items-center my-16 md:px-16 px-4 " id="products">
            <h1 className="text-gradient-1 md:text-6xl text-4xl leading-none md:py-16 py-8 text-green-500 font-black text-center">Products</h1>
            <div className="rounded-lg shadow-lg overflow-hidden flex md:flex-row flex-col md:my-16 my-12">
                <div className="md:w-1/2 md:h-96 h-48">
                    <StaticImage className=" h-full w-full" src="../assets/images/pd1.jpg" placeholder="blurred"/>
                </div>
                <div className="flex flex-col md:w-1/2 md:p-8 p-4 ">
                
                    <h2 className="md:py-6 py-4 text-gradient-1 md:text-4xl text-2xl font-bold">Compostable Products</h2>
                    <p className="py-2 capitalize">Water soluble bags</p>
                    <p className="py-2 capitalize">compostable paper for food packaging</p>
                    <p className="py-2 capitalize">Tableware products</p>
                </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden flex md:flex-row-reverse flex-col md:my-16 my-12">
                <div className="md:w-1/2 md:h-96 h-48">
                    <StaticImage className=" w-full h-full "src="../assets/images/pd2.jpeg" placeholder="blurred" />    
                </div>
                <div className="flex flex-col md:w-1/2 md:p-8 p-4 ">
                    <h2 className="md:py-6 py-4 text-gradient-1 md:text-4xl text-2xl font-bold">Sustainable Solutions</h2>
                    <p className="py-2">We believe the confluence of nature, design, and technology should be shared.</p>
                    <p className="py-2">We partner with both our suppliers and customers to offer a unique portfolio of products, which are both safe for people and the environment and able to generate value while still reducing their environmental impact.</p>
                </div>
            </div>
        </Container>
    );
}

export default Products;