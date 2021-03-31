import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from "react-transition-group";
import "./animations.css";
import Backdrop from "./backdrop";

const slider = props => {
    return (
        <>
        <Backdrop show={props.show} close={props.close} />
        <CSSTransition in={props.show} classNames="slide" mountOnEnter unmountOnExit timeout={500}>
            <div className="fixed h-screen w-1/3 z-50 flex flex-col bg-green-500 px-2 py-3 right-0">
                <div onClick={props.close} className="h-full">
                    {props.children}
                </div>
            </div>
        </CSSTransition>
        </>
    );
};

slider.propTypes = {
    show : PropTypes.bool,
    close: PropTypes.func
};

export default slider;