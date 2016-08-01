"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var update = require("react-addons-update");
var DisplayResults_View_1 = require("../views/DisplayResults_View");
;
;
var DisplayResults = (function (_super) {
    __extends(DisplayResults, _super);
    function DisplayResults(props) {
        _super.call(this, props);
        console.log("DisplayResults constructor");
    }
    DisplayResults.prototype.render = function () {
        console.log("DisplayResults render with message = '" + this.props.message + "'");
        return (React.createElement(DisplayResults_View_1.default, {data: this.props.data, message: this.props.message}));
    };
    return DisplayResults;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DisplayResults;

//# sourceMappingURL=displayResults.js.map
