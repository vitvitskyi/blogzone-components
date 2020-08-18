'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('@emotion/styled'));
require('@emotion/core');

var useClickOutside = function useClickOutside(ref, onClickOutside, _ref) {
  var disabled = _ref.disabled;
  var handleClickOutside = React.useCallback(function (event) {
    var currentRef = ref && ('current' in ref ? ref.current : ref);

    if (!(currentRef === null || currentRef === void 0 ? void 0 : currentRef.contains(event.target))) {
      onClickOutside(event);
    }
  }, [ref, onClickOutside]);
  React.useEffect(function () {
    if (!ref || disabled) {
      return;
    }

    var eventType = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';
    document.addEventListener(eventType, handleClickOutside);
    return function () {
      document.removeEventListener(eventType, handleClickOutside);
    };
  }, [handleClickOutside, onClickOutside, ref, disabled]);
};

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var AddCircle = function AddCircle(props) {
  return React.createElement("svg", Object.assign({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, props), React.createElement("defs", null, React.createElement("path", {
    id: "path-2",
    "fill-rule": "evenodd",
    d: "M0 16h16V0H0v16z"
  }), React.createElement("mask", {
    id: "mask-3",
    maskContentUnits: "userSpaceOnUse",
    maskUnits: "userSpaceOnUse"
  }, React.createElement("rect", {
    width: "16",
    height: "16",
    x: "0",
    y: "0",
    fill: "black"
  }), React.createElement("use", {
    fill: "white",
    href: "#path-2"
  }))), React.createElement("g", null, React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M8.001 16C3.589 16 0 12.411 0 8s3.589-8 8.001-8C12.412 0 16 3.589 16 8h-1c0-3.859-3.14-7-6.999-7C4.141 1 1 4.141 1 8s3.141 7 7.001 7v1z"
  }), React.createElement("use", {
    fill: "none",
    href: "#path-2"
  }), React.createElement("g", {
    mask: "url(#mask-3)"
  }, React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M6.998 11.763h8.463v-1H6.998v1z"
  }), React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M10.729 15.494h1V7.031h-1v8.463z"
  }))));
};

var Arrow = function Arrow(props) {
  return React.createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.32",
    height: "15.654",
    viewBox: "0 0 14.32 15.654"
  }), React.createElement("defs", null, React.createElement("path", {
    id: "path-1",
    "fill-rule": "evenodd",
    d: "M.95254397 0H14.3200896v15.65393957H.95254397V0z"
  }), React.createElement("mask", {
    id: "mask-2",
    maskContentUnits: "userSpaceOnUse",
    maskUnits: "userSpaceOnUse"
  }, React.createElement("rect", {
    width: "14.32",
    height: "15.654",
    x: "0",
    y: "0",
    fill: "black"
  }), React.createElement("use", {
    fill: "white",
    href: "#path-1"
  })), React.createElement("path", {
    id: "path-4",
    "fill-rule": "evenodd",
    d: "M0 15.65393957h14.3200896V0H0v15.65393957z"
  }), React.createElement("mask", {
    id: "mask-5",
    maskContentUnits: "userSpaceOnUse",
    maskUnits: "userSpaceOnUse"
  }, React.createElement("rect", {
    width: "14.32",
    height: "15.654",
    x: "0",
    y: "0",
    fill: "black"
  }), React.createElement("use", {
    fill: "white",
    href: "#path-4"
  }))), React.createElement("g", null, React.createElement("g", null, React.createElement("use", {
    fill: "none",
    href: "#path-1"
  }), React.createElement("g", {
    mask: "url(#mask-2)"
  }, React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M6.48982382 15.65393957c-2.00540994.00103-4.01081989-.76219998-5.53727985-2.28968994l.72820998-.72820998c2.65018993 2.65121993 6.96485981 2.65327993 9.61710974 0 1.28440996-1.28440997 1.99304994-2.99214992 1.99304994-4.80906987 0-1.81588995-.70863998-3.5246599-1.99304994-4.80906986-2.65018993-2.65121993-6.96485981-2.65121993-9.61710974 0l-.72820998-.72820998c3.05394992-3.05291992 8.01957978-3.05291992 11.0735297 0 1.48010995 1.47907996 2.29483993 3.4453499 2.29483993 5.53727984 0 2.09295994-.81472998 4.05922989-2.29483993 5.53727985-1.52542996 1.52645996-3.5318699 2.28968994-5.53624985 2.28968994"
  }))), React.createElement("use", {
    fill: "none",
    href: "#path-4"
  }), React.createElement("g", {
    mask: "url(#mask-5)"
  }, React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M0 8.34196977h9.62946973V7.3119698H0v1.02999997z"
  }), React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M6.33491182 11.85076767l-.72820998-.72820998 3.29393991-3.2949699-3.2939399-3.29496992.72820997-.72820998 4.0221499 4.0231799-4.0221499 4.02317988z"
  }))));
};

var BookmarkBorder = function BookmarkBorder(props) {
  return React.createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14.72",
    height: "15.026",
    viewBox: "0 0 14.72 15.026"
  }), React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M0 0v15.02636027l7.36000013-6.79236012 7.36000014 6.79236012V.05704h-.92000002v12.86896023l-6.44000012-5.9450401-6.44000011 5.9450401V.92000002h9.20000016V0H0z"
  }));
};

var Info = function Info(props) {
  return React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16"
  }, props), React.createElement("defs", null, React.createElement("path", {
    id: "path-1",
    "fill-rule": "evenodd",
    d: "M8.56942749 4.45960999c-.0840149.08399963-.12600708.18699646-.12600708.30499267 0 .11601257.0409851.21800232.12399292.30599976.08200073.08700561.18499756.13101196.30700684.13101196.11898803 0 .22000122-.04299927.30499267-.12901306.0840149-.08599854.12600708-.18899536.12600708-.30799866 0-.11799621-.04199219-.22099304-.12600708-.30499267-.08499145-.08399964-.18600464-.12600708-.30499267-.12600708-.11898804 0-.2210083.04200744-.30499268.12600708zm.47799683 5.60699462h-.2380066c-.32998657.58500672-.61801147.87800599-.8619995.87800599-.07299805 0-.12799073-.02500916-.16601563-.07299805-.03799439-.04701233-.0579834-.12001038-.0579834-.2150116 0-.11999512.0880127-.4119873.26300049-.87799072l.47698974-1.28900147c.17401123-.46600341.26199341-.78700256.26199341-.96200561 0-.17199707-.0499878-.31098938-.14797973-.41699219-.1000061-.1060028-.22702027-.15800476-.38201905-.15800476-.20199585 0-.41897583.1040039-.65197754.31199646-.23400879.20800781-.44100952.4920044-.62200927.85299683h.2369995c.07299805-.16299439.19799805-.34298706.375-.54299927.17700196-.20098877.32901002-.2999878.45800782-.2999878.06298828 0 .10998535.01599122.14099121.0499878.03201294.03300476.04699707.08200073.04699707.14801025 0 .07598877-.06500244.29100037-.19799805.64498902l-.57000732 1.51200866c-.18499756.4960022-.27798462.83099366-.27798462 1.00700379 0 .21499634.05899048.37799072.17599487.48799133.1170044.1110077.2539978.16600037.40899659.16600037.23199463 0 .47201538-.12399292.72201538-.37199402.25-.2480011.45199585-.53199768.60699463-.852005z"
  })), React.createElement("g", null, React.createElement("g", null, React.createElement("use", {
    fill: "rgb(255,255,255)",
    href: "#path-1"
  }), React.createElement("use", {
    "fill-opacity": "0",
    stroke: "rgb(255,255,255)",
    "stroke-linecap": "butt",
    "stroke-linejoin": "miter",
    "stroke-width": ".3",
    href: "#path-1"
  })), React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M0 8c0 4.41099548 3.58898926 8 8 8s8-3.58900452 8-8-3.58898926-8-8-8-8 3.58900452-8 8zm1 0c0-3.85899353 3.14099121-7 7-7s7 3.14100647 7 7-3.14099121 7-7 7-7-3.14100647-7-7z"
  })));
};

var Lock = function Lock(props) {
  return React.createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "32.93",
    height: "31.112",
    viewBox: "0 0 32.93 31.112"
  }), React.createElement("defs", null, React.createElement("ellipse", {
    id: "ellipse-2",
    cx: "27.654",
    cy: "25.142",
    rx: "4.436",
    ry: "4.436"
  }), React.createElement("path", {
    id: "path-3",
    "fill-rule": "evenodd",
    d: "M10.342541 5.08633273h10.1241873v7.04967914H10.342541V5.08633273z"
  }), React.createElement("mask", {
    id: "mask-4",
    maskContentUnits: "userSpaceOnUse",
    maskUnits: "userSpaceOnUse"
  }, React.createElement("rect", {
    width: "32.93",
    height: "31.112",
    x: "0",
    y: "0",
    fill: "black"
  }), React.createElement("use", {
    fill: "white",
    href: "#path-3"
  })), React.createElement("path", {
    id: "path-7",
    "fill-rule": "evenodd",
    d: "M8.8115417 13.44574996h13.1861859v11.0248136H8.8115417v-11.0248136z"
  }), React.createElement("mask", {
    id: "mask-8",
    maskContentUnits: "userSpaceOnUse",
    maskUnits: "userSpaceOnUse"
  }, React.createElement("rect", {
    width: "32.93",
    height: "31.112",
    x: "0",
    y: "0",
    fill: "black"
  }), React.createElement("use", {
    fill: "white",
    href: "#path-7"
  }))), React.createElement("g", null, React.createElement("ellipse", {
    cx: "15.556",
    cy: "15.556",
    fill: "rgb(255,255,255)",
    rx: "15.556",
    ry: "15.556"
  }), React.createElement("g", null, React.createElement("use", {
    fill: "rgb(95,199,167)",
    href: "#ellipse-2"
  }), React.createElement("use", {
    "fill-opacity": "0",
    stroke: "rgb(0,153,207)",
    "stroke-linecap": "butt",
    "stroke-linejoin": "miter",
    "stroke-width": "1.68",
    href: "#ellipse-2"
  })), React.createElement("g", null, React.createElement("g", null, React.createElement("use", {
    fill: "none",
    href: "#path-3"
  }), React.createElement("g", {
    mask: "url(#mask-4)"
  }, React.createElement("path", {
    fill: "rgb(0,153,207)",
    "fill-rule": "evenodd",
    d: "M15.40468027 5.08632969c-.86730693 0-1.6204369.14538249-2.25942032.43614747-.63846638.29085623-1.16534104.67210509-1.57989405 1.14395947-.41485715.47191522-.72219817 1.0080968-.92241845 1.60869681-.20015945.6005696-.30040646 1.21549496-.30040646 1.844624V11.506822c0 .21935116.02862028.37890692.0858.4790931.05721014.1000341.18142397.15009678.37182029.15009678h2.65970881c.1716 0 .2885143-.04510507.35043872-.13583226.06204608-.09048388.09294747-.23598803.09294747-.43614748v-1.329824c0-.20961843.03354746-.41698618.09997327-.62210323.06697327-.20490415.1623235-.38830508.2860507-.5504461.12412258-.16204977.2765917-.29316774.4576507-.39335392.18118065-.1000341.39092074-.15006636.62912904-.15006636h.05721014c.23817789 0 .44800923.05003226.62918988.15006636.18096774.10018618.33346729.23130415.45752904.39335392.12384885.16214102.21913825.34554195.28614194.5504461.06636498.20511705.09997328.4124848.09997328.62210324v1.329824c0 .20015944.03090138.3456636.09291705.43614747.06195484.09072719.17883871.13583226.35049955.13583226h2.6596784c.19030507 0 .31464055-.05006268.37175945-.15009678.05721014-.10018618.08576959-.25974194.08576959-.4790931v-1.38706454c0-.62912905-.10009494-1.2440544-.30034563-1.844624-.20018987-.60060002-.5075613-1.1367816-.92247928-1.60869682-.41449218-.47185438-.94136684-.85310324-1.57983322-1.14395947-.638953-.29076498-1.3921134-.43614747-2.2593899-.43614747"
  }))), React.createElement("path", {
    fill: "rgb(0,153,207)",
    "fill-rule": "evenodd",
    d: "M16.67572776 16.82542754h-.90492997v4.254719h.90492997c1.0491567 0 2.04070788-.69309127 2.04070788-2.12751158 0-1.43423782-.99155117-2.12720742-2.04070788-2.12720742"
  }), React.createElement("g", null, React.createElement("use", {
    fill: "none",
    href: "#path-7"
  }), React.createElement("g", {
    mask: "url(#mask-8)"
  }, React.createElement("path", {
    fill: "rgb(0,153,207)",
    "fill-rule": "evenodd",
    d: "M10.3421936 13.44574976h10.12488556c.84185028 0 1.53064728.68876648 1.53064728 1.53065491v7.96348572c0 .8418579-.688797 1.53068542-1.53064728 1.53068542H10.3421936c-.84185028 0-1.5306549-.68882751-1.5306549-1.53068542v-7.96348572c0-.84188843.68880462-1.5306549 1.5306549-1.5306549zm.29840088 8.98187256h1.9252243v-6.94992065h-1.9252243v6.94992065zm6.14092255 0h-2.93587494v-6.94992065h2.93587494c2.3872528 0 3.95638275.90478515 3.95638275 3.47494507 0 2.57017517-1.56912994 3.47497558-3.95638275 3.47497558z"
  }))))));
};

var Menu = function Menu(props) {
  return React.createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "14.868",
    viewBox: "0 0 16 14.868"
  }), React.createElement("g", null, React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M5.5467 13.8681v1h10.453v-1H5.5467z"
  }), React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M5.5467 6.9345v1h10.453v-1H5.5467z"
  }), React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M5.5467 0v1h10.453V0H5.5467z"
  }), React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M0 13.8681v1h2.132v-1H0z"
  }), React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M0 6.9345v1h2.132v-1H0z"
  }), React.createElement("path", {
    fill: "rgb(255,255,255)",
    "fill-rule": "evenodd",
    d: "M0 0v1h2.132V0H0z"
  })));
};



var icons = {
  __proto__: null,
  AddCircle: AddCircle,
  Arrow: Arrow,
  BookmarkBorder: BookmarkBorder,
  Info: Info,
  Lock: Lock,
  Menu: Menu
};

var Icon = function Icon(_ref) {
  var name = _ref.name,
      props = _objectWithoutPropertiesLoose(_ref, ["name"]);

  var Icon = icons[name];

  if (Icon) {
    return React__default.createElement(Icon, Object.assign({}, props));
  }

  return null;
};

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n  min-width: 53px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0 auto;\n  max-width: 272px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #ffffff;\n  font-family: sans-serif;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 320px;\n  height: 139px;\n  border-radius: 6px 0 0 6px;\n  background-color: #0086b4;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}
var IdCallWrapper = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject5());
var TextStyle = /*#__PURE__*/styled.p( /*#__PURE__*/_templateObject6());
var Flex = /*#__PURE__*/styled.div( /*#__PURE__*/_templateObject7());
var FlexWrap = /*#__PURE__*/styled(Flex)( /*#__PURE__*/_templateObject8());
var FlexInner = /*#__PURE__*/styled(Flex)( /*#__PURE__*/_templateObject9());

var IdCalls = function IdCalls(_ref) {
  var name = _ref.name;
  return React__default.createElement(IdCallWrapper, null, React__default.createElement(FlexWrap, null, React__default.createElement(TextStyle, null, name), React__default.createElement(FlexInner, null, React__default.createElement(Menu, null), React__default.createElement(AddCircle, null))));
};

exports.Icon = Icon;
exports.IdCalls = IdCalls;
exports.useClickOutside = useClickOutside;
//# sourceMappingURL=livescorereactcomponents.cjs.development.js.map
