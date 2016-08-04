import * as React from "react";

interface IProps {};
interface IState {listname: string};

class SPScriptGetListItemsView extends React.Component<any, any> {

    constructor(props) {
        super(props);
        console.log("SPScriptGetData constructor");
        this.state = {
            listname: "TestData"
        };
    }

    listnameValueChangeHandler = (e) => {
        this.setState({ listname: e.target.value });
    }

    getListItems = (e) => {
        this.props.getListItems(this.state.listname);
    }

    public render() {
        return (
            <div>
                <input type="text" value={this.state.listname} onChange={this.listnameValueChangeHandler} />
                <button type="button" onClick={this.getListItems}>Get list items</button>
            </div>
        );
    }
}

export default SPScriptGetListItemsView;