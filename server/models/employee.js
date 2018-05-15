'use strict';

const {disableAllMethodsWithExceptions} = require('../utils/disableMethods');

module.exports = function(Employee) {
// Disable all methods except whitelist
  const whitelist = [
    'create',
    'find',
    'findById',
    'prototype.patchAttributes',
    'deleteById',
  ];
  disableAllMethodsWithExceptions(Employee, whitelist);
};
