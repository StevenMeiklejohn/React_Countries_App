var React = require('react');
var ReactDOM = require('react-dom');
var CountriesBOX = require('./components/CountriesBOX.jsx')

window.onload = function(){
  ReactDOM.render(
    <CountriesBOX/>,
    document.getElementById('app')
  );
}


