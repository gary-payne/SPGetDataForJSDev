import * as React from "react";

class JSONDisplay extends React.Component<any, any> {

  constructor(props) {
    super(props);
    console.log("In JSONDisplay")
  }

  _replace(match, ind, key, val, tra) {
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
  }

  _pretty(obj) {
    let regLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([,[{]|\[\s*\],?|\{\s*\},?)?$/mg;
    let json1 = JSON.stringify(obj, null, 2).replace(/&/g, '&amp;').replace(/\\"/g, '&quot;');
    return json1.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(regLine, this._replace);
  }

 _objectWithoutProperties(obj, keys) {
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
  }

  _createMarkup(json) {
    return { __html: this._pretty(json) };
  }

  public render() {
    // See https://facebook.github.io/react/warnings/unknown-prop.html    
    var _props = this.props;
    var json = _props.json;

    console.log("JSONDisplay render() with " + JSON.stringify(json));

    var rest = this._objectWithoutProperties(_props, ['json']);

    if (typeof json === 'string') {
      try {
        json = JSON.parse(json);
      } catch (e) {
        console.error("The string is not a valid json data!", e);
      }
    }

    return <pre {...rest} className="json-pretty" dangerouslySetInnerHTML={this._createMarkup(json)} />;
  }
};

export default JSONDisplay;