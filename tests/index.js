// use babel-register to precompile ES6 syntax
require('babel-register')({
  ignore: /node_modules/,
});

require('isomorphic-fetch');
require('./tests');
