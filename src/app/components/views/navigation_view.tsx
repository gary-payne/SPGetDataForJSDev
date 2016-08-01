import * as React from "react";
import { Link } from "react-router";

//A stateless functional component
export default function(props) {
    return (
    <div className="spgetdata_navigation">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="pnp">PnP</Link></li>
        </ul>
    </div>
    );
}