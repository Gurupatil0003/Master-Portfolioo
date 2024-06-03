/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles/index.js';
export const StyledFileDragAndDrop = styled('div', props => {
  return {
    alignItems: 'center',
    backgroundColor: props.$isDragActive ? props.$theme.colors.fileUploaderBackgroundColorActive : props.$theme.colors.fileUploaderBackgroundColor,
    borderColor: props.$isDragActive ? props.$theme.colors.fileUploaderBorderColorActive : props.$theme.colors.fileUploaderBorderColorDefault,
    borderStyle: props.$afterFileDrop ? 'none' : 'dashed',
    borderWidth: props.$theme.sizing.scale0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    outline: 'none',
    paddingTop: props.$theme.sizing.scale900,
    paddingRight: props.$theme.sizing.scale800,
    paddingBottom: props.$afterFileDrop ? props.$theme.sizing.scale300 : props.$theme.sizing.scale900,
    paddingLeft: props.$theme.sizing.scale800,
    width: '100%'
  };
});
StyledFileDragAndDrop.displayName = "StyledFileDragAndDrop";
export const StyledContentMessage = styled('div', props => ({ ...props.$theme.typography.font300,
  color: props.$afterFileDrop ? props.$theme.colors.fileUploaderMessageColor : null,
  marginBottom: props.$afterFileDrop ? props.$theme.sizing.scale600 : null
}));
StyledContentMessage.displayName = "StyledContentMessage";
export const StyledContentSeparator = StyledContentMessage;
export const StyledErrorMessage = styled('div', props => ({ ...props.$theme.typography.font300,
  color: props.$theme.colors.negative,
  marginBottom: props.$afterFileDrop ? props.$theme.sizing.scale600 : null
}));
StyledErrorMessage.displayName = "StyledErrorMessage";
export const StyledRoot = styled('div', props => ({ ...props.$theme.typography.font300,
  color: props.$theme.colors.fileUploaderMessageColor
}));
StyledRoot.displayName = "StyledRoot";
export const StyledHiddenInput = styled('input', {});
StyledHiddenInput.displayName = "StyledHiddenInput";