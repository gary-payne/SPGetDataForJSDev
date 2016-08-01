import * as React from "react";
let update = require("react-addons-update");
import { RestDao } from "SPScript"; //Need to add custom index.d.ts to SPScript module folder to resolve this name!
import SPScriptGetDataView from "../views/SPScriptGetData_View";
import DisplayResults from "./DisplayResults";

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

    getItemsFromList = () => {
        let newState = update(this.state, {
                                message: {$set: "From getItemsFromList()"}
                            }
                        );
        this.setState(newState);
    }

    public render() {
        console.log("SPScriptGetData render");
        return (
            <div>
                <SPScriptGetDataView getListItems={this.getItemsFromList} />
                <DisplayResults data={this.state.data} message={this.state.message} />
            </div>
        );
    }

}

export default SPScriptGetData;