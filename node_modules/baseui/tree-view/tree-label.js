"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("./styled-components.js");

var _chevronRight = _interopRequireDefault(require("../icon/chevron-right.js"));

var _chevronDown = _interopRequireDefault(require("../icon/chevron-down.js"));

var _blank = _interopRequireDefault(require("../icon/blank.js"));

var _overrides = require("../helpers/overrides.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TreeLabel = function TreeLabel(_ref) {
  var hasChildren = _ref.hasChildren,
      isExpanded = _ref.isExpanded,
      label = _ref.label,
      _ref$overrides = _ref.overrides,
      overrides = _ref$overrides === void 0 ? {} : _ref$overrides,
      node = _ref.node,
      isSelected = _ref.isSelected,
      isFocusVisible = _ref.isFocusVisible,
      props = _objectWithoutProperties(_ref, ["hasChildren", "isExpanded", "label", "overrides", "node", "isSelected", "isFocusVisible"]);

  var sharedProps = {
    $isExpanded: !!isExpanded,
    $isSelected: !!isSelected,
    $isFocusVisible: !!isFocusVisible,
    $hasChildren: !!hasChildren
  };
  var IconContainerOverride = overrides.IconContainer,
      ExapandIconOverride = overrides.ExpandIcon,
      CollapseIconOverride = overrides.CollapseIcon,
      LeafIconContainerOverride = overrides.LeafIconContainer,
      LeafIconOverride = overrides.LeafIcon,
      TreeItemContentOverride = overrides.TreeItemContent;

  var IconContainer = (0, _overrides.getOverride)(IconContainerOverride) || _styledComponents.StyledIconContainer;

  var ExpandIcon = (0, _overrides.getOverride)(ExapandIconOverride) || _chevronRight.default;

  var CollapseIcon = (0, _overrides.getOverride)(CollapseIconOverride) || _chevronDown.default;

  var LeafIconContainer = (0, _overrides.getOverride)(LeafIconContainerOverride) || _styledComponents.StyledIconContainer;

  var LeafIcon = (0, _overrides.getOverride)(LeafIconOverride) || _blank.default;

  var TreeItemContent = (0, _overrides.getOverride)(TreeItemContentOverride) || _styledComponents.StyledItemContent;

  return _react.default.createElement(TreeItemContent, _extends({}, sharedProps, props), hasChildren && _react.default.createElement(IconContainer, _extends({}, sharedProps, (0, _overrides.getOverrideProps)(IconContainerOverride)), !isExpanded ? _react.default.createElement(ExpandIcon, _extends({}, sharedProps, (0, _overrides.getOverrideProps)(ExapandIconOverride))) : _react.default.createElement(CollapseIcon, _extends({}, sharedProps, (0, _overrides.getOverrideProps)(CollapseIconOverride)))), !hasChildren && LeafIcon && _react.default.createElement(LeafIconContainer, _extends({}, sharedProps, (0, _overrides.getOverrideProps)(LeafIconContainerOverride)), _react.default.createElement(LeafIcon, _extends({}, sharedProps, (0, _overrides.getOverrideProps)(LeafIconOverride)))), typeof label === 'function' ? label(node) : label);
};

var _default = TreeLabel;
exports.default = _default;