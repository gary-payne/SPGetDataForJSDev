import * as React from "react";
let update = require("react-addons-update");
//Need to add custom index.d.ts to SPScript module folder to resolve this name!
import { RestDao } from "SPScript";
import SPScriptGetDataView from "../views/SPScriptGetData_View";

interface IProps {};
interface IState {data: any, message: string};

class SPScriptGetData extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        console.log("SPScriptGetData constructor");
        this.state = {
            data: [],
            message: ""
        };
    }

    componentDidMount() {
        try {
            let newState = update(this.state, {
                message: {$set: "Success!"}
            });
            this.setState(newState);
        } catch (e) {
            console.log("Error setting state: " + e.message);
            this.setState({data: [], message: "Success from exception block"});
        }
    }

    public render() {
        console.log("SPScriptGetData render");
        return (
            <SPScriptGetDataView data={this.state.data} message={this.state.message} />
        );
    }

}

export default SPScriptGetData;