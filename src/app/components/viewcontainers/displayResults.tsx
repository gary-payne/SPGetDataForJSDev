import * as React from "react";
let update = require("react-addons-update");
import DisplayResultsView from "../views/DisplayResults_View";

interface IProps {data: any, message: string, isWarning: boolean};
interface IState {};

class DisplayResults extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <DisplayResultsView data={this.props.data} message={this.props.message} isWarning={this.props.isWarning} />
        );
    }
}

export default DisplayResults;