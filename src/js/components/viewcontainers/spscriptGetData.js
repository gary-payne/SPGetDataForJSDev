"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var update = require("react-addons-update");
var SPScript_1 = require("SPScript"); //Need to add custom index.d.ts to SPScript module folder to resolve this name!
var SPScriptGetData_View_1 = require("../views/SPScriptGetData_View");
var DisplayResults_1 = require("./DisplayResults");
;
;
var SPScriptGetData = (function (_super) {
    __extends(SPScriptGetData, _super);
    function SPScriptGetData(props) {
        var _this = this;
        _super.call(this, props);
        this.testitemdata = [{ "Id": 1, "Title": "A", "ANumber": 1.13, "ID": 1, "Created": "2016-07-27T00:52:59Z", "AuthorId": 9 }];
        this.testprofiledata = [{ "PreferredName": "Gary Payne", "WorkPhone": "0212660753", "Department": "", "SPS-JobTitle": "Owner" }];
        this.getItemsFromList = function () {
            console.log(" ** Attempting to push to new route!!!");
            react_router_1.browserHistory.push("spscript/spscript-getlistitems");
            /*
            if (typeof _spPageContextInfo === "undefined" || typeof _spPageContextInfo.webAbsoluteUrl === "undefined") {
                let newState = update(this.state, {
                        message: {$set: "_spPageContextInfo is not defined - using hard coded test data!"},
                        data: {$set: this.testitemdata},
                        showWarning: {$set: true}
                    }
                );
                this.setState(newState);
            } else {
                const dao = new RestDao(_spPageContextInfo.webAbsoluteUrl);
                const dataList = dao.lists("TestData");
                dataList.getItems().then( (results) => {
                    let newState = update(this.state, {
                            message: {$set: "Retrieved items from the list"},
                            data: {$set: results},
                            showWarning: {$set: false}
                        }
                    );
                    this.setState( newState );
                });
            }
            */
        };
        this.getCurrentProfile = function () {
            if (typeof _spPageContextInfo === "undefined" || typeof _spPageContextInfo.webAbsoluteUrl === "undefined") {
                var newState = update(_this.state, {
                    message: { $set: "_spPageContextInfo is not defined - using hard coded test data instead of current profile" },
                    data: { $set: _this.testprofiledata },
                    showWarning: { $set: true }
                });
                _this.setState(newState);
            }
            else {
                var dao = new SPScript_1.RestDao(_spPageContextInfo.webAbsoluteUrl);
                dao.profiles.current().then(function (results) {
                    var newState = update(_this.state, {
                        message: { $set: "Retrieved the current profile" },
                        data: { $set: results },
                        showWarning: { $set: false }
                    });
                    _this.setState(newState);
                });
            }
        };
        this.selectOperation = function (e) {
            console.log("SPScript - Selected '" + e.target.value + "'");
            if (e.target.value === "getlistitems") {
                _this.getItemsFromList();
            }
            else if (e.target.value === "getlistitems") {
                _this.getCurrentProfile();
            }
        };
        console.log("SPScriptGetData constructor");
        this.state = {
            data: [],
            message: "",
            showWarning: false
        };
    }
    SPScriptGetData.prototype.componentDidMount = function () {
        try {
            var newState = update(this.state, {
                message: { $set: "" }
            });
            this.setState(newState);
        }
        catch (e) {
            console.log("Error setting state: " + e.message);
            this.setState({ data: [], message: "Success from exception block", showWarning: true });
        }
    };
    SPScriptGetData.prototype.render = function () {
        console.log("SPScriptGetData render");
        return (React.createElement("div", null, React.createElement(SPScriptGetData_View_1.default, {selectOperation: this.selectOperation}), React.createElement(DisplayResults_1.default, {data: this.state.data, message: this.state.message, isWarning: this.state.showWarning})));
    };
    return SPScriptGetData;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SPScriptGetData;

//# sourceMappingURL=spscriptGetData.js.map
