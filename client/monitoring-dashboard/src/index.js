import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot} from 'recoil';


//components
import LoginPage from './components/Login/Login';
import Dashboard from './components/Dashboard/index';

// styling
import 'antd/dist/antd.min.css';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router>
          <Switch>
            <Route path="/" exact component={LoginPage}/>
            <Route path ="/dashboard/:user" component={Dashboard}/>
          </Switch>
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
