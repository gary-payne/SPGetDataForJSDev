import * as React from "react";
import DefaultView from "../views/Default_View";

interface IProps {};
interface IState {};

class DisplayResults extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <DefaultView />
        );
    }
}

export default DisplayResults;