"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (elements) {
  return elements.map(function (element) {
    return element.id;
  });
};