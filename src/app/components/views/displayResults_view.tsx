import * as React from "react";

class DisplayResultsView extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <div>{this.props.message}</div>
                <textarea readOnly rows="10" cols="125" value={JSON.stringify(this.props.data)} />
            </div>
        );
    }
}

export default DisplayResultsView;