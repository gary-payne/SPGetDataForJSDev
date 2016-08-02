import * as React from "react";
import JSONDisplay from "./jsondisplay";

class DisplayResultsView extends React.Component<any, any> {
    public render() {

        let style = {
            color: (this.props.isWarning) ? "#eb3733" : "#000000"
        };

        if (typeof this.props.data === "undefined" || this.props.data.length === 0) {
            return (
                <div>
                    <div>{this.props.message}</div>
                </div>
            );
        }

        return (
            <div>
                <div style={style}>{this.props.message}</div>
                <JSONDisplay json={this.props.data} style={ {height: "200px", width: "827px", overflow: "scroll"} } />
                <textarea readOnly rows="5" cols="100" value={JSON.stringify(this.props.data)} />
            </div>
        );
    }
}

export default DisplayResultsView;
