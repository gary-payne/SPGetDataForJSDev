"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var DefaultView = (function (_super) {
    __extends(DefaultView, _super);
    function DefaultView() {
        _super.apply(this, arguments);
    }
    DefaultView.prototype.render = function () {
        return (React.createElement("div", null, "Select a data retrieval library from the tabs above"));
    };
    return DefaultView;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DefaultView;

//# sourceMappingURL=default_view.js.map
