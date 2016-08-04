"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var update = require("react-addons-update");
var SPScriptGetListItems_View_1 = require("../views/SPScriptGetListItems_View");
;
;
var SPScriptGetListItems = (function (_super) {
    __extends(SPScriptGetListItems, _super);
    function SPScriptGetListItems(props) {
        _super.call(this, props);
        this.getListItems = function (listName) {
            console.log("SPScriptGetLIstItems.getListItems(): list name = '" + listName + "'");
        };
    }
    SPScriptGetListItems.prototype.render = function () {
        console.log("SPScriptGetListItems render");
        return (React.createElement(SPScriptGetListItems_View_1.default, {getListItems: this.getListItems}));
    };
    return SPScriptGetListItems;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SPScriptGetListItems;

//# sourceMappingURL=SPScriptGetListItems.js.map
