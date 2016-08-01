"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var update = require("react-addons-update");
var PnPGetData_View_1 = require("../views/PnPGetData_View");
var DisplayResults_1 = require("./DisplayResults");
;
;
var SPScriptGetData = (function (_super) {
    __extends(SPScriptGetData, _super);
    function SPScriptGetData(props) {
        var _this = this;
        _super.call(this, props);
        this.getItemsFromList = function () {
            var newState = update(_this.state, {
                message: { $set: "From getItemsFromList()" }
            });
            _this.setState(newState);
        };
        console.log("SPScriptGetData constructor");
        this.state = {
            data: [],
            message: ""
        };
    }
    SPScriptGetData.prototype.componentDidMount = function () {
        var newState = update(this.state, {
            message: { $set: "Success!" }
        });
        this.setState(newState);
    };
    SPScriptGetData.prototype.render = function () {
        console.log("SPScriptGetData render");
        return (React.createElement("div", null, React.createElement(PnPGetData_View_1.default, {getListItems: this.getItemsFromList}), React.createElement(DisplayResults_1.default, {data: this.state.data, message: this.state.message})));
    };
    return SPScriptGetData;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SPScriptGetData;

//# sourceMappingURL=pnpGetData.js.map
