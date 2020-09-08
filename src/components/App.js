/* This is the main component where all the routing is handled. */

import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './Login/Login';
import ProtectedRoute from './ProtectedRoute';
import AdminLayout  from '../layouts/Admin';
import CampaignEdit from "./Campaign/CampaignEdit";
import history from '../history';


class  App extends React.Component{

  render(){
    return (
      <div className="App">

        <Router history = {history}>
        <Switch>
          <Route path ="/" exact component = {Login}/>
           {/* <ProtectedRoute  path = "/admin/dashboard/edit/:id" component = {CampaignEdit} />  */}
          <ProtectedRoute  path = "/"  component = {props => <AdminLayout {...props}/>} />
          <Redirect from="/" to="/dashboard" />
          {/* <Route exact component = {Error}/> */}
        </Switch>
        </Router>
      </div>
    );
}

}

export default App;
