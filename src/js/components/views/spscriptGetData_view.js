"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
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

//# sourceMappingURL=spscriptGetData_view.js.map
