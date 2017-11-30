var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// Load Foundation

//require('./redux-examples.jsx');
require('./redux-todo-example.jsx');

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
//app css
require('applicationStyles')


ReactDOM.render(
  <p>Boilerplate 3 Router</p>,
  document.getElementById("app")
);
