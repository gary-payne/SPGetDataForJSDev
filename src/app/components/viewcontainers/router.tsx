import * as React from "react";
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router";
import ContentWrapper from "../views/ContentWrapper_view";
import SPScriptGetData from "./SPScriptGetData";

const PageNotFound = () => { return <h1>Could not find this page</h1>; }

export default (
    <Router>
        <Route path="/" component={ContentWrapper}>
            <IndexRoute component={SPScriptGetData} />
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>
)
