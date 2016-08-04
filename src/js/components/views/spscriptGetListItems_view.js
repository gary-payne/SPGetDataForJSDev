"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
;
;
var SPScriptGetListItemsView = (function (_super) {
    __extends(SPScriptGetListItemsView, _super);
    function SPScriptGetListItemsView(props) {
        var _this = this;
        _super.call(this, props);
        this.listnameValueChangeHandler = function (e) {
            _this.setState({ listname: e.target.value });
        };
        this.getListItems = function (e) {
            _this.props.getListItems(_this.state.listname);
        };
        console.log("SPScriptGetData constructor");
        this.state = {
            listname: "TestData"
        };
    }
    SPScriptGetListItemsView.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("input", {type: "text", value: this.state.listname, onChange: this.listnameValueChangeHandler}), React.createElement("button", {type: "button", onClick: this.getListItems}, "Get list items")));
    };
    return SPScriptGetListItemsView;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SPScriptGetListItemsView;

//# sourceMappingURL=spscriptGetListItems_view.js.map
