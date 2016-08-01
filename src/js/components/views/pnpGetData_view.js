"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var PnPGetDataView = (function (_super) {
    __extends(PnPGetDataView, _super);
    function PnPGetDataView() {
        _super.apply(this, arguments);
    }
    PnPGetDataView.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("button", {onClick: this.props.getListItems}, "Get list items (PnP)")));
    };
    return PnPGetDataView;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PnPGetDataView;

//# sourceMappingURL=pnpGetData_view.js.map
