/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export const StyledProgressSteps = styled('ol', ({
  $theme
}) => {
  return {
    backgroundColor: $theme.colors.listHeaderFill,
    display: 'inline-block',
    marginBottom: 0,
    marginTop: 0,
    paddingTop: $theme.sizing.scale300,
    paddingRight: $theme.sizing.scale500,
    paddingLeft: $theme.sizing.scale500,
    paddingBottom: $theme.sizing.scale300
  };
});
StyledProgressSteps.displayName = "StyledProgressSteps";
export const StyledStep = styled('li', ({
  $theme
}) => {
  return {
    listStyleType: 'none',
    position: 'relative',
    overflow: 'visible'
  };
});
StyledStep.displayName = "StyledStep";
export const StyledIcon = styled('div', ({
  $theme,
  $isActive,
  $isCompleted,
  $disabled
}) => {
  let currentColor = $theme.colors.mono400;
  let size = $theme.sizing.scale300;
  let marginRight = $theme.sizing.scale500;
  let marginLeft = $theme.sizing.scale100;
  let font = $theme.typography.font300;

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  } else if ($isActive) {
    font = $theme.typography.font350;
    currentColor = $theme.colors.progressStepsActiveFill;
  }

  if ($isActive) {
    size = $theme.sizing.scale600;
    marginLeft = 0;
    marginRight = $theme.sizing.scale300;
  }

  const marginTop = `calc((${font.lineHeight} - ${size}) / 2)`;

  if ($theme.direction === 'rtl') {
    [marginLeft, marginRight] = [marginRight, marginLeft];
  }

  return {
    marginRight,
    marginLeft,
    marginTop,
    width: size,
    height: size,
    lineHeight: size,
    borderTopLeftRadius: size,
    borderTopRightRadius: size,
    borderBottomRightRadius: size,
    borderBottomLeftRadius: size,
    backgroundColor: currentColor,
    float: $theme.direction === 'rtl' ? 'right' : 'left',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
});
StyledIcon.displayName = "StyledIcon";
export const StyledInnerIcon = styled('div', ({
  $theme
}) => {
  return {
    width: $theme.sizing.scale100,
    height: $theme.sizing.scale100,
    lineHeight: $theme.sizing.scale100,
    borderTopLeftRadius: $theme.sizing.scale100,
    borderTopRightRadius: $theme.sizing.scale100,
    borderBottomRightRadius: $theme.sizing.scale100,
    borderBottomLeftRadius: $theme.sizing.scale100,
    backgroundColor: $theme.colors.progressStepsActiveText,
    textAlign: 'center'
  };
});
StyledInnerIcon.displayName = "StyledInnerIcon";
export const StyledContent = styled('div', ({
  $theme
}) => {
  const marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return {
    [marginDir]: $theme.sizing.scale900
  };
});
StyledContent.displayName = "StyledContent";
export const StyledContentTitle = styled('div', ({
  $theme,
  $isActive
}) => {
  let color = $theme.colors.contentSecondary;
  let font = $theme.typography.font300;

  if ($isActive) {
    color = $theme.colors.contentPrimary;
    font = $theme.typography.font350;
  }

  return { ...font,
    color
  };
});
StyledContentTitle.displayName = "StyledContentTitle";
export const StyledContentTail = styled('div', ({
  $theme,
  $isCompleted,
  $isActive
}) => {
  let currentColor = $theme.colors.mono400;
  let size = $theme.sizing.scale300;
  let font = $theme.typography.font300;

  if ($isActive) {
    size = $theme.sizing.scale600;
  }

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  } else if (!$isCompleted && $isActive) {
    font = $theme.typography.font350;
  }

  const dir = $theme.direction === 'rtl' ? 'right' : 'left';
  return {
    position: 'absolute',
    [dir]: '7px',
    top: 0,
    height: `calc(100% + ${$theme.sizing.scale500})`,
    marginBottom: 0,
    width: $theme.sizing.scale0,
    marginTop: `calc(${size} + (${font.lineHeight} - ${size}) / 2)`,
    display: 'inline-block',
    backgroundColor: currentColor
  };
});
StyledContentTail.displayName = "StyledContentTail";
export const StyledContentDescription = styled('div', ({
  $theme
}) => {
  return {
    marginBottom: $theme.sizing.scale700
  };
});
StyledContentDescription.displayName = "StyledContentDescription";
export const StyledNumberStep = styled('li', ({
  $theme
}) => {
  return {
    listStyleType: 'none',
    position: 'relative',
    overflow: 'visible'
  };
});
StyledNumberStep.displayName = "StyledNumberStep";
export const StyledNumberIcon = styled('div', ({
  $theme,
  $isActive,
  $isCompleted,
  $disabled
}) => {
  let backgroundColor = $theme.colors.mono400;
  let color = $theme.colors.contentSecondary;
  let size = $theme.sizing.scale800;
  let marginRight = $theme.sizing.scale300;
  let font = $theme.typography.font250;
  let titleFont = $theme.typography.font300;

  if ($isCompleted) {
    color = $theme.colors.progressStepsCompletedText;
    backgroundColor = $theme.colors.progressStepsCompletedFill;
  } else if ($isActive) {
    titleFont = $theme.typography.font350;
    color = $theme.colors.progressStepsActiveText;
    backgroundColor = $theme.colors.progressStepsActiveFill;
  }

  const marginTop = `calc((${titleFont.lineHeight} - ${size}) / 2)`;
  return {
    marginRight,
    marginTop,
    width: size,
    height: size,
    borderTopLeftRadius: size,
    borderTopRightRadius: size,
    borderBottomRightRadius: size,
    borderBottomLeftRadius: size,
    backgroundColor,
    color,
    float: $theme.direction === 'rtl' ? 'right' : 'left',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...font
  };
});
StyledNumberIcon.displayName = "StyledNumberIcon";
export const StyledNumberContentTail = styled('div', ({
  $theme,
  $isActive,
  $isCompleted,
  $disabled
}) => {
  let currentColor = $theme.colors.mono300;
  let size = $theme.sizing.scale800;
  let titleFont = $theme.typography.font300;

  if ($isCompleted) {
    currentColor = $theme.colors.primary;
  } else if ($isActive) {
    titleFont = $theme.typography.font350;
  }

  const marginTop = `calc(${size} + (${titleFont.lineHeight} - ${size}) / 2)`;
  return {
    position: 'absolute',
    left: '11px',
    top: 0,
    height: `calc(100% - ${size})`,
    paddingBottom: 0,
    marginTop,
    width: $theme.sizing.scale0,
    paddingTop: $theme.sizing.scale800,
    backgroundColor: currentColor,
    display: 'inline-block'
  };
});
StyledNumberContentTail.displayName = "StyledNumberContentTail";