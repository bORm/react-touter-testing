var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var Home = React.createClass({
  render: function(){
    return (
        <h1>Home</h1>
      )
  }
});

var App = React.createClass({
  render: function(){
    return (
      <div>
        <RouteHandler />
      </div>
      )
  }
});

var routes = (
  <Route path='/' handler={App}>
    <DefaultRoute handler={Home} />
  </Route>
);

Router.run(routes, function(Handler){
  React.render(<Handler/>, document.body);
});
