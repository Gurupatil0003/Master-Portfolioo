/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export var fontTokens = {
  primaryFontFamily: 'system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
}; // color constants

export default (function () {
  var themePrimitives = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : fontTokens;
  var font100 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '12px',
    fontWeight: 'normal',
    lineHeight: '20px'
  };
  var font150 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: '16px'
  };
  var font200 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: '20px'
  };
  var font250 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '16px'
  };
  var font300 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '24px'
  };
  var font350 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px'
  };
  var font400 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '28px'
  };
  var font450 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '24px'
  };
  var font550 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '28px'
  };
  var font650 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '32px'
  };
  var font750 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '28px',
    fontWeight: 500,
    lineHeight: '36px'
  };
  var font850 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '32px',
    fontWeight: 500,
    lineHeight: '40px'
  };
  var font950 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '36px',
    fontWeight: 500,
    lineHeight: '44px'
  };
  var font1050 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '40px',
    fontWeight: 500,
    lineHeight: '52px'
  };
  var font1150 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '36px',
    fontWeight: 500,
    lineHeight: '44px'
  };
  var font1250 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '44px',
    fontWeight: 500,
    lineHeight: '52px'
  };
  var font1350 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '52px',
    fontWeight: 500,
    lineHeight: '64px'
  };
  var font1450 = {
    fontFamily: themePrimitives.primaryFontFamily,
    fontSize: '96px',
    fontWeight: 500,
    lineHeight: '112px'
  };
  return {
    font100: font100,
    font150: font150,
    font200: font200,
    font250: font250,
    font300: font300,
    font350: font350,
    font400: font400,
    font450: font450,
    font550: font550,
    font650: font650,
    font750: font750,
    font850: font850,
    font950: font950,
    font1050: font1050,
    font1150: font1150,
    font1250: font1250,
    font1350: font1350,
    font1450: font1450,
    ParagraphXSmall: font100,
    ParagraphSmall: font200,
    ParagraphMedium: font300,
    ParagraphLarge: font400,
    LabelXSmall: font150,
    LabelSmall: font250,
    LabelMedium: font350,
    LabelLarge: font450,
    HeadingXSmall: font550,
    HeadingSmall: font650,
    HeadingMedium: font750,
    HeadingLarge: font850,
    HeadingXLarge: font950,
    HeadingXXLarge: font1050,
    DisplayXSmall: font1150,
    DisplaySmall: font1250,
    DisplayMedium: font1350,
    DisplayLarge: font1450
  };
});