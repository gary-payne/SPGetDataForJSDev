import * as React from "react";
import Navigation from "./Navigation_View";

//A stateless functional component
class ContentWrapper extends React.Component<any, any> {
    public render() {
        return (
                <div>
                    <h1>Get JSON Data for Local Development</h1>
                    <Navigation />
                    {this.props.children}
                </div>
        );
    }
}

export default ContentWrapper;