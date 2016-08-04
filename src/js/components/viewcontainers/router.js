"use strict";
var React = require("react");
var react_router_1 = require("react-router");
var ContentWrapper_view_1 = require("../views/ContentWrapper_view");
var Default_1 = require("./Default");
var SPScriptGetData_1 = require("./SPScriptGetData");
var SPScriptGetListItems_1 = require("./SPScriptGetListItems");
var PnPGetData_1 = require("./PnPGetData");
var subHeader_view_1 = require("../views/subHeader_view");
var PageNotFound = function () { return React.createElement("h1", null, "Could not find this page"); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: ContentWrapper_view_1.default}, React.createElement(react_router_1.IndexRoute, {component: Default_1.default}), React.createElement(react_router_1.Route, {path: "pnp", component: PnPGetData_1.default}), React.createElement(react_router_1.Route, {path: "spscript", component: subHeader_view_1.default}, React.createElement(react_router_1.IndexRoute, {component: SPScriptGetData_1.default}), React.createElement(react_router_1.Route, {path: "spscript-getlistitems", component: SPScriptGetListItems_1.default})), React.createElement(react_router_1.Route, {path: "*", component: PageNotFound}))));

//# sourceMappingURL=router.js.map
