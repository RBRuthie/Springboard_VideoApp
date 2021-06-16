import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import Reg_Login from './routes/Reg_Login';
import User_Options from './routes/User_Options';
import Videos from './routes/Videos';


const App = () =>{
  return <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reg_login" component={Reg_Login} />
          <Route exact path="/user_options" component={User_Options} />
          <Route exact path="/videos/:query" component={Videos} />
        </Switch>
      </Router>
  </div>;
}

export default App;