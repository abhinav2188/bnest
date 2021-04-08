import React, {useState} from "react"
import PropTypes from "prop-types"
import "../../css/animations.css"

const Carousel = (props) =>{
    const [activeIndex,setActiveIndex] = useState(0);
    const nextElement = ()=>{
        // console.log("next");
        setActiveIndex((activeIndex+1)%props.elements.length);
        // console.log(activeIndex);
    } 
    const prevElement = ()=>{
        setActiveIndex((activeIndex-1)<0?(activeIndex-1+props.elements.length):(activeIndex-1));
    } 
    // const auto = () => {
    //     const id = setInterval(nextElement, 5000);
    //     return id;
    // };
    // useEffect(()=>{
    //     const id = auto();
    //     return () => clearInterval(id);
    // },[])
return(
        <div>
        <div className="flex">
            {props.elements.map((el,id) => (
                <div>
                    <div className={`transition-all absolute w-full ${activeIndex===id?"flex opacity-100 ":"opacity-0 scale-125"} duration-1000`}>
                        {el.imgSrc}
                    </div>
                    <div className={`flex flex-col md:w-2/5 w-1/2 transition-all absolute md:top-1/3 md:left-1/2 top-1/3 left-1/4 ${activeIndex===id?"opacity-100 ":"opacity-0 scale-125"} duration-1000 delay-500`}>
                        <p className="py-4 font-bold tracking-wide md:text-7xl text-3xl">{el.description}</p>
                    </div>
                </div>
            ))
            }
        </div>
        <button onClick={nextElement} className="self-center p-2 absolute right-0 top-1/2 transform -translate-y-1/2 text-white focus:outline-none opacity-75 hover:opacity-100 mx-2">
            <svg className="fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004">
            <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
            </svg>
        </button>
        <button onClick={prevElement} className="self-center p-2 absolute left-0 top-1/2 transform -translate-y-1/2 text-white focus:outline-none opacity-75 hover:opacity-100 transition-all mx-2">
        <svg className="fill-current w-5 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.004 492.004">
            <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
            </svg>
        </button>
        <div className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2 py-8">
            {props.elements.map((el,index)=>
                <button className={`w-3 h-3 rounded-full transition-all ${activeIndex===index?"opacity-100":"opacity-50"} bg-green-400 mx-1 focus:outline-none`} onClick={()=>setActiveIndex(index)}> </button>
            )}
        </div>
        </div> 
    );
}

Carousel.propTypes = {
    elements : PropTypes.array,
}

export default Carousel;


