import * as React from "react";
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router";
import ContentWrapper from "../views/ContentWrapper_view";
import Default from "./Default";
import SPScriptGetData from "./SPScriptGetData";
import SPScriptGetListItems from "./SPScriptGetListItems";
import PnPGetData from "./PnPGetData";
import SubHeaderView from "../views/subHeader_view";

const PageNotFound = () => { return <h1>Could not find this page</h1>; }

export default (
    <Router history={browserHistory}>
        <Route path="/" component={ContentWrapper}>
            <IndexRoute component={Default} />
            <Route path="pnp" component={PnPGetData} />
            <Route path="spscript" component={SubHeaderView}>
                <IndexRoute component={SPScriptGetData} />
                <Route path="spscript-getlistitems" component={SPScriptGetListItems} />
            </Route>
            <Route path="*" component={PageNotFound} />
        </Route>
    </Router>
)
