import * as React from "react";
import { Link } from "react-router";

//A stateless functional component
export default function(props) {
    return (
    <div className="spgetdata_navigation ms-NavBar">
        <ul className="ms-NavBar-items">
            <li className="ms-NavBar-item"><Link to="/" className="ms-NavBar-link">SPScript</Link></li>
            <li className="ms-NavBar-item"><Link to="pnp" className="ms-NavBar-link">PnP</Link></li>
        </ul>
    </div>
    );
}