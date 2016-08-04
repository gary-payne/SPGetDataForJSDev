(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var update = (typeof window !== "undefined" ? window['React_Addons_Update'] : typeof global !== "undefined" ? global['React_Addons_Update'] : null);
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



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/SPScriptGetListItems_View":14}],2:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var Default_View_1 = require("../views/Default_View");
;
;
var DisplayResults = (function (_super) {
    __extends(DisplayResults, _super);
    function DisplayResults(props) {
        _super.call(this, props);
    }
    DisplayResults.prototype.render = function () {
        return (React.createElement(Default_View_1.default, null));
    };
    return DisplayResults;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DisplayResults;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/Default_View":9}],3:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var update = (typeof window !== "undefined" ? window['React_Addons_Update'] : typeof global !== "undefined" ? global['React_Addons_Update'] : null);
var DisplayResults_View_1 = require("../views/DisplayResults_View");
;
;
var DisplayResults = (function (_super) {
    __extends(DisplayResults, _super);
    function DisplayResults(props) {
        _super.call(this, props);
    }
    DisplayResults.prototype.render = function () {
        return (React.createElement(DisplayResults_View_1.default, {data: this.props.data, message: this.props.message, isWarning: this.props.isWarning}));
    };
    return DisplayResults;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DisplayResults;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/DisplayResults_View":10}],4:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var update = (typeof window !== "undefined" ? window['React_Addons_Update'] : typeof global !== "undefined" ? global['React_Addons_Update'] : null);
var PnPGetData_View_1 = require("../views/PnPGetData_View");
var DisplayResults_1 = require("./DisplayResults");
;
;
var SPScriptGetData = (function (_super) {
    __extends(SPScriptGetData, _super);
    function SPScriptGetData(props) {
        var _this = this;
        _super.call(this, props);
        this.getItemsFromList = function () {
            var newState = update(_this.state, {
                message: { $set: "From getItemsFromList()" }
            });
            _this.setState(newState);
        };
        console.log("SPScriptGetData constructor");
        this.state = {
            data: [],
            message: ""
        };
    }
    SPScriptGetData.prototype.componentDidMount = function () {
        var newState = update(this.state, {
            message: { $set: "Success!" }
        });
        this.setState(newState);
    };
    SPScriptGetData.prototype.render = function () {
        console.log("SPScriptGetData render");
        return (React.createElement("div", null, React.createElement(PnPGetData_View_1.default, {getListItems: this.getItemsFromList}), React.createElement(DisplayResults_1.default, {data: this.state.data, message: this.state.message, isWarning: false})));
    };
    return SPScriptGetData;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SPScriptGetData;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/PnPGetData_View":12,"./DisplayResults":3}],5:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var react_router_1 = (typeof window !== "undefined" ? window['ReactRouter'] : typeof global !== "undefined" ? global['ReactRouter'] : null);
var ContentWrapper_view_1 = require("../views/ContentWrapper_view");
var Default_1 = require("./Default");
var SPScriptGetData_1 = require("./SPScriptGetData");
var SPScriptGetListItems_1 = require("./SPScriptGetListItems");
var PnPGetData_1 = require("./PnPGetData");
var subHeader_view_1 = require("../views/subHeader_view");
var PageNotFound = function () { return React.createElement("h1", null, "Could not find this page"); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (React.createElement(react_router_1.Router, {history: react_router_1.browserHistory}, React.createElement(react_router_1.Route, {path: "/", component: ContentWrapper_view_1.default}, React.createElement(react_router_1.IndexRoute, {component: Default_1.default}), React.createElement(react_router_1.Route, {path: "pnp", component: PnPGetData_1.default}), React.createElement(react_router_1.Route, {path: "spscript", component: subHeader_view_1.default}, React.createElement(react_router_1.IndexRoute, {component: SPScriptGetData_1.default}), React.createElement(react_router_1.Route, {path: "spscript-getlistitems", component: SPScriptGetListItems_1.default})), React.createElement(react_router_1.Route, {path: "*", component: PageNotFound}))));



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/ContentWrapper_view":8,"../views/subHeader_view":15,"./Default":2,"./PnPGetData":4,"./SPScriptGetData":6,"./SPScriptGetListItems":1}],6:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var react_router_1 = (typeof window !== "undefined" ? window['ReactRouter'] : typeof global !== "undefined" ? global['ReactRouter'] : null);
var update = (typeof window !== "undefined" ? window['React_Addons_Update'] : typeof global !== "undefined" ? global['React_Addons_Update'] : null);
var SPScript_1 = (typeof window !== "undefined" ? window['SPScript'] : typeof global !== "undefined" ? global['SPScript'] : null); //Need to add custom index.d.ts to SPScript module folder to resolve this name!
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



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/SPScriptGetData_View":13,"./DisplayResults":3}],7:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var JSONDisplay = (function (_super) {
    __extends(JSONDisplay, _super);
    function JSONDisplay(props) {
        _super.call(this, props);
        console.log("In JSONDisplay");
    }
    JSONDisplay.prototype._replace = function (match, ind, key, val, tra) {
        var spanEnd = '</span>';
        var keySpan = '<span class=json-key>';
        var valSpan = '<span class=json-value>';
        var strSpan = '<span class=json-string>';
        var sps = ind || '';
        if (key) {
            sps = sps + '"' + keySpan + key.replace(/[": ]/g, '') + spanEnd + '": ';
        }
        if (val) {
            sps = sps + (val[0] === '"' ? strSpan : valSpan) + val + spanEnd;
        }
        return sps + (tra || '');
    };
    JSONDisplay.prototype._pretty = function (obj) {
        var regLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([,[{]|\[\s*\],?|\{\s*\},?)?$/mg;
        var json1 = JSON.stringify(obj, null, 2).replace(/&/g, '&amp;').replace(/\\"/g, '&quot;');
        return json1.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(regLine, this._replace);
    };
    JSONDisplay.prototype._objectWithoutProperties = function (obj, keys) {
        var target = {};
        for (var i in obj) {
            /* istanbul ignore if */
            if (keys.indexOf(i) >= 0) {
                continue;
            }
            /* istanbul ignore if */
            if (!Object.prototype.hasOwnProperty.call(obj, i)) {
                continue;
            }
            target[i] = obj[i];
        }
        return target;
    };
    JSONDisplay.prototype._createMarkup = function (json) {
        return { __html: this._pretty(json) };
    };
    JSONDisplay.prototype.render = function () {
        // See https://facebook.github.io/react/warnings/unknown-prop.html    
        var _props = this.props;
        var json = _props.json;
        console.log("JSONDisplay render() with " + JSON.stringify(json));
        var rest = this._objectWithoutProperties(_props, ['json']);
        if (typeof json === 'string') {
            try {
                json = JSON.parse(json);
            }
            catch (e) {
                console.error("The string is not a valid json data!", e);
            }
        }
        return React.createElement("pre", __assign({}, rest, {className: "json-pretty", dangerouslySetInnerHTML: this._createMarkup(json)}));
    };
    return JSONDisplay;
}(React.Component));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JSONDisplay;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],8:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
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



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./Navigation_View":11}],9:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
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



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],10:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
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



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./jsondisplay":7}],11:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var react_router_1 = (typeof window !== "undefined" ? window['ReactRouter'] : typeof global !== "undefined" ? global['ReactRouter'] : null);
//A stateless functional component
function default_1(props) {
    return (React.createElement("div", {className: "spgetdata_navigation ms-NavBar"}, React.createElement("ul", {className: "ms-NavBar-items"}, React.createElement("li", {className: "ms-NavBar-item"}, React.createElement(react_router_1.Link, {to: "pnp", className: "ms-NavBar-link"}, "PnP")), React.createElement("li", {className: "ms-NavBar-item"}, React.createElement(react_router_1.Link, {to: "spscript", className: "ms-NavBar-link"}, "SPScript")))));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],12:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
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



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],13:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var SPScriptGetDataView = (function (_super) {
    __extends(SPScriptGetDataView, _super);
    function SPScriptGetDataView() {
        _super.apply(this, arguments);
    }
    SPScriptGetDataView.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("select", {onChange: this.props.selectOperation}, React.createElement("option", {value: ""}, "Select an operation..."), React.createElement("option", {value: "getlistitems"}, "Get list items"), React.createElement("option", {value: "getprofile"}, "Get profile")), this.props.children));
    };
    return SPScriptGetDataView;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SPScriptGetDataView;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],14:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
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



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],15:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var SubHeaderView = (function (_super) {
    __extends(SubHeaderView, _super);
    function SubHeaderView() {
        _super.apply(this, arguments);
    }
    SubHeaderView.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h3", null, "Select an Operation"), this.props.children));
    };
    return SubHeaderView;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SubHeaderView;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],16:[function(require,module,exports){
(function (global){
"use strict";
var ReactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var router_1 = require("./components/viewcontainers/router");
window.onload = function () {
    ReactDom.render(router_1.default, document.querySelector("#reactContent"));
};



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/viewcontainers/router":5}]},{},[16])
//# sourceMappingURL=bundle-spgetdataforjsdev.js.map
