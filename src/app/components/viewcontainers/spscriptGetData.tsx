import * as React from "react";
let update = require("react-addons-update");
import { RestDao } from "SPScript"; //Need to add custom index.d.ts to SPScript module folder to resolve this name!
import SPScriptGetDataView from "../views/SPScriptGetData_View";
import DisplayResults from "./DisplayResults";

interface IProps {};
interface IState {data: any, message: string, showWarning: boolean};

class SPScriptGetData extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        console.log("SPScriptGetData constructor");
        this.state = {
            data: [],
            message: "",
            showWarning: false
        };
    }

    testitemdata = [{ "Id": 1, "Title": "A", "ANumber": 1.13, "ID": 1, "Created": "2016-07-27T00:52:59Z", "AuthorId": 9}];
    testprofiledata = [{ "PreferredName": "Gary Payne", "WorkPhone": "0212660753", "Department": "", "SPS-JobTitle": "Owner"}];

    componentDidMount() {
        try {
            let newState = update(this.state, {
                message: {$set: ""}
            });
            this.setState(newState);
        } catch (e) {
            console.log("Error setting state: " + e.message);
            this.setState({data: [], message: "Success from exception block", showWarning: true});
        }
    }

    getItemsFromList = () => {
        if (typeof _spPageContextInfo === "undefined" || typeof _spPageContextInfo.webAbsoluteUrl === "undefined") {
            let newState = update(this.state, {
                    message: {$set: "_spPageContextInfo is not defined - using hard coded test data!"},
                    data: {$set: this.testitemdata},
                    showWarning: {$set: true}
                }
            );
            this.setState(newState);
        } else {
            const dao = new RestDao(_spPageContextInfo.webAbsoluteUrl);
            const dataList = dao.lists("TestData");
            dataList.getItems().then( (results) => {
                let newState = update(this.state, {
                        message: {$set: "Retrieved items from the list"},
                        data: {$set: results},
                        showWarning: {$set: false}
                    }
                );
                this.setState( newState );
            });
        }
    }

    getCurrentProfile = () => {
        if (typeof _spPageContextInfo === "undefined" || typeof _spPageContextInfo.webAbsoluteUrl === "undefined") {
            let newState = update(this.state, {
                    message: {$set: "_spPageContextInfo is not defined - using hard coded test data instead of current profile"},
                    data: {$set: this.testprofiledata},
                    showWarning: {$set: true}
                }
            );
            this.setState(newState);
        } else {
            const dao = new RestDao(_spPageContextInfo.webAbsoluteUrl);
            dao.profiles.current().then( (results) => {
                let newState = update(this.state, {
                        message: {$set: "Retrieved the current profile"},
                        data: {$set: results},
                        showWarning: {$set: false}
                    }
                );
                this.setState( newState );
            });
        }
    }

    public render() {
        console.log("SPScriptGetData render");
        return (
            <div>
                <SPScriptGetDataView getListItems={this.getItemsFromList} getProfile={this.getCurrentProfile} />
                <DisplayResults data={this.state.data} message={this.state.message} isWarning={this.state.showWarning} />
            </div>
        );
    }

}

export default SPScriptGetData;