'use strict';

const {disableAllMethodsWithExceptions} = require('../utils/disableMethods');

module.exports = function(Product) {
// Disable all methods except whitelist
  const whitelist = [
    'create',
    'find',
    'findById',
    'prototype.patchAttributes',
    'deleteById',
  ];
  disableAllMethodsWithExceptions(Product, whitelist);
};
