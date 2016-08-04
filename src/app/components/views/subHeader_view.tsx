import * as React from "react";

class SubHeaderView extends React.Component<any, any> {
    public render() {
        return (
                <div>
                    <h3>Select an Operation</h3>
                    {this.props.children}
                </div>
        );
    }
}

export default SubHeaderView;