"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var update = require("react-addons-update");
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

//# sourceMappingURL=spscriptGetData.js.map
