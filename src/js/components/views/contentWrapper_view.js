"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
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

//# sourceMappingURL=contentWrapper_view.js.map
