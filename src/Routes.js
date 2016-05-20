require('./scss/app.scss');
import React, { Component } from 'react';
import {App,WaterFall,Pin,User,Board,SignInForm,SignUpForm} from './jsx/template';
import {browserHistory,Router,Route,IndexRoute,Redirect} from 'react-router';
export default class Routes extends Component {
  render() {
    return (
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	      <IndexRoute component={WaterFall} />
	      <Route path="/find/" component={WaterFall} /> 
	      <Route path="/newest/" component={WaterFall} /> 
	      <Route path="/pin/:id" component={Pin} /> 
	      <Route path="/user/:id" component={User} /> 
	      <Route path="/board/:id" component={Board} /> 
	      <Route path="/tag/:tagName" component={WaterFall} /> 
	      <Route path="/category/:categroyName" component={WaterFall} /> 
	      <Route path="/signin" component={SignInForm} />
	      <Route path="/signup" component={SignUpForm} />
	      <Redirect from="/signout" to="/" />
	      <Redirect from="*" to="/" />
	    </Route>
	  </Router>
    );
  }
}
