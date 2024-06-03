"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MaybeChildMenu;

var React = _interopRequireWildcard(require("react"));

var _nestedMenus = require("./nested-menus.js");

var _index = require("../popover/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
function MaybeChildMenu(props) {
  if (!props.getChildMenu) {
    return props.children;
  }

  var ChildMenu = props.getChildMenu(props.item);

  if (!ChildMenu) {
    return props.children;
  }

  return React.createElement(_nestedMenus.NestedMenuContext.Consumer, null, function (ctx) {
    return React.createElement(_index.Popover, {
      focusLock: false,
      isOpen: props.isOpen,
      renderAll: props.renderAll,
      content: ChildMenu,
      ignoreBoundary: true,
      mountNode: ctx.mountRef.current ? ctx.mountRef.current : undefined,
      onMouseEnterDelay: 30,
      onMouseLeaveDelay: 30,
      onEsc: props.resetParentMenu,
      placement: "rightTop",
      overrides: {
        Body: {
          props: {
            // Adds mouseleave to popover body so that child menu closes when user mouses out.
            onMouseLeave: props.resetParentMenu,
            // Trap tabbing when focused on a child menu. Popover mounts the element at the end of
            // the html body by default. If a user was to tab to the next element it would navigate
            // to elements not within the immediate area surrounding the menu.
            onKeyDown: function onKeyDown(e) {
              if (e.keyCode === 9) {
                e.preventDefault();
              }
            }
          }
        }
      }
    }, props.children);
  });
}