"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var DisplayResultsView = (function (_super) {
    __extends(DisplayResultsView, _super);
    function DisplayResultsView() {
        _super.apply(this, arguments);
    }
    DisplayResultsView.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("div", null, this.props.message), React.createElement("textarea", {readOnly: true, rows: "10", cols: "125", value: JSON.stringify(this.props.data)})));
    };
    return DisplayResultsView;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DisplayResultsView;

//# sourceMappingURL=displayResults_view.js.map
