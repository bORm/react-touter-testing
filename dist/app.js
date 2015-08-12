(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var Home = React.createClass({
  displayName: 'Home',

  render: function render() {
    return React.createElement(
      'h1',
      null,
      'Home'
    );
  }
});

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(RouteHandler, null)
    );
  }
});

var routes = React.createElement(
  Route,
  { path: '/', handler: App },
  React.createElement(DefaultRoute, { handler: Home })
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});

},{"react":"react","react-router":"react-router"}]},{},[1]);
