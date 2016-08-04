import * as React from "react";

class SPScriptGetDataView extends React.Component<any, any> {

    public render() {
        return (
            <div>
                <select onChange={this.props.selectOperation}>
                    <option value="">Select an operation...</option>
                    <option value="getlistitems">Get list items</option>
                    <option value="getprofile">Get profile</option>
                </select>
                {this.props.children}
            </div>
        );
    }
}

export default SPScriptGetDataView;