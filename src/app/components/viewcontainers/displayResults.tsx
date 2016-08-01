import * as React from "react";
let update = require("react-addons-update");
import DisplayResultsView from "../views/DisplayResults_View";

interface IProps {data: any, message: string};
interface IState {};

class DisplayResults extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        console.log("DisplayResults constructor");
    }

    public render() {
        console.log("DisplayResults render with message = '" + this.props.message + "'");
        return (
            <DisplayResultsView data={this.props.data} message={this.props.message} />
        );
    }

}

export default DisplayResults;