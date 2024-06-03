function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Block from '../block/block.js';
export var DisplayLarge = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-displaylarge"
  }, props, {
    font: props.font || 'DisplayLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
DisplayLarge.displayName = 'DisplayLarge';
export var DisplayMedium = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-displaymedium"
  }, props, {
    font: props.font || 'DisplayMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
DisplayMedium.displayName = 'DisplayMedium';
export var DisplaySmall = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-displaysmall"
  }, props, {
    font: props.font || 'DisplaySmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
DisplaySmall.displayName = 'DisplaySmall';
export var DisplayXSmall = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-displayxsmall"
  }, props, {
    font: props.font || 'DisplayXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
DisplayXSmall.displayName = 'DisplayXSmall';
export var HeadingXXLarge = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-headingxxlarge",
    as: props.as || 'h1'
  }, props, {
    font: props.font || 'HeadingXXLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingXXLarge.displayName = 'HeadingXXLarge';
export var HeadingXLarge = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-headingxlarge",
    as: props.as || 'h2'
  }, props, {
    font: props.font || 'HeadingXLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingXLarge.displayName = 'HeadingXLarge';
export var HeadingLarge = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-headinglarge",
    as: props.as || 'h3'
  }, props, {
    font: props.font || 'HeadingLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingLarge.displayName = 'HeadingLarge';
export var HeadingMedium = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-headingmedium",
    as: props.as || 'h4'
  }, props, {
    font: props.font || 'HeadingMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingMedium.displayName = 'HeadingMedium';
export var HeadingSmall = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-headingsmall",
    as: props.as || 'h5'
  }, props, {
    font: props.font || 'HeadingSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingSmall.displayName = 'HeadingSmall';
export var HeadingXSmall = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-headingxsmall",
    as: props.as || 'h6'
  }, props, {
    font: props.font || 'HeadingXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
HeadingXSmall.displayName = 'HeadingXSmall';
export var LabelLarge = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-labellarge"
  }, props, {
    font: props.font || 'LabelLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
LabelLarge.displayName = 'LabelLarge';
export var LabelMedium = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-labelmedium"
  }, props, {
    font: props.font || 'LabelMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
LabelMedium.displayName = 'LabelMedium';
export var LabelSmall = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-labelsmall"
  }, props, {
    font: props.font || 'LabelSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
LabelSmall.displayName = 'LabelSmall';
export var LabelXSmall = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-labelxsmall"
  }, props, {
    font: props.font || 'LabelXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
LabelXSmall.displayName = 'LabelXSmall';
export var ParagraphLarge = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-paragraphlarge",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphLarge',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
ParagraphLarge.displayName = 'ParagraphLarge';
export var ParagraphMedium = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-paragraphmedium",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphMedium',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
ParagraphMedium.displayName = 'ParagraphMedium';
export var ParagraphSmall = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-paragraphsmall",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
ParagraphSmall.displayName = 'ParagraphSmall';
export var ParagraphXSmall = React.forwardRef(function (props, ref) {
  return React.createElement(Block, _extends({
    "data-baseweb": "typo-paragraphxsmall",
    as: props.as || 'p'
  }, props, {
    font: props.font || 'ParagraphXSmall',
    color: props.color || 'contentPrimary',
    ref: ref
  }));
});
ParagraphXSmall.displayName = 'ParagraphXSmall'; // TODO(v10): remove
// Aliases for backwards compatability

export var Display = DisplayLarge;
export var Display1 = DisplayLarge;
export var Display2 = DisplayMedium;
export var Display3 = DisplaySmall;
export var Display4 = DisplayXSmall;
export var H1 = HeadingXXLarge;
export var H2 = HeadingXLarge;
export var H3 = HeadingLarge;
export var H4 = HeadingMedium;
export var H5 = HeadingSmall;
export var H6 = HeadingXSmall;
export var Paragraph1 = ParagraphLarge;
export var Paragraph2 = ParagraphMedium;
export var Paragraph3 = ParagraphSmall;
export var Paragraph4 = ParagraphXSmall;
export var Label1 = LabelLarge;
export var Label2 = LabelMedium;
export var Label3 = LabelSmall;
export var Label4 = LabelXSmall;
export var Caption1 = React.forwardRef(function (props, ref) {
  return React.createElement(Paragraph4, _extends({}, props, {
    color: props.color || 'contentSecondary',
    ref: ref
  }));
});
Caption1.displayName = 'Caption1';
export var Caption2 = React.forwardRef(function (props, ref) {
  return React.createElement(Label4, _extends({}, props, {
    color: props.color || 'contentSecondary'
  }));
});
Caption2.displayName = 'Caption2';