import * as React from "react";
let update = require("react-addons-update");
import PnpDataView from "../views/PnPGetData_View";
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
        let newState = update(this.state, {
            message: {$set: "Success!"}
        });
        this.setState(newState);
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
                <PnpDataView getListItems={this.getItemsFromList} />
                <DisplayResults data={this.state.data} message={this.state.message} isWarning={false} />
            </div>
        );
    }

}

export default SPScriptGetData;