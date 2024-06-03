/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
import { ADJOINED, ENHANCER_POSITION, SIZE } from './constants.js';
import DeleteAlt from '../icon/delete-alt.js';
export const StyledMaskToggleButton = styled('button', ({
  $theme,
  $size,
  $isFocusVisible
}) => {
  const pad = {
    [SIZE.mini]: $theme.sizing.scale300,
    [SIZE.compact]: $theme.sizing.scale400,
    [SIZE.default]: $theme.sizing.scale500,
    [SIZE.large]: $theme.sizing.scale600
  }[$size];
  return {
    display: 'flex',
    alignItems: 'center',
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    background: 'none',
    paddingLeft: pad,
    paddingRight: pad,
    outline: $isFocusVisible ? `solid 3px ${$theme.colors.accent}` : 'none',
    color: $theme.colors.contentPrimary
  };
});
StyledMaskToggleButton.displayName = "StyledMaskToggleButton";
export const StyledClearIconContainer = styled('div', ({
  $alignTop = false,
  $theme
}) => {
  const paddingDir = $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
  return {
    display: 'flex',
    alignItems: $alignTop ? 'flex-start' : 'center',
    [paddingDir]: $theme.sizing.scale500,
    paddingTop: $alignTop ? $theme.sizing.scale500 : '0px',
    color: $theme.colors.contentPrimary
  };
});
StyledClearIconContainer.displayName = "StyledClearIconContainer";
export const StyledClearIcon = styled(DeleteAlt, ({
  $theme,
  $isFocusVisible
}) => ({
  cursor: 'pointer',
  outline: $isFocusVisible ? `solid 3px ${$theme.colors.accent}` : 'none'
}));
StyledClearIcon.displayName = "StyledClearIcon";

function getInputPadding(size, sizing) {
  return {
    [SIZE.mini]: {
      paddingTop: sizing.scale100,
      paddingBottom: sizing.scale100,
      paddingLeft: sizing.scale200,
      paddingRight: sizing.scale200
    },
    [SIZE.compact]: {
      paddingTop: sizing.scale200,
      paddingBottom: sizing.scale200,
      paddingLeft: sizing.scale400,
      paddingRight: sizing.scale400
    },
    [SIZE.default]: {
      paddingTop: sizing.scale400,
      paddingBottom: sizing.scale400,
      paddingLeft: sizing.scale550,
      paddingRight: sizing.scale550
    },
    [SIZE.large]: {
      paddingTop: sizing.scale550,
      paddingBottom: sizing.scale550,
      paddingLeft: sizing.scale650,
      paddingRight: sizing.scale650
    }
  }[size];
}

function getFont(size, typography) {
  return {
    [SIZE.mini]: typography.font100,
    [SIZE.compact]: typography.font200,
    [SIZE.default]: typography.font300,
    [SIZE.large]: typography.font400
  }[size];
}

export const Root = styled('div', props => {
  const {
    $size,
    $theme: {
      colors,
      typography
    }
  } = props;
  return { ...getFont($size, typography),
    color: colors.contentPrimary,
    display: 'flex',
    width: '100%'
  };
}); // InputEnhancer

Root.displayName = "Root";

function getInputEnhancerBorderRadius(position, radius) {
  return {
    [ENHANCER_POSITION.start]: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    [ENHANCER_POSITION.end]: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius
    }
  }[position];
}

function getInputEnhancerPadding($size, sizing) {
  return {
    [SIZE.mini]: {
      paddingRight: sizing.scale200,
      paddingLeft: sizing.scale200
    },
    [SIZE.compact]: {
      paddingRight: sizing.scale400,
      paddingLeft: sizing.scale400
    },
    [SIZE.default]: {
      paddingRight: sizing.scale600,
      paddingLeft: sizing.scale600
    },
    [SIZE.large]: {
      paddingRight: sizing.scale650,
      paddingLeft: sizing.scale650
    }
  }[$size];
}

function getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors) {
  if ($disabled) {
    return {
      color: colors.inputEnhancerTextDisabled,
      backgroundColor: colors.inputEnhancerFillDisabled
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentInversePrimary,
      backgroundColor: colors.borderFocus
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputBorderError
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputBorderPositive
    };
  }

  return {
    color: colors.contentPrimary,
    backgroundColor: colors.inputEnhancerFill
  };
}

export const InputEnhancer = styled('div', props => {
  const {
    $position,
    $size,
    $disabled,
    $isFocused,
    $error,
    $positive,
    $theme: {
      borders,
      colors,
      sizing,
      typography,
      animation
    }
  } = props;
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'color, background-color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve,
    ...getInputEnhancerBorderRadius($position, borders.inputBorderRadius),
    ...getFont($size, typography),
    ...getInputEnhancerPadding($size, sizing),
    ...getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors)
  };
}); // InputContainer

InputEnhancer.displayName = "InputEnhancer";

function getInputContainerBorderRadius(adjoined, radius) {
  return {
    [ADJOINED.none]: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius
    },
    [ADJOINED.left]: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius
    },
    [ADJOINED.right]: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    },
    [ADJOINED.both]: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  }[adjoined];
}

function getInputContainerColors($disabled, $isFocused, $error, $positive, colors) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      borderColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentPrimary,
      borderColor: colors.borderFocus,
      backgroundColor: colors.inputFillActive
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      borderColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      borderColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive
    };
  }

  return {
    color: colors.contentPrimary,
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputFill
  };
}

export const getInputContainerStyles = props => {
  const {
    $isFocused,
    $adjoined,
    $error,
    $disabled,
    $positive,
    $size,
    $theme: {
      borders,
      colors,
      typography,
      animation
    }
  } = props;
  return {
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    borderWidth: '2px',
    borderStyle: 'solid',
    transitionProperty: 'border, background-color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve,
    ...getInputContainerBorderRadius($adjoined, borders.inputBorderRadius),
    ...getFont($size, typography),
    ...getInputContainerColors($disabled, $isFocused, $error, $positive, colors)
  };
};
export const InputContainer = styled('div', getInputContainerStyles);
InputContainer.displayName = "InputContainer";

function getInputColors($disabled, $isFocused, $error, colors) {
  if ($disabled) {
    return {
      color: colors.contentSecondary,
      caretColor: colors.contentPrimary,
      '::placeholder': {
        color: colors.inputPlaceholderDisabled
      }
    };
  }

  return {
    color: colors.contentPrimary,
    caretColor: colors.contentPrimary,
    '::placeholder': {
      color: colors.inputPlaceholder
    }
  };
}

export const getInputStyles = props => {
  const {
    $disabled,
    $isFocused,
    $error,
    $size,
    $theme: {
      colors,
      sizing,
      typography
    }
  } = props;
  return {
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderStyle: 'none',
    outline: 'none',
    width: '100%',
    maxWidth: '100%',
    cursor: $disabled ? 'not-allowed' : 'text',
    margin: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    ...getFont($size, typography),
    ...getInputPadding($size, sizing),
    ...getInputColors($disabled, $isFocused, $error, colors)
  };
};
export const Input = styled('input', getInputStyles);
Input.displayName = "Input";