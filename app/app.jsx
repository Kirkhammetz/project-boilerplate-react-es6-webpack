/** REACT **/
import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory } from 'react-router'

/** COMPONENTS **/


// Foundation init
$(document).foundation();

// App Styles
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <p>React Boilerplate</p>
  ,document.getElementById('app')
);
