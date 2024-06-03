function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { StyledIconContainer, StyledItemContent } from './styled-components.js';
import ChevronRight from '../icon/chevron-right.js';
import ChevronDown from '../icon/chevron-down.js';
import BlankIcon from '../icon/blank.js';
import { getOverride, getOverrideProps } from '../helpers/overrides.js';

const TreeLabel = ({
  hasChildren,
  isExpanded,
  label,
  overrides = {},
  node,
  isSelected,
  isFocusVisible,
  ...props
}) => {
  const sharedProps = {
    $isExpanded: !!isExpanded,
    $isSelected: !!isSelected,
    $isFocusVisible: !!isFocusVisible,
    $hasChildren: !!hasChildren
  };
  const {
    IconContainer: IconContainerOverride,
    ExpandIcon: ExapandIconOverride,
    CollapseIcon: CollapseIconOverride,
    LeafIconContainer: LeafIconContainerOverride,
    LeafIcon: LeafIconOverride,
    TreeItemContent: TreeItemContentOverride
  } = overrides;
  const IconContainer = getOverride(IconContainerOverride) || StyledIconContainer;
  const ExpandIcon = getOverride(ExapandIconOverride) || ChevronRight;
  const CollapseIcon = getOverride(CollapseIconOverride) || ChevronDown;
  const LeafIconContainer = getOverride(LeafIconContainerOverride) || StyledIconContainer;
  const LeafIcon = getOverride(LeafIconOverride) || BlankIcon;
  const TreeItemContent = getOverride(TreeItemContentOverride) || StyledItemContent;
  return React.createElement(TreeItemContent, _extends({}, sharedProps, props), hasChildren && React.createElement(IconContainer, _extends({}, sharedProps, getOverrideProps(IconContainerOverride)), !isExpanded ? React.createElement(ExpandIcon, _extends({}, sharedProps, getOverrideProps(ExapandIconOverride))) : React.createElement(CollapseIcon, _extends({}, sharedProps, getOverrideProps(CollapseIconOverride)))), !hasChildren && LeafIcon && React.createElement(LeafIconContainer, _extends({}, sharedProps, getOverrideProps(LeafIconContainerOverride)), React.createElement(LeafIcon, _extends({}, sharedProps, getOverrideProps(LeafIconOverride)))), typeof label === 'function' ? label(node) : label);
};

export default TreeLabel;