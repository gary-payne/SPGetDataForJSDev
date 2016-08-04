import * as React from "react";
let update = require("react-addons-update");
import SPScriptGetListItemsView from "../views/SPScriptGetListItems_View";

interface IProps {};
interface IState {};

class SPScriptGetListItems extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
    }

    getListItems = (listName) => {
        console.log("SPScriptGetLIstItems.getListItems(): list name = '" + listName + "'");
    }

    public render() {
        console.log("SPScriptGetListItems render");
        return (
            <SPScriptGetListItemsView getListItems={this.getListItems} />
        );
    }
}

export default SPScriptGetListItems;