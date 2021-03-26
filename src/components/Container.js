import React from "react";

const Container = (props) => {
    return (
        <div className={`lg:w-3/4 md:w-4/5 w-11/12 ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Container;