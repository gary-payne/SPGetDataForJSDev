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
var React = require("react");
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

//# sourceMappingURL=JSONDisplay.js.map
