import * as React from "react";

class DisplayResultsView extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <div>{this.props.message}</div>
                <textarea readOnly value={JSON.stringify(this.props.data)} />
            </div>
        );
    }
}

export default DisplayResultsView;