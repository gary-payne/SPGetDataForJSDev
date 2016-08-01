import * as React from "react";

class SPScriptGetDataView extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <button type="button" onClick={this.props.getListItems}>Get list items</button>
                <button type="button" onClick={this.props.getProfile}>Get profile</button>
            </div>
        );
    }
}

export default SPScriptGetDataView;