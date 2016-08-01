import * as React from "react";

class PnPGetDataView extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <button onClick={this.props.getListItems}>Get list items (PnP)</button>
            </div>
        );
    }
}

export default PnPGetDataView;