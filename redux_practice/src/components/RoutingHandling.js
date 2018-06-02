import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import UserForm from './UserForm';
import userInformation from './UsersInformation'
class RoutingHandling extends React.Component{

  render(){

    return (
      <BrowserRouter>
      <div>
      <ul>
      <li><Link to ="/form">ADD USER</Link></li>
      <li><Link to = "/users">SHOW USERS</Link></li>
      </ul>
        <Switch>
        <Route path="/form" component={UserForm}/>
        <Route path = "/users" component={userInformation}/>
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default RoutingHandling;
