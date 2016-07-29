(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var react_router_1 = (typeof window !== "undefined" ? window['ReactRouter'] : typeof global !== "undefined" ? global['ReactRouter'] : null);
var ContentWrapper_view_1 = require("../views/ContentWrapper_view");
var SPScriptGetData_1 = require("./SPScriptGetData");
var PageNotFound = function () { return React.createElement("h1", null, "Could not find this page"); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Route, {path: "/", component: ContentWrapper_view_1.default}, React.createElement(react_router_1.IndexRoute, {component: SPScriptGetData_1.default}), React.createElement(react_router_1.Route, {path: "*", component: PageNotFound}))));



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/ContentWrapper_view":3,"./SPScriptGetData":2}],2:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var update = (typeof window !== "undefined" ? window['React_Addons_Update'] : typeof global !== "undefined" ? global['React_Addons_Update'] : null);
var SPScriptGetData_View_1 = require("../views/SPScriptGetData_View");
;
;
var SPScriptGetData = (function (_super) {
    __extends(SPScriptGetData, _super);
    function SPScriptGetData(props) {
        _super.call(this, props);
        console.log("SPScriptGetData constructor");
        this.state = {
            data: [],
            message: ""
        };
    }
    SPScriptGetData.prototype.componentDidMount = function () {
        try {
            var newState = update(this.state, {
                message: { $set: "Success!" }
            });
            this.setState(newState);
        }
        catch (e) {
            console.log("Error setting state: " + e.message);
            this.setState({ data: [], message: "Success from exception block" });
        }
    };
    SPScriptGetData.prototype.render = function () {
        console.log("SPScriptGetData render");
        return (React.createElement(SPScriptGetData_View_1.default, {data: this.state.data, message: this.state.message}));
    };
    return SPScriptGetData;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SPScriptGetData;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/SPScriptGetData_View":5}],3:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Navigation_View_1 = require("./Navigation_View");
//A stateless functional component
var ContentWrapper = (function (_super) {
    __extends(ContentWrapper, _super);
    function ContentWrapper() {
        _super.apply(this, arguments);
    }
    ContentWrapper.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h1", null, "Get JSON Data for Local Development"), React.createElement(Navigation_View_1.default, null), this.props.children));
    };
    return ContentWrapper;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ContentWrapper;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Navigation_View":4}],4:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var react_router_1 = (typeof window !== "undefined" ? window['ReactRouter'] : typeof global !== "undefined" ? global['ReactRouter'] : null);
//A stateless functional component
function default_1(props) {
    return (React.createElement("div", {className: "spgetdata_navigation"}, React.createElement("ul", null, React.createElement("li", null, React.createElement(react_router_1.Link, {to: "/"}, "Home")))));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var SPScriptGetDataView = (function (_super) {
    __extends(SPScriptGetDataView, _super);
    function SPScriptGetDataView() {
        _super.apply(this, arguments);
    }
    SPScriptGetDataView.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("div", null, this.props.message), React.createElement("textarea", {readOnly: true, value: JSON.stringify(this.props.data)})));
    };
    return SPScriptGetDataView;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SPScriptGetDataView;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],6:[function(require,module,exports){
(function (global){
"use strict";
var ReactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var router_1 = require("./components/viewcontainers/router");
window.onload = function () {
    ReactDom.render(router_1.default, document.querySelector("#reactContent"));
};



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/viewcontainers/router":1}]},{},[6])
//# sourceMappingURL=bundle-spgetdataforjsdev.js.map