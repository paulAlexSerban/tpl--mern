import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./SideDrawer.scss";

const SideDrawer = (props) => {
    const content = (
        <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
            <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    );
    const portalContainer = document.getElementById("drawer-hook");

    return ReactDOM.createPortal(content, portalContainer);
};

export default SideDrawer;
