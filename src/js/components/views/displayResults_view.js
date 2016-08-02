"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var jsondisplay_1 = require("./jsondisplay");
var DisplayResultsView = (function (_super) {
    __extends(DisplayResultsView, _super);
    function DisplayResultsView() {
        _super.apply(this, arguments);
    }
    DisplayResultsView.prototype.render = function () {
        var style = {
            color: (this.props.isWarning) ? "#eb3733" : "#000000"
        };
        if (typeof this.props.data === "undefined" || this.props.data.length === 0) {
            return (React.createElement("div", null, React.createElement("div", null, this.props.message)));
        }
        return (React.createElement("div", null, React.createElement("div", {style: style}, this.props.message), React.createElement(jsondisplay_1.default, {json: this.props.data, style: { height: "200px", width: "827px", overflow: "scroll" }}), React.createElement("textarea", {readOnly: true, rows: "5", cols: "100", value: JSON.stringify(this.props.data)})));
    };
    return DisplayResultsView;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DisplayResultsView;

//# sourceMappingURL=displayResults_view.js.map
