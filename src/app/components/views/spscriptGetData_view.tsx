import * as React from "react";

class SPScriptGetDataView extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <button onClick={this.props.getListItems}>Get list items (SPScript)</button>
            </div>
        );
    }
}

export default SPScriptGetDataView;