/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { starSVG, angryRatingSVG, sadRatingSVG, neutralRatingSVG, happyRatingSVG, veryHappyRatingSVG } from './svg-icons.js';
export var StyledRoot = styled('ul', function (_ref) {
  var $theme = _ref.$theme;
  return {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    display: 'inline-block',
    ':focus': {
      outline: 'none'
    }
  };
});
StyledRoot.displayName = "StyledRoot";
export var StyledStar = styled('li', function (_ref2) {
  var $theme = _ref2.$theme,
      $isActive = _ref2.$isActive,
      $isSelected = _ref2.$isSelected,
      $isFocusVisible = _ref2.$isFocusVisible;
  var starStroke = $theme.colors.mono500;
  var starFill = $theme.colors.mono300;

  if ($isActive) {
    starStroke = starFill = $theme.colors.rating400;
  }

  var styles = {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    display: 'inline-block',
    transition: "transform ".concat($theme.animation.timing400),
    cursor: 'pointer',
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    marginRight: $theme.sizing.scale300,
    width: '22px',
    height: '20px',
    transform: $isSelected ? 'scale(1.35)' : '',
    outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
    outlineOffset: '2px',
    ':after': {
      transition: "all ".concat($theme.animation.timing400),
      content: "url('data:image/svg+xml," + starSVG(starFill, starStroke) + "')"
    }
  };
  return styles;
});
StyledStar.displayName = "StyledStar";
export var StyledEmoticon = styled('li', function (_ref3) {
  var $theme = _ref3.$theme,
      $isActive = _ref3.$isActive,
      $isSelected = _ref3.$isSelected,
      _ref3$$index = _ref3.$index,
      $index = _ref3$$index === void 0 ? 1 : _ref3$$index,
      $isFocusVisible = _ref3.$isFocusVisible;
  var emoticonFill = $theme.colors.mono500;

  if ($isActive) {
    emoticonFill = $theme.colors.rating400;
  }

  var ratingIcons = [angryRatingSVG(emoticonFill), sadRatingSVG(emoticonFill), neutralRatingSVG(emoticonFill), happyRatingSVG(emoticonFill), veryHappyRatingSVG(emoticonFill)];
  var styles = {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'inline-block',
    transition: "transform ".concat($theme.animation.timing400),
    cursor: 'pointer',
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    marginRight: $theme.sizing.scale300,
    width: '44px',
    height: '44px',
    transform: $isSelected ? 'scale(1.1)' : '',
    outline: $isFocusVisible ? "3px solid ".concat($theme.colors.accent) : 'none',
    outlineOffset: '2px',
    ':after': {
      transition: "all ".concat($theme.animation.timing400),
      content: "url('data:image/svg+xml," + ratingIcons[$index - 1] + "')"
    }
  };
  return styles;
});
StyledEmoticon.displayName = "StyledEmoticon";